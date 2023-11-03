import React, { useEffect, useRef } from "react";
import EditorJS, { EditorConfig, OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS, message } from "./EditorTools";

interface EditorProps {
  data: OutputData;
  onChange: (data: OutputData) => void;
  holder: string;
}

export default function Editor({ data, onChange, holder }: EditorProps) {
  // Добавляем ссылку на редактор
  const ref = useRef<EditorJS | null>(null);


  // Инициализируем Editor.js
  useEffect(() => {
    // Инициализируем редактор, если у нас нет ссылки
    if (!ref.current) {
      const editorConfig: EditorConfig = {
        holder,
        autofocus: true,
        tools: EDITOR_TOOLS,
        data,
        placeholder: 'Давайте напишем классную историю!...',
        i18n: {
          messages: message
        },
        onChange: async (api, event) => {
          const savedData = await api.saver.save();
          console.log(savedData)
          onChange(savedData);
        },
      };

      const editor = new EditorJS(editorConfig);
      ref.current = editor;
    }

    // Добавляем функцию очистки при размонтировании
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <div id={holder} className="prose max-w-full" />;
}
