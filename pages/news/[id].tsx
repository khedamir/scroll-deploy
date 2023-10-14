import React, { FC } from "react";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import Comments from "../../components/comments";
import Sidebar from "../../components/sidebar/sidebar";
import NewWidget from "../../components/widgets/newWidget";
import MediaControls from "../../components/mediaControls";
import Link from "next/link";
import { baseURL, server } from "../../utils/server";
import { GetServerSideProps } from "next";
import { FullPublicationType } from "../../redux/types";
import RenderHTML from "../../components/renderHTML";
import Tags from "../../components/tags";
import { wrapper } from "../../redux/store";
import { fetchRubrics } from "../../redux/rubrics/asyncAction";
import { formatDateDifference } from "../../utils/formatDate";
import { rubricByIdSelector } from "../../redux/rubrics/slice";

interface NewProps {
  publication: FullPublicationType;
}

const New: FC<NewProps> = ({ publication }) => {
  console.log("hi", publication);
  return (
    <div className="layout layout--sticky-bottom">
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
                      <h1>
                        {publication.name}
                        {/* Как получить материнский капитал и на что его можно
                        использовать */}
                      </h1>
                      <div className="description-block">
                        <div className="description-block__inner">
                          <span>
                            {/* {rubricByIdSelector(publication.rubric)?.name} */}
                            Спорт
                          </span>
                          <span>{formatDateDifference(publication.date)}</span>
                        </div>
                      </div>
                      <div className="media-block">
                        <picture className="media-block__photo">
                          {/* <img src="/img/big-news-img.jpg" alt="Image" /> */}
                          <img
                            src={`${baseURL}${publication.images[1]}`}
                            alt=""
                          />
                          <Link href="#" className="media-block__comments">
                            <ReactSVG src="/img/sprite/icon-comment.svg" />
                            <span>5 комментариев</span>
                          </Link>
                        </picture>
                        <MediaControls otherClassName="media-block__controls" />
                      </div>
                      {/* <RenderHTML content={publication.DETAIL_TEXT} /> */}
                      {/* <h5>
                        Для чего нужны изделия Neuralink и как они устроены
                      </h5> */}
                      {/* <p>
                        «Это результат невероятной работы команды Neuralink в
                        тесном сотрудничестве с FDA, он представляет собой
                        важный первый шаг, который однажды позволит нашей
                        технологии помочь многим людям», — заявили в компании,
                        добавив, что набор добровольцев для клинического
                        испытания еще не открыт.
                        <br />
                        <br />
                        Как пишет Reutres, с 2019 года Илон Маск несколько раз
                        анонсировал испытания чипов на людях, однако разрешение
                        FDA Neuralink запросила только в начале 2022 года. Тогда
                        регулятор отклонил заявку. Основные проблемы, по словам
                        сотрудников Neuralink, были связаны с литиевой батареей
                        чипа, возможностью миграции проводов имплантата внутри
                        мозга и проблемой безопасного извлечения устройства без
                        повреждения человеческих тканей.
                        <br />
                        <br />В декабре 2022 года Маск анонсировал, что изучение
                        продукции Neuralink на человеке может начаться уже через
                        полгода.
                      </p> */}
                      {/* <div className="c-quote">
                        <div className="c-quote__wrapper">
                          <p className="c-quote__description">
                            Ничего страшного, никакого пенальти не было. Просто
                            немного накопилась усталость в мышцах, и я
                            почувствовал боль, которую не хотелось усугублять.
                          </p>
                          <span className="c-quote__author">
                            Александр Македонский
                          </span>
                        </div>
                      </div> */}
                      {/* <p>
                        «Это результат невероятной работы команды Neuralink в
                        тесном сотрудничестве с FDA, он представляет собой
                        важный первый шаг, который однажды позволит нашей
                        технологии помочь многим людям», — заявили в компании,
                        добавив, что набор добровольцев для клинического
                        испытания еще не открыт.
                        <br />
                        <br />
                        Как пишет Reutres, с 2019 года Илон Маск несколько раз
                        анонсировал испытания чипов на людях, однако разрешение
                        FDA Neuralink запросила только в начале 2022 года. Тогда
                        регулятор отклонил заявку. Основные проблемы, по словам
                        сотрудников Neuralink, были связаны с литиевой батареей
                        чипа, возможностью миграции проводов имплантата внутри
                        мозга и проблемой безопасного извлечения устройства без
                        повреждения человеческих тканей.
                        <br></br>В декабре 2022 года Маск анонсировал, что
                        изучение продукции Neuralink на человеке может начаться
                        уже через полгода.
                      </p> */}
                      {/* <div className="big-news__block">
                        <h5>
                          В Берлине сообщили о решении выслать немецких служащих
                        </h5>
                        <div className="description-block">
                          <div className="description-block__inner">
                            <span>Спорт</span>
                            <span>30 минут назад</span>
                            <button className="c-bookmark">
                              <ReactSVG
                                className="c-bookmark__icon c-bookmark__icon--default"
                                src="/img/sprite/icon-bookmarks.svg"
                              />
                              <ReactSVG
                                className="c-bookmark__icon c-bookmark__icon--filled"
                                src="/img/sprite/icon-bookmarks-filled.svg"
                              />
                            </button>
                          </div>
                        </div>
                      </div> */}
                      {/* <p>
                        «Это результат невероятной работы команды Neuralink в
                        тесном сотрудничестве с FDA, он представляет собой
                        важный первый шаг, который однажды позволит нашей
                        технологии помочь многим людям», — заявили в компании,
                        добавив, что набор добровольцев для клинического
                        испытания еще не открыт.
                        <br />
                        <br />
                        Как пишет Reutres, с 2019 года Илон Маск несколько раз
                        анонсировал испытания чипов на людях, однако разрешение
                        FDA Neuralink запросила только в начале 2022 года. Тогда
                        регулятор отклонил заявку. Основные проблемы, по словам
                        сотрудников Neuralink, были связаны с литиевой батареей
                        чипа, возможностью миграции проводов имплантата внутри
                        мозга и проблемой безопасного извлечения устройства без
                        повреждения человеческих тканей.
                        <br />
                        <br />В декабре 2022 года Маск анонсировал, что изучение
                        продукции Neuralink на человеке может начаться уже через
                        полгода.
                      </p> */}
                      {/* <picture>
                        <img src="/img/big-news-img-02.jpg" alt="Image" />
                        <span>
                          Neuralink logo and Elon Musk photo are seen in this
                          illustration taken, December 19, 2022. REUTERS/Dado
                          Ruvic/Illustration/File Photo/File Photo
                        </span>
                      </picture> */}
                      {/* <h5>
                        Для чего нужны изделия Neuralink и как они устроены
                      </h5> */}
                      {/* <p>
                        «Это результат невероятной работы команды Neuralink в
                        тесном сотрудничестве с FDA, он представляет собой
                        важный первый шаг, который однажды позволит нашей
                        технологии помочь многим людям», — заявили в компании,
                        добавив, что набор добровольцев для клинического
                        испытания еще не открыт.
                        <br />
                        <br />
                        Как пишет Reutres, с 2019 года Илон Маск несколько раз
                        анонсировал испытания чипов на людях, однако разрешение
                        FDA Neuralink запросила только в начале 2022 года. Тогда
                        регулятор отклонил заявку. Основные проблемы, по словам
                        сотрудников Neuralink, были связаны с литиевой батареей
                        чипа, возможностью миграции проводов имплантата внутри
                        мозга и проблемой безопасного извлечения устройства без
                        повреждения человеческих тканей.
                        <br />
                        <br />В декабре 2022 года Маск анонсировал, что изучение
                        продукции Neuralink на человеке может начаться уже через
                        полгода.
                      </p> */}
                      <p className="small-description">
                        {/* Краткое резюме статьи: Основные проблемы, по словам
                        сотрудников Neuralink, были связаны с литиевой батареей
                        чипа, возможностью миграции проводов имплантата внутри
                        мозга и проблемой безопасного извлечения устройства без
                        повреждения человеческих тканей. */}
                        <span>Краткое резюме статьи: </span>
                        <RenderHTML content={publication.anons} />
                      </p>
                      {/* <Tags value={publication.tags} /> */}
                    </div>
                    <Comments />
                  </div>
                </div>
              </div>
              <div className="layout__right">
                <div className="layout__sticky-block">
                  <div className="c-author layout__sticky">
                    <article className="c-author__wrapper">
                      <picture className="c-author__img">
                        <img src="/img/user.jpg" alt="Image" />
                      </picture>
                      <div className="c-author__body">
                        <h3 className="c-author__name">
                          {/* {publication.CREATED_USER_NAME} */}
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <NewWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { id } = context.params || {};
    try {
      const { data } = await server.get(`/sw/v1/publications/?id=${id}`);
      await store.dispatch(fetchRubrics());

      return {
        props: {
          publication: data.datas[0],
        },
      };
    } catch (error) {
      return {
        redirect: {
          destination: "/server-error",
          permanent: false,
        },
      };
    }
  }
);

export default New;
