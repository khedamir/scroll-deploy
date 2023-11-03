import { createContext, useContext, useEffect, useState } from "react";
import { handleScrollDisabled } from "../utils/handleScrollDisabled";

const ModalsContext = createContext({
  aiChatActive: false,
  setAiChatActive: (value: boolean) => {},
  menuActive: false,
  setMenuActive: (value: boolean) => {},
  loginActive: false,
  setLoginActive: (value: boolean) => {},
  registerActive: false,
  setRegisterActive: (value: boolean) => {},
  changePasswordActive: false,
  setChangePasswordActive: (value: boolean) => {},
  searchActive: false,
  setSearchActive: (value: boolean) => {},
  notification: false,
  setNotification: (value: boolean) => {},
});

const ModalsContextProvider = (props: any) => {
  const [aiChatActive, setAiChatActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [registerActive, setRegisterActive] = useState(false);
  const [changePasswordActive, setChangePasswordActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    const disabled =
      aiChatActive || loginActive || registerActive || menuActive;
    handleScrollDisabled(disabled);
  }, [aiChatActive, loginActive, registerActive, menuActive]);

  return (
    <ModalsContext.Provider
      value={{
        aiChatActive,
        setAiChatActive,
        menuActive,
        setMenuActive,
        loginActive,
        setLoginActive,
        registerActive,
        setRegisterActive,
        changePasswordActive,
        setChangePasswordActive,
        searchActive,
        setSearchActive,
        notification,
        setNotification,
      }}
      {...props}
    />
  );
};

const useModalsContext = () => useContext(ModalsContext);
export { ModalsContextProvider, useModalsContext };
