import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import { selectWebinars } from "../../../redux/webinars/slice";
import WebinerItem from "../../pageLawyersClub/webinerItem";

const ClubBlock = () => {
  const { data } = useSelector(selectWebinars);
  return (
    <div className="webinar-grid">
      {data.datas.map(
        (web, id) =>
          id % 2 !== 0 &&
          id !== 0 && (
            <WebinerItem key={web.id} webinars={[web, data.datas[id - 1]]} />
          )
      )}
      {/* <div className="webinar-grid__wrapper">
        <div className="webinar-grid__left">
          <div className="meetings-card webinar-grid__item">
            <div className="meetings-card__wrapper">
              <div className="meetings-card__body">
                <div className="meetings-card__top">
                  <span className="meetings-card__subtitle">Вебинар</span>
                  <button className="meetings-card__control">
                    <ReactSVG src="/img/sprite/icon-notifications.svg" />
                  </button>
                </div>
                <div className="meetings-card__bottom meetings-card__bottom--flex">
                  <div className="meetings-card__images">
                    <Link href="/webinar/1" className="meetings-card__preview">
                      <img src="/img/meetings-card-01.jpg" alt="Image" />
                    </Link>
                    <Link href="/webinar/1" className="meetings-card__preview">
                      <img src="/img/meetings-card-02.jpg" alt="Image" />
                    </Link>
                  </div>
                  <Link href="/webinar/1" className="meetings-card__title">
                    Мосбиржа переведет акции и облигации на режим торгов T+1
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="webinar-grid__right">
          <div className="meetings-card webinar-grid__item">
            <div className="meetings-card__wrapper">
              <div className="meetings-card__body">
                <div className="meetings-card__top">
                  <button className="meetings-card__play">
                    <ReactSVG src="/img/sprite/icon-play.svg" />
                  </button>
                  <button className="meetings-card__control">
                    <ReactSVG src="/img/sprite/icon-notifications.svg" />
                  </button>
                </div>
                <div className="meetings-card__bottom">
                  <Link href="/webinar/1" className="meetings-card__heading">
                    Что будет с рублем в&nbsp;этом&nbsp;году
                  </Link>
                  <span className="meetings-card__author">Юрий Алексеев</span>
                </div>
              </div>
              <Link href="/webinar/1" className="meetings-card__img">
                <img src="/img/webinar-card-img.jpg" alt="Image" />
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ClubBlock;
