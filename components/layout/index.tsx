import React, { FC, ReactNode, useState } from "react";
import Header from "../header";
import Menu from "../menu";

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [chatAiActive, setChatAiActive] = useState(false);
  return (
    <div>
      <Header
        chatAiActive={chatAiActive}
        setChatAiActive={setChatAiActive}
        menuActive={menuActive}
        setMenuActive={setMenuActive}
      />
      <Menu
        chatAiActive={chatAiActive}
        setChatAiActive={setChatAiActive}
        active={menuActive}
        setActive={setMenuActive}
      />
      <div className="layout">
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
