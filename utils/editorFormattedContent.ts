import { OutputData } from "@editorjs/editorjs";

export function parseHTMLToEditorData(htmlString: string): OutputData {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = htmlString;

  const blocks: any[] = [];

  Array.from(wrapper.children).forEach((child) => {
    if (child.tagName.toLowerCase() === "p") {
      blocks.push({
        type: "paragraph",
        data: {
          text: child.innerHTML,
        },
      });
    } else if (child.tagName.toLowerCase().startsWith("h")) {
      const level = Number(child.tagName.charAt(1));
      if (level !== 6) {
        blocks.push({
          type: "header",
          data: {
            text: child.innerHTML,
            level,
          },
        });
      }
    } else if (child.tagName.toLowerCase() === "img") {
      blocks.push({
        type: "image",
        data: {
          file: {
            url: child.getAttribute("src") || "",
          },
          caption: child.nextElementSibling?.textContent || "",
        },
      });
      child = child.nextElementSibling?.nextElementSibling as Element;
    } else if (
      child instanceof HTMLAnchorElement &&
      child.getAttribute("name") === "quote"
    ) {
      // Обработка цитаты
      const quoteText = child.nextSibling?.textContent || "";
      const quoteAuthor =
        child.nextElementSibling?.nextElementSibling?.nextElementSibling
          ?.nextSibling?.textContent || "";

      console.log(
        child.nextElementSibling?.nextElementSibling?.nextElementSibling
      );
      blocks.push({
        type: "quote",
        data: {
          text: quoteText,
          caption: quoteAuthor,
        },
      });

      // Пропустите следующие элементы, так как они уже были обработаны
      for (let i = 0; i < 4; i++) {
        child = child.nextElementSibling as Element;
      }
    } else if (child.tagName.toLowerCase() === "iframe") {
      blocks.push({
        type: "embed",
        data: {
          embed: child.getAttribute("src"),
          source: child.getAttribute("src"),
          service: "youtube",
          height: 320,
          width: 580,
          caption: child.getAttribute("title"),
        },
      });
      child = child.nextElementSibling?.nextElementSibling as Element;
    }
  });

  console.log({
    time: Date.now(),
    blocks,
    version: "2.28.2", // Укажите актуальную версию Editor.js
  });
  return {
    time: Date.now(),
    blocks,
    version: "2.28.2", // Укажите актуальную версию Editor.js
  };
}

export function editorFormattedContent(data: OutputData) {
  const result =
    data &&
    data.blocks
      .map((block) => {
        if (block.type === "paragraph") {
          return `<p>${block.data.text}</p>`;
        } else if (block.type === "header") {
          return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
        } else if (block.type === "quote") {
          return `
            <a name="quote"></a>${block.data.text}<a name="quote_end"></a><br>
            <a name="quote_author"></a>${block.data.caption}<a name="quote_author_end"></a>`;
        } else if (block.type === "image") {
          return `<img src="${block.data.file.url}" alt="img" /><h6>${block.data.caption}</h6>`;
        } else if (block.type === "embed") {
          return `<iframe width="1280" height="720" src="${block.data.embed}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" title="${block.data.caption}"></iframe>`;
        }
        // Добавьте обработку других типов блоков, если необходимо
        return "";
      })
      .join("");
  console.log(result);
  return result;
}

export function editorFormattedContentServer(data: OutputData) {
  const result =
    data &&
    data.blocks
      .map((block) => {
        if (block.type === "paragraph") {
          return `<p>${block.data.text}</p>`;
        } else if (block.type === "header") {
          return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
        } else if (block.type === "quote") {
          return `
            <a name="quote"></a>${block.data.text}<a name="quote_end"></a><br>
            <a name="quote_author"></a>${block.data.caption}<a name="quote_author_end"></a>`;
        } else if (block.type === "image") {
          return `<img src="${removeDomainFromUrl(
            block.data.file.url
          )}" alt="img" /><h6>${block.data.caption}</h6>`;
        } else if (block.type === "embed") {
          return `<iframe width="1280" height="720" src="${block.data.embed}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" title="${block.data.caption}"></iframe>`;
        }
        // Добавьте обработку других типов блоков, если необходимо
        return "";
      })
      .join("");
  return result;
}

export function removeDomainFromUrl(url: string) {
  if (!url) {
    return url;
  }
  const uploadIndex = url.indexOf("/upload");

  if (uploadIndex !== -1) {
    // Если подстрока "upload" найдена, обрезаем строку с этой позиции
    return url.substring(uploadIndex);
  } else {
    // Если подстрока не найдена, возвращаем оригинальный URL
    return url;
  }
}
