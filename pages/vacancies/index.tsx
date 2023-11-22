import React, { useRef, useState } from "react";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import { wrapper } from "../../redux/store";
import { fetchVacancies } from "../../redux/vacancies/asyncAction";
import { selectVacancies } from "../../redux/vacancies/slice";
import { useSelector } from "react-redux";
import { formatDateDifference } from "../../utils/formatDate";
import RenderHTML from "../../components/renderHTML";

// const content = (
//   <>
//     <p>
//       <b>Обязанности:</b>
//     </p>
//     <ul>
//       <li>
//         Разработка проектов договоров, приложений к ним и доп соглашений,
//         соглашений контрактов, протоколов разногласий и др.
//       </li>
//       <li>
//         Юридическая экспертиза договоров контрагентов, проверка на соответствие
//         законодательству и выявление рисков
//       </li>
//       <li>Ведение переговоров по вопросам урегулирования условий договоров</li>
//       <li>Учет, хранение договоров</li>
//       <li>
//         Проверка контрагентов по специализированной программе, составление досье
//         контрагента (сбор документов)
//       </li>
//     </ul>
//     <p>
//       <b>Требования:</b>
//     </p>
//     <ul>
//       <li>Высшее юридическое образование</li>
//       <li>Знание гражданского законодательства</li>
//       <li>Опыт работы 1-3 лет</li>
//     </ul>
//     <p>
//       <b>Условия:</b>
//     </p>
//     <ul>
//       <li>Полный рабочий день, 5/2 с 8:30 до 17:30</li>
//       <li>Современный офис</li>
//       <li>Официальное трудоустройство</li>
//       <li>Окончательный размер з/п согласуется по результатам собеседования</li>
//     </ul>
//   </>
// );

const Vacancies = () => {
  const { data } = useSelector(selectVacancies);
  console.log(data);

  const [activeItem, setActiveItem] = useState<string>();
  const contentRefs = useRef<any>({});

  const getHeight = (itemId: string) => {
    if (contentRefs.current[itemId]) {
      return (
        contentRefs.current[itemId].getBoundingClientRect().height + 140 + "px"
      );
    }
    return "0px";
  };

  const toggleActiveItem = (id: string) => {
    if (activeItem === id) {
      setActiveItem(undefined);
    } else {
      setActiveItem(id);
    }
  };

  return (
    <div className="layout">
      <div className="container">
        <div className="layout__wrap">
          <div className="layout__left">
            <Footer otherClassName="layout__footer" />
          </div>
          <div className="layout__main">
            <div className="layout__main-wrapper">
              <div className="layout__center">
                <div className="vacancies">
                  <div className="vacancies__wrapper">
                    {data.datas.map((vacancy) => (
                      <div
                        key={vacancy.id}
                        className={`vacancies__item ${
                          activeItem === vacancy.id && "is--open"
                        }`}
                      >
                        <div className="vacancies__top">
                          <div className="vacancies__top-inner">
                            <div className="vacancies__inner">
                              <h3 className="vacancies__heading">
                                {vacancy.name}
                              </h3>
                              <span className="vacancies__help">
                                {formatDateDifference(vacancy.date)}
                              </span>
                            </div>
                            <button
                              className="vacancies__trigger"
                              onClick={() => toggleActiveItem(vacancy.id)}
                            >
                              <ReactSVG src="/img/sprite/icon-plus.svg" />
                            </button>
                          </div>
                          <div className="vacancies__top-inner">
                            <div className="vacancies__inner">
                              <span className="vacancies__help">
                                {vacancy.poperties.POSITION_VACANCIES}
                              </span>
                              <span className="vacancies__help">
                                {vacancy.poperties.TYPE_VACANCIES},{" "}
                                {vacancy.poperties.GRAFIC_VACANCIES}
                              </span>
                              <span className="vacancies__help vacancies__help--dark">
                                {vacancy.poperties.SUMMA_ZP}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="vacancies__dropdown"
                          style={{
                            height:
                              vacancy.id === activeItem
                                ? getHeight(vacancy.id)
                                : "0px",
                          }}
                        >
                          <div
                            className="content vacancies__content"
                            ref={(el) => (contentRefs.current[vacancy.id] = el)}
                          >
                            <RenderHTML content={vacancy.content} />
                          </div>
                          <a
                            target="_blank"
                            href={vacancy.poperties.LINK_VACANCIES}
                            className="vacancies__btn btn btn--dark"
                          >
                            <span>Заполнить анкету</span>
                            <span className="bg">
                              <ReactSVG src="/img/sprite/icon-arrow-btn-next.svg" />
                            </span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchVacancies({ limit: 15 }));
    return {
      props: {},
    };
  }
);

export default Vacancies;
