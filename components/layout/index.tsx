import React, { FC, ReactNode, useEffect } from "react";
import Menu from "../menu";
import { useRouter } from "next/router";
import ThirdyHeader from "../header/thirdyHeader";
import SecondHeader from "../header/secondHeader";
import Header from "../header/header";
import ChatAi from "../aiChat";
import { useAppDispatch } from "../../redux/store";
import { fetchAuthMe } from "../../redux/auth/asyncAction";
import Login from "../modals/login";
import ChangePassword from "../modals/changePassword";
import Search from "../search";

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  const router = useRouter();

  let headerComponent;
  if (router.pathname === "/webinar/[id]") {
    headerComponent = <ThirdyHeader title="Вебинар" />;
  } else if (router.pathname === "/faq") {
    headerComponent = <ThirdyHeader title="Помощь" />;
  } else if (router.pathname === "/vacancies") {
    headerComponent = <ThirdyHeader title="Вакансии" />;
  } else if (router.pathname === "/lk" || router.pathname === "/lk-edit") {
    headerComponent = <ThirdyHeader title="Личный кабинет" />;
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

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchAuthMe());
    }
  }, [dispatch]);

  return (
    <div>
      <ChatAi />
      <Login />
      <ChangePassword />
      <Search />
      <Menu />
      {headerComponent}
      {children}
    </div>
  );
};

export default Layout;
