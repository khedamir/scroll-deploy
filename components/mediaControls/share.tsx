import React, { MouseEvent, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import {
  OKShareButton,
  VKShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
import { useRouter } from "next/router";
import { RWebShare } from "react-web-share";

const Share = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    // Подписываемся на изменения маршрута и обновляем состояние
    setCurrentURL(window.location.href);

    const handleRouteChange = (url: string) => {
      setCurrentURL(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Отписываемся от события при размонтировании компонента
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const linkCopy = (event: MouseEvent) => {
    const tempInput = document.createElement("input");
    tempInput.value = currentURL;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(tempInput);

    event.preventDefault();
  };

  return (
    <div className={`media-controls__btn c-share ${active && "is--active"}`}>
      <button
        onClick={() => setActive(!active)}
        className="btn-control c-share__trigger"
      >
        <ReactSVG src="/img/sprite/icon-reply.svg" />
        <span>Поделиться</span>
      </button>
      <div className="c-share__dropdown">
        <div className="c-share__top">
          <h3 className="c-share__title">Поделиться</h3>
          <button
            onClick={() => setActive(false)}
            className="c-share__close"
            aria-label="Закрыть"
          >
            <ReactSVG src="/img/sprite/icon-close.svg" />
          </button>
        </div>
        <ul className="c-share__list">
          <li className="c-share__item">
            <a
              href="#"
              onClick={linkCopy}
              className="c-share__btn c-share__btn--sm"
            >
              <ReactSVG
                className="desktop"
                src="/img/sprite/icon-content-copy.svg"
              />
              <ReactSVG
                className="mobile"
                src="/img/sprite/icon-circle-dark-content-copy.svg"
              />
              <span>Скопировать ссылку</span>
            </a>
          </li>
          <li className="c-share__item">
            <OKShareButton url={currentURL}>
              <span className="c-share__btn">
                <ReactSVG
                  className="desktop"
                  src="/img/sprite/icon-circle-ok.svg"
                />
                <ReactSVG
                  className="mobile"
                  src="/img/sprite/icon-circle-dark-ok.svg"
                />
                <span>Одноклассники</span>
              </span>
            </OKShareButton>
          </li>
          <li className="c-share__item">
            <VKShareButton url={currentURL}>
              <span className="c-share__btn">
                <ReactSVG
                  className="desktop"
                  src="/img/sprite/icon-circle-vk.svg"
                />
                <ReactSVG
                  className="mobile"
                  src="/img/sprite/icon-circle-dark-vk.svg"
                />
                <span>VK</span>
              </span>
            </VKShareButton>
          </li>
          <li className="c-share__item">
            <WhatsappShareButton url={currentURL}>
              <span className="c-share__btn">
                <ReactSVG
                  className="desktop"
                  src="/img/sprite/icon-circle-whatsapp.svg"
                />
                <ReactSVG
                  className="mobile"
                  src="/img/sprite/icon-circle-dark-whatsapp.svg"
                />
                <span>WhatsApp</span>
              </span>
            </WhatsappShareButton>
          </li>
          <li className="c-share__item">
            <TelegramShareButton url={currentURL}>
              <span className="c-share__btn">
                <ReactSVG
                  className="desktop"
                  src="/img/sprite/icon-circle-tg.svg"
                />
                <ReactSVG
                  className="mobile"
                  src="/img/sprite/icon-circle-dark-tg.svg"
                />
                <span>Telegram</span>
              </span>
            </TelegramShareButton>
          </li>
          <li className="c-share__item c-share__item--mobile">
            <RWebShare data={{ url: currentURL }}>
              <span className="c-share__btn">
                <ReactSVG
                  className="mobile"
                  src="/img/sprite/icon-circle-dark-more.svg"
                />
                <span>Ещё…</span>
              </span>
            </RWebShare>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Share;
