import React, { useEffect, useRef } from "react";
import EditorJS, { EditorConfig, OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS, message } from "./EditorTools";
import { useEditorContext } from "../../context/editorContext";

interface EditorProps {
  holder: string;
}

export default function Editor({ holder }: EditorProps) {
  const { data, setData, dataUpdate, setDataUpdate } = useEditorContext();
  const ref = useRef<EditorJS | null>(null);

  useEffect(() => {
    const initializeEditor = async () => {
      const editorConfig: EditorConfig = {
        holder,
        autofocus: true,
        tools: EDITOR_TOOLS,
        data,
        placeholder: "Написать статью...",
        i18n: {
          messages: message,
        },
        onChange: async (api, event) => {
          const savedData = await api.saver.save();
          console.log(savedData);
          setData(savedData);
        },
      };

      const editor = new EditorJS(editorConfig);
      ref.current = editor;
    };

    if (!ref.current) {
      initializeEditor();
    }

    // Добавляем функцию очистки при размонтировании
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    console.log("editer");
    if (data && dataUpdate) {
      ref.current?.render(data);
    }
    setDataUpdate(false);
  }, [dataUpdate]);

  return <div id={holder} className="prose max-w-full" />;
}
