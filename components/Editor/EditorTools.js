import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
import Link from "@editorjs/link";
import Quote from "@editorjs/quote";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import { FileUpload } from "../../utils/formFetchs";

export const EDITOR_TOOLS = {
  header: {
    class: Header,
    config: {
      placeholder: "Заголовок",
      levels: [2, 3, 4, 5],
      defaultLevel: 2,
    },
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  embed: {
    class: Embed,
    inlineToolbar: true,
    config: {
      services: {
        youtube: true,
        coub: true,
      },
    },
  },
  image: {
    class: Image,
    config: {
      uploader: {
        async uploadByFile(file) {
          try {
            const formData = new FormData();
            formData.append("image", file);
            const result = await FileUpload({
              userId: localStorage.getItem("id"),
              file,
            });
            return {
              success: 1,
              file: {
                url: result.filePath,
              },
            };
          } catch {
            return {
              success: 0,
              file: {
                url: "",
              },
            };
          }
        },
      },
    },
  },
  // link: Link,
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: "Введите цитату",
      captionPlaceholder: "Автор цитаты",
    },
  },
};

export const message = {
  ui: {
    blockTunes: {
      toggler: {
        "Click to tune": "Нажмите, чтобы настроить",
        "or drag to move": "или перетащите",
      },
    },
  },
  toolNames: {
    Text: "Параграф",
    Heading: "Заголовок",
    Quote: "Цитата",
    Link: "Ссылка",
    Image: "Фото",
  },
  tools: {
    warning: {
      Title: "Название",
      Message: "Сообщение",
    },
    // link: {
    //   Link: "Вставьте ссылку",
    // },
    // linkTool: {
    //   Link: "Ссылка",
    //   "Couldn't fetch the link data": "Не удалось получить данные",
    //   "Couldn't get this link data, try the other one":
    //     "Не удалось получить данные по ссылке, попробуйте другую",
    //   "Wrong response format from the server": "Неполадки на сервере",
    // },
    image: {
      "Select an Image": "Выберите файл",
      Caption: "Подпись",
      "With border": "Добавить рамку",
      "Stretch image": "Растянуть",
      "With background": "Добавить подложку",
    },
    header: {
      Header: "Заголовок",
      "Heading 2": "Заголовок уровня 2",
      "Heading 3": "Заголовок уровня 3",
      "Heading 4": "Заголовок уровня 4",
      "Heading 5": "Заголовок уровня 5",
    },
    paragraph: {
      "Enter something": "Введите текст",
    },
    stub: {
      "The block can not be displayed correctly.":
        "Блок не может быть отображен",
    },
  },
  blockTunes: {
    alignLeft: {
      "Align Left": "выровнять по левому краю",
    },
    delete: {
      Delete: "Удалить",
      "Click to delete": "Жми, чтобы удалить",
    },
    moveUp: {
      "Move up": "Переместить вверх",
    },
    moveDown: {
      "Move down": "Переместить вниз",
    },
  },
};
