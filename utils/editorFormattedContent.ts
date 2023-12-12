import { OutputData } from "@editorjs/editorjs";

export default function editorFormattedContent(data: OutputData) {
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
            <a name="quote"></a><br>${block.data.text}<a name="quote_end"></a><br>
            <a name="quote_author"></a><br>${block.data.caption}<a name="quote_author_end"></a>`;
        } else if (block.type === "image") {
          return `<img src="${block.data.file.url}" alt="img" /><h6>${block.data.caption}</h6>`;
        }
        // Добавьте обработку других типов блоков, если необходимо
        return "";
      })
      .join("");
  return result;
}
