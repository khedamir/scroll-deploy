import React, { FC, ReactNode, useState } from "react";
import Menu from "../menu";
import { useRouter } from "next/router";
import ThirdyHeader from "../header/thirdyHeader";
import SecondHeader from "../header/secondHeader";
import Header from "../header/header";
import ChatAi from "../aiChat";

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  const router = useRouter();

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
    headerComponent = <SecondHeader />;
  } else {
    headerComponent = <Header />;
  }

  return (
    <div>
      <ChatAi />
      {headerComponent}
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
