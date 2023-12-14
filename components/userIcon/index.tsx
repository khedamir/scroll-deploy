import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";

interface UserIconProps {
  userPhoto: string;
  nameLatter: string;
  avatarColor: string | undefined;
  photo?: string | null;
}

const UserIcon: FC<UserIconProps> = ({
  photo,
  userPhoto,
  nameLatter,
  avatarColor,
}) => {
  return (
    <span className="user-btn">
      {userPhoto || photo ? (
        <picture className="user-btn__photo">
          <img src={photo ? photo : userPhoto} alt="user photo" />
        </picture>
      ) : (
        <span
          style={{ backgroundColor: avatarColor }}
          className="user-btn__icon"
        >
          <span className="user-btn__icon--wrapper">{nameLatter}</span>
        </span>
      )}
    </span>
  );
};

export default UserIcon;
