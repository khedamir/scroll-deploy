import React from "react";
import Footer from "../../components/footer";
import Comments from "../../components/comments";
import { ReactSVG } from "react-svg";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import MediaControls from "../../components/mediaControls";
import MediaContent from "../../components/mediaContent";

const Video = () => {
  return (
    <div className="layout">
      <div className="container">
        <div className="layout__wrap">
          <div className="layout__left layout__left--visible">
            <SecondSidebar />
            <Footer otherClassName="layout__footer" />
          </div>
          <div className="layout__main">
            <div className="layout__main-wrapper">
              <div className="layout__center">
                <div className="video mobile-wide">
                  <div className="video__media">
                    <img src="/img/media-plug.jpg" alt="Image" />
                  </div>
                  <div className="video__main">
                    <div className="video__body">
                      <h3 className="video__heading">
                        Люди не готовы к ошибкам нейросетей
                      </h3>
                      <div className="video__inner">
                        <a href="#" className="video__author">
                          <img src="/img/user.jpg" alt="Image" />
                          <span>Александр Македонский</span>
                        </a>
                        <span className="video__time">30 минут назад</span>
                      </div>
                    </div>
                    <MediaControls />
                    <MediaContent />
                  </div>
                  <Comments otherClassName="video__comments" />
                </div>
              </div>
              <div className="layout__right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
