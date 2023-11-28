import React, { ReactNode, useEffect, useState } from "react";
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
import ConfirmRegistration from "../modals/confirmRegistration";

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
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const router = useRouter();
  const currentHeader = headerComponents[router.pathname] || (
    <Header isScrolling={isScrolling} />
  );

  const dispatch = useAppDispatch();

  const handleScroll = () => {
    const layoutWrap = document.querySelector(".layout__wrap") as HTMLElement;
    const header = document.querySelector(".header") as HTMLElement;

    if (
      window.pageYOffset >
      layoutWrap.getBoundingClientRect().top -
        header.getBoundingClientRect().height
    ) {
      setIsScrolling(true);
    } else if (window.pageYOffset <= 0) {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const header = document.querySelector(".header") as HTMLElement;

    const scrollHandler = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos || prevScrollPos <= 0) {
        // if up
        if (header && window.innerWidth >= 1200) {
          if (header.classList.contains("header--center")) {
            handleScroll();
          }
        }
      } else {
        // if down
        if (header && window.innerWidth >= 1200) {
          if (header.classList.contains("header--center")) {
            handleScroll();
          }
        }
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      // Очистка слушателя событий при размонтировании компонента
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

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
      <ConfirmRegistration />
      {currentHeader}
      {children}
    </div>
  );
};

export default Layout;
