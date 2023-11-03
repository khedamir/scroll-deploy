// import CheckList from "@editorjs/checklist";
// import Code from "@editorjs/code";
// import Delimiter from "@editorjs/delimiter";
// import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
// import InlineCode from "@editorjs/inline-code";
import Link from "@editorjs/link";
// import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";

export const EDITOR_TOOLS = {
  // code: Code,
  header: {
    class: Header,
    config: {
      placeholder: "Заголовок",
      levels: [1, 2, 3],
      defaultLevel: 1,
    },
  },
  paragraph: {
    class: Paragraph,
  },
  // checklist: CheckList,
  // embed: Embed,
  image: Image,
  // inlineCode: InlineCode,
  link: Link,
  // list: List,
  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+O',
    config: {
      quotePlaceholder: 'Введите цитату',
      captionPlaceholder: 'Автор цитаты',
    },
  },
  image: SimpleImage,
  // delimiter: Delimiter,
};


export const message = {
  ui: {
    "blockTunes": {
      "toggler": {
        "Click to tune": "Нажмите, чтобы настроить",
        "or drag to move": "или перетащите"
      },
    },
  },
  toolNames: {
    "Text": "Параграф",
    "Heading": "Заголовок",
    "Quote": "Цитата",
    "Link": "Ссылка",
    "Image": "Фото или видео"
  },
  tools: {
    "warning": {
      "Title": "Название",
      "Message": "Сообщение",
    },
    "link": {
      "Link": "Вставьте ссылку"
    },
    "linkTool": {
      "Link": "Ссылка",
      "Couldn't fetch the link data": "Не удалось получить данные",
      "Couldn't get this link data, try the other one": "Не удалось получить данные по ссылке, попробуйте другую",
      "Wrong response format from the server": "Неполадки на сервере",
    },
    "image": {
      "Select an Image": "Выберите файл",
      "Caption": "Подпись",
      "With border": "Добавить рамку",
      "Stretch image": "Растянуть",
      "With background": "Добавить подложку",
    },
    "header": {
      "Header": "Заголовок",
      "Heading 1": "Заголовок уровня 1",
      "Heading 2": "Заголовок уровня 2",
      "Heading 3": "Заголовок уровня 3",
    },
    "paragraph": {
      "Enter something": "Введите текст"
    },
    "stub": {
      'The block can not be displayed correctly.': 'Блок не может быть отображен'
    }
  },
  blockTunes: {
    "alignLeft": {
      "Align Left": "выровнять по левому краю"
    },
    "delete": {
      "Delete": "Удалить",
      "Click to delete": "Жми, чтобы удалить"
    },
    "moveUp": {
      "Move up": "Переместить вверх"
    },
    "moveDown": {
      "Move down": "Переместить вниз"
    }
  },
}