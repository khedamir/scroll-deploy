import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import Link from "next/link";
import { useModalsContext } from "../../context/ModalsContext";
import UserIcon from "../userIcon";

const UserBlock = () => {
  const { user } = useSelector(selectUser);
  const { setLoginActive } = useModalsContext();
  const login = () => {
    setLoginActive(true);
  };

  return (
    <span className={`header__btn user-block ${user && "is--active"}`}>
      {user ? (
        <Link href="/lk">
          <UserIcon userPhoto={user.photo} nameLatter={user.name[0]} />
        </Link>
      ) : (
        <span onClick={login}>Войти</span>
      )}
    </span>
  );
};

export default UserBlock;
