import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import Sidebar from "../../components/sidebar/sidebar";
import MediaControls from "../../components/mediaControls";
import Link from "next/link";
import { formatDateDifference } from "../../utils/formatDate";
import LegalAdvice from "../../components/modals/legalAdvice";
import NewContent from "../../components/pageNew/newContent";
import getCommentCountWord from "../../utils/getCommentCountWord";
import { selectNewPublication } from "../../redux/new_publication/slice";
import UserIcon from "../../components/userIcon";
import { PreviewNewType } from "../../redux/new_publication/type";

const New = () => {
  const [modalActive, setModalActive] = useState(false);
  const [preview, setPreview] = useState<PreviewNewType>();

  useEffect(() => {
    const data = localStorage.getItem("preview");
    if (data) {
      setPreview(JSON.parse(data));
    }
  }, []);

  if (!preview) {
    return <p>Пусто</p>;
  }

  return (
    <>
      <div className="layout layout--sticky-bottom">
        <LegalAdvice active={modalActive} setActive={setModalActive} />
        <div className="container">
          <div className="layout__wrap layout__wrap--padding">
            <div className="layout__left">
              <Sidebar />
              <Footer />
            </div>
            <div className="layout__main">
              <div className="layout__main-wrapper">
                <div className="layout__center">
                  <div className="big-news mobile-wide">
                    <div className="big-news__wrap">
                      <div className="big-news__content content">
                        <h1>{preview.name}</h1>
                        <div className="description-block">
                          <div className="description-block__inner">
                            <span>{preview.rubric}</span>
                            <span>{formatDateDifference(preview.date)}</span>
                          </div>
                        </div>
                        <div className="media-block">
                          <picture className="media-block__photo">
                            <img src={`${preview.image}`} alt="" />
                            <Link href="#" className="media-block__comments">
                              <ReactSVG src="/img/sprite/icon-comment.svg" />
                              <span>{getCommentCountWord(0)}</span>
                            </Link>
                          </picture>
                          <MediaControls
                            likes={"0"}
                            liked={false}
                            views={"0"}
                            publication_id={""}
                            favorited={false}
                            changeFavorite={() => {}}
                            otherClassName="media-block__controls"
                          />
                        </div>
                        <NewContent
                          content={preview.content}
                          recommendationNews={[]}
                          setModalActive={setModalActive}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="layout__right">
                  <div className="layout__sticky-block">
                    <div className="c-author layout__sticky">
                      <article className="c-author__wrapper">
                        <div className="c-author__img">
                          <UserIcon
                            userPhoto={preview.author_photo}
                            nameLatter={preview.author_name[0]}
                          />
                        </div>
                        <div className="c-author__body">
                          <h3 className="c-author__name">
                            {preview.author_name} {preview.author_surname}
                          </h3>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
