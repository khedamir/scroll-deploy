import React, { ReactNode, useEffect } from "react";
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
import Notification from "../notifications";
import { fetchFavorites } from "../../redux/favorites/asyncAction";
import Register from "../modals/register";

const Layout = ({ children }: { children: ReactNode }) => {
  const headerComponents: any = {
    "/webinar/[id]": <ThirdyHeader title="Вебинар" />,
    "/faq": <ThirdyHeader title="Помощь" />,
    "/vacancies": <ThirdyHeader title="Вакансии" />,
    "/lk": <ThirdyHeader title="Личный кабинет" />,
    "/lk-edit": <ThirdyHeader title="Личный кабинет" />,
    "/videos": <SecondHeader />,
    "/videos/[id]": <SecondHeader />,
    "/lectures": <SecondHeader />,
    "/lectures/[id]": <SecondHeader />,
    "/podcasts": <SecondHeader />,
    "/podcasts/[id]": <SecondHeader />,
    "/lawyers-club": <SecondHeader />,
  };

  const router = useRouter();
  const currentHeader = headerComponents[router.pathname] || <Header />;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("id")) {
      dispatch(fetchAuthMe());
      dispatch(
        fetchFavorites({
          userId: String(localStorage.getItem("id")),
          type: "get",
        })
      );
    }
  }, [dispatch]);

  return (
    <div>
      <ChatAi />
      <Login />
      <Register />
      <ChangePassword />
      <Search />
      <Menu />
      <Notification />
      {currentHeader}
      {children}
    </div>
  );
};

export default Layout;
