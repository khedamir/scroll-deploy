import React from "react";

const EmptyBookmarks = () => {
  return (
    <div className="empty-bookmarks">
      <p>
        Здесь появятся ваши сохраненные материалы. Нажмите на
        <span className="empry-bookmarks__icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_10227_135089)">
              <path
                d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
                fill="#CACACA"
              />
            </g>
            <defs>
              <clipPath id="clip0_10227_135089">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        , чтобы добавить их в закладки.
      </p>
    </div>
  );
};

export default EmptyBookmarks;
