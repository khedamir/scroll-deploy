import Link from "next/link";
import React from "react";

const PopularVideos = () => {
  return (
    <div className="popular-videos">
      <div className="popular-videos__wrapper">
        <div className="popular-videos__videos">
          <Link href="#" className="video-card popular-videos__videos-item">
            <picture className="video-card__img">
              <img src="img/video-card-01.jpg" alt="Image" />
            </picture>
            <div className="video-card__body">
              <div className="video-card__top">
                <span className="video-card__category">Политика</span>
              </div>
              <div className="video-card__bottom">
                <span className="video-card__description">
                  Как работает новая вакцина от&nbsp;рака
                </span>
                <div className="video-card__author">
                  <img src="img/user-01.jpg" alt="Image" />
                  <span>Александр Македонский</span>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="video-card popular-videos__videos-item">
            <picture className="video-card__img">
              <img src="img/video-card-02.jpg" alt="Image" />
            </picture>
            <div className="video-card__body">
              <div className="video-card__top">
                <span className="video-card__category">Политика</span>
              </div>
              <div className="video-card__bottom">
                <span className="video-card__description">
                  Как работает новая вакцина от&nbsp;рака
                </span>
                <div className="video-card__author">
                  <img src="img/user-02.jpg" alt="Image" />
                  <span>Александр Македонский</span>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="video-card popular-videos__videos-item">
            <picture className="video-card__img">
              <img src="img/video-card-01.jpg" alt="Image" />
            </picture>
            <div className="video-card__body">
              <div className="video-card__top">
                <span className="video-card__category">Политика</span>
              </div>
              <div className="video-card__bottom">
                <span className="video-card__description">
                  Как работает новая вакцина от&nbsp;рака
                </span>
                <div className="video-card__author">
                  <img src="img/user-01.jpg" alt="Image" />
                  <span>Александр Македонский</span>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="video-card popular-videos__videos-item">
            <picture className="video-card__img">
              <img src="img/video-card-02.jpg" alt="Image" />
            </picture>
            <div className="video-card__body">
              <div className="video-card__top">
                <span className="video-card__category">Политика</span>
              </div>
              <div className="video-card__bottom">
                <span className="video-card__description">
                  Как работает новая вакцина от&nbsp;рака
                </span>
                <div className="video-card__author">
                  <img src="img/user-02.jpg" alt="Image" />
                  <span>Александр Македонский</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="popular-videos__stories">
          <Link href="#" className="stories-card popular-videos__stories-item">
            <picture className="stories-card__img">
              <img src="img/stories-card-01.jpg" alt="Image" />
            </picture>
            <span className="stories-card__name">Александр Македонский</span>
          </Link>
          <Link href="#" className="stories-card popular-videos__stories-item">
            <picture className="stories-card__img">
              <img src="img/stories-card-02.jpg" alt="Image" />
            </picture>
            <span className="stories-card__name">Александр Македонский</span>
          </Link>
          <Link href="#" className="stories-card popular-videos__stories-item">
            <picture className="stories-card__img">
              <img src="img/stories-card-01.jpg" alt="Image" />
            </picture>
            <span className="stories-card__name">Александр Македонский</span>
          </Link>
          <Link href="#" className="stories-card popular-videos__stories-item">
            <picture className="stories-card__img">
              <img src="img/stories-card-02.jpg" alt="Image" />
            </picture>
            <span className="stories-card__name">Александр Македонский</span>
          </Link>
          <Link href="#" className="stories-card popular-videos__stories-item">
            <picture className="stories-card__img">
              <img src="img/stories-card-01.jpg" alt="Image" />
            </picture>
            <span className="stories-card__name">Александр Македонский</span>
          </Link>
          <Link href="#" className="stories-card popular-videos__stories-item">
            <picture className="stories-card__img">
              <img src="img/stories-card-02.jpg" alt="Image" />
            </picture>
            <span className="stories-card__name">Александр Македонский</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularVideos;
