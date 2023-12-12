import React, { useEffect, useState } from "react";
import Publications from "../../components/lkComponents/publications";
import Bookmarks from "../../components/lkComponents/bookmarks";
import Constructor from "../../components/lkComponents/constructor";
import Pro from "../../components/lkComponents/pro";
import Advertising from "../../components/lkComponents/advertising";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import { useAppDispatch } from "../../redux/store";
import { useRouter } from "next/router";
import { Status } from "../../redux/types";
import { useModalsContext } from "../../context/ModalsContext";
import { fetchFavorites } from "../../redux/favorites/asyncAction";
import Loader from "../../components/loader";
import UserIcon from "../../components/userIcon";
import { formatDateDifference } from "../../utils/formatDate";

type ActiveBlockValue =
  | "publications"
  | "bookmarks"
  | "constructor"
  | "pro"
  | "advertising";

const Lk = () => {
  const [activeBlock, setActiveBlock] =
    useState<ActiveBlockValue>("publications");
  const { setLoginActive } = useModalsContext();
  const { user, status } = useSelector(selectUser);
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchFavorites({ userId: user.id, type: "get" }));
    }
  }, [user, status]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate.push("/");
    }
    if (status === Status.ERROR) {
      navigate.push("/");
    }
    setLoginActive(false);
    if (navigate.query.block) {
      setActiveBlock(navigate.query.block as ActiveBlockValue);
    }
  }, []);

  if (!user) {
    return (
      <div className="layout layout--sticky-bottom">
        <div className="container">
          <Loader text="Проверка авторизации" />
        </div>
      </div>
    );
  }

  return (
    <div className="layout layout--sticky-bottom">
      <div className="container">
        <div className="layout__wrap">
          <div className="layout__left">
            <Footer otherClassName="layout__footer layout__sticky layout__sticky--bottom" />
          </div>
          <div className="layout__main">
            <div className="layout__main-wrapper">
              <div className="layout__center">
                <div className="lk">
                  <div className="lk__wrap">
                    <div className="lk__wrapper">
                      <div className="lk__top">
                        <div className="lk__controls">
                          <Link href="/" className="back-btn lk__back">
                            <ReactSVG src="/img/sprite/icon-back.svg" />
                          </Link>
                        </div>
                        <div className="lk__controls">
                          <Link href="/lk-edit" className="lk__settings">
                            <ReactSVG src="/img/sprite/icon-settings.svg" />
                          </Link>
                        </div>
                      </div>
                      <div className="lk__main">
                        <div className="lk-user lk__user">
                          <div className="lk-user__wrapper">
                            <div className="lk-user__img">
                              <UserIcon
                                userPhoto={user.photo}
                                nameLatter={user.name[0]}
                              />
                            </div>
                            <div className="lk-user__body">
                              <span className="lk-user__name">
                                {user.name} {user.last_name}
                              </span>
                              <span className="lk-user__help">
                                {user.email}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lk-tabs lk__tabs">
                      <ul className="lk-tabs__list">
                        <li
                          className={`lk-tabs__item ${
                            activeBlock === "publications" && "is--active"
                          }`}
                          onClick={() => setActiveBlock("publications")}
                        >
                          <button className="lk-tabs__tab">Публикации</button>
                        </li>
                        <li
                          className={`lk-tabs__item ${
                            activeBlock === "bookmarks" && "is--active"
                          }`}
                          onClick={() => setActiveBlock("bookmarks")}
                        >
                          <button className="lk-tabs__tab">Закладки</button>
                        </li>
                        <li
                          className={`lk-tabs__item ${
                            activeBlock === "constructor" && "is--active"
                          }`}
                          onClick={() => setActiveBlock("constructor")}
                        >
                          <button className="lk-tabs__tab">
                            Конструктор документов
                          </button>
                        </li>
                        <li
                          className={`lk-tabs__item ${
                            activeBlock === "pro" && "is--active"
                          }`}
                          onClick={() => setActiveBlock("pro")}
                        >
                          <button className="lk-tabs__tab">Подписка PRO</button>
                        </li>
                        <li
                          className={`lk-tabs__item ${
                            activeBlock === "advertising" && "is--active"
                          }`}
                          onClick={() => setActiveBlock("advertising")}
                        >
                          <button className="lk-tabs__tab">
                            Заказать рекламу
                          </button>
                        </li>
                      </ul>
                      <Publications active={activeBlock === "publications"} />
                      <Bookmarks active={activeBlock === "bookmarks"} />
                      <Constructor active={activeBlock === "constructor"} />
                      <Pro active={activeBlock === "pro"} />
                      <Advertising active={activeBlock === "advertising"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="layout__right">
                <span className="layout__info layout__sticky layout__sticky--bottom">
                  На проекте с {formatDateDifference(user.date_register)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lk;
