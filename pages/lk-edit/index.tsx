import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/auth/slice";
import { Status } from "../../redux/types";
import { useAppDispatch } from "../../redux/store";
import Loader from "../../components/loader";
import UserDataForm from "../../components/userDataForm";

const LkEdit = () => {
  const { user, status } = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const [loaderText, setLoaderText] = useState("Проверка авторизации");

  const logoutFn = () => {
    setLoaderText("Выход из аккаунта");
    localStorage.removeItem("token");
    dispatch(logout());
    navigate.push("/");
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate.push("/");
    }
    if (status === Status.ERROR) {
      navigate.push("/");
    }
  }, [user, status]);

  if (!user) {
    return (
      <div className="layout layout--sticky-bottom">
        <div className="container">
          <Loader text={loaderText} />
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
                          <Link href="/lk" className="back-btn lk__back">
                            <ReactSVG src="/img/sprite/icon-back.svg" />
                          </Link>
                        </div>
                        <div className="lk__controls">
                          <button onClick={logoutFn} className="lk__exit">
                            Выйти из аккаунта
                          </button>
                        </div>
                      </div>
                      <div className="lk__main">
                        <div className="lk-edit lk__edit">
                          <UserDataForm />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="layout__right">
                <span className="layout__info layout__sticky layout__sticky--bottom">
                  На проекте с 12 янв 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LkEdit;
