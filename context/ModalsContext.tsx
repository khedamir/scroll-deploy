import { createContext, useContext, useEffect, useState } from "react";
import { handleScrollDisabled } from "../utils/handleScrollDisabled";

const ModalsContext = createContext({
  aiChatActive: false,
  setAiChatActive: (value: boolean) => {},
  menuActive: false,
  setMenuActive: (value: boolean) => {},
});

const ModalsContextProvider = (props: any) => {
  const [aiChatActive, setAiChatActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const disabled = aiChatActive;
    handleScrollDisabled(disabled);
  }, [aiChatActive]);

  return (
    <ModalsContext.Provider
      value={{
        aiChatActive,
        setAiChatActive,
        menuActive,
        setMenuActive,
      }}
      {...props}
    />
  );
};

const useModalsContext = () => useContext(ModalsContext);
export { ModalsContextProvider, useModalsContext };
