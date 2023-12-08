import React, { FC, useState } from "react";
import { ReactSVG } from "react-svg";
import dynamic from "next/dynamic";
import { Categories, EmojiClickData } from "emoji-picker-react";

const CategoriesList = [
  { category: Categories.SUGGESTED, name: "Недавние" },
  { category: Categories.SMILEYS_PEOPLE, name: "Смайлы & люди" },
  { category: Categories.ANIMALS_NATURE, name: "Животные & природа" },
  { category: Categories.TRAVEL_PLACES, name: "Путешествие & места" },
  { category: Categories.ACTIVITIES, name: "Занятия" },
  { category: Categories.OBJECTS, name: "Предметы" },
  { category: Categories.SYMBOLS, name: "Символы" },
  { category: Categories.FLAGS, name: "Флаги" },
];

const EmojiPicker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

interface EmojiBlockProps {
  text: string;
  setText: (v: any) => void;
}

const EmojiBlock: FC<EmojiBlockProps> = ({ text, setText }) => {
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiObject: EmojiClickData, event: MouseEvent) => {
    setText((prevInput: string) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <div className="comments-new__controls">
      <button
        onClick={() => setShowPicker(!showPicker)}
        className="comments-new__emoji"
      >
        <ReactSVG src="/img/sprite/icon-emoji.svg" />
      </button>

      <div className={`emoji-block ${showPicker && "is--active"}`}>
        <EmojiPicker
          previewConfig={{ showPreview: false }}
          categories={CategoriesList}
          searchPlaceHolder="Поиск"
          width={"100%"}
          height={350}
          onEmojiClick={onEmojiClick}
        />
      </div>
    </div>
  );
};

export default EmojiBlock;
