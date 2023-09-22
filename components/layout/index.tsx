import React, { FC, ReactNode, useState } from "react";
import Menu from "../menu";
import { useRouter } from "next/router";
import ThirdyHeader from "../headers/thirdyHeader";
import SecondHeader from "../headers/secondHeader";
import Header from "../headers/header";

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [chatAiActive, setChatAiActive] = useState(false);

  const router = useRouter();

  console.log(router.pathname);

  let headerComponent;
  if (router.pathname === "/webinar/[id]") {
    headerComponent = <ThirdyHeader />;
  } else if (
    router.pathname === "/videos" ||
    router.pathname === "/videos/[id]" ||
    router.pathname === "/lectures" ||
    router.pathname === "/lectures/[id]" ||
    router.pathname === "/podcasts" ||
    router.pathname === "/lawyers-club"
  ) {
    headerComponent = (
      <SecondHeader menuActive={menuActive} setMenuActive={setMenuActive} />
    );
  } else {
    headerComponent = (
      <Header
        chatAiActive={chatAiActive}
        setChatAiActive={setChatAiActive}
        menuActive={menuActive}
        setMenuActive={setMenuActive}
      />
    );
  }

  return (
    <div>
      {headerComponent}
      <Menu
        chatAiActive={chatAiActive}
        setChatAiActive={setChatAiActive}
        active={menuActive}
        setActive={setMenuActive}
      />
      {children}
    </div>
  );
};

export default Layout;
