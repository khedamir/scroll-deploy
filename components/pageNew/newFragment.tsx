import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import RenderHTML from "../renderHTML";
import NewContentWidget from "./newContentWidget";
import NewWidget from "./newWidget";

interface NewFragmentProps {
  fragment: string;
  setModalActive: (v: boolean) => void;
}

const NewFragment: FC<NewFragmentProps> = ({ fragment, setModalActive }) => {
  const [widgetTitle, setWidgetTitle] = useState<string | null>();
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const [replacedHTMLFragment, setReplacedHTMLFragment] = useState<string[]>(
    []
  );

  const handleRefCallback = (ref: HTMLDivElement | null) => {
    widgetRef.current = ref;
  };

  let replacedHTML = fragment.replaceAll(
    '<a name="quote"></a>',
    '<div className="c-quote__wrapper"><p className="c-quote__description">'
  );
  replacedHTML = replacedHTML.replaceAll(
    '<a name="quote_end"></a><br>',
    "</p>"
  );
  replacedHTML = replacedHTML.replaceAll(
    '<a name="quote_author"></a>',
    '<span className="c-quote__author">'
  );
  replacedHTML = replacedHTML.replaceAll(
    '<a name="quote_author_end"></a>',
    "</span></div></div>"
  );

  useEffect(() => {
    const anchorRegex =
      /<a\s+name="widget"><\/a>[\s\S]*?<a\s+name="widget_end"><\/a>/;

    const anchorMatches = replacedHTML.match(anchorRegex);

    if (anchorMatches) {
      setReplacedHTMLFragment(replacedHTML.split(anchorRegex));

      // Регулярное выражение для извлечения текста между тегами
      const regex = /<a name="widget"><\/a>(.*?)<a name="widget_end"><\/a>/;

      // Применяем регулярное выражение к строке
      const match = anchorMatches[0].match(regex);

      // Извлекаем текст между тегами, если есть совпадение
      const extractedText = match ? match[1] : null;
      setWidgetTitle(extractedText);
    }
  }, []);

  return (
    <React.Fragment>
      {replacedHTMLFragment.length && widgetTitle ? (
        <React.Fragment>
          {replacedHTMLFragment.map((item, index) => (
            <React.Fragment key={index}>
              <RenderHTML content={item} />
              {index === 0 && (
                <NewContentWidget
                  refCallback={handleRefCallback}
                  title={widgetTitle}
                  setModalActive={setModalActive}
                />
              )}
            </React.Fragment>
          ))}
          <NewWidget widgetRef={widgetRef} />
        </React.Fragment>
      ) : (
        <RenderHTML content={replacedHTML} />
      )}
    </React.Fragment>
  );
};

export default NewFragment;
