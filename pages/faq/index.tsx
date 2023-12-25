import React, { FC, useState } from "react";
import Footer from "../../components/footer";
import Support from "../../components/modals/support";
import { GetServerSideProps } from "next";
import { server } from "../../utils/server";
import Search from "../../components/pageFaq/search";
import SectionBlock from "../../components/pageFaq/sectionBlock";

export type SectionBLock = {
  elements: { id: string; answer: string; question: string }[];
  section_id: string;
  section_name: string;
};

interface FaqProps {
  publications: SectionBLock[];
}

const Faq: FC<FaqProps> = ({ publications }) => {
  const [activeForm, setActiveForm] = useState(false);

  const [serchResult, setSearchResult] = useState<SectionBLock[]>([]);

  // const [activeItem, setActiveItem] = useState(["", ""]);
  // function toggleActiveItem(v1: string, v2: string) {
  //   if (activeItem[0] === v1 && activeItem[1] === v2) {
  //     setActiveItem(["", ""]);
  //   } else {
  //     setActiveItem([v1, v2]);
  //   }
  // }

  return (
    <>
      <div className="layout">
        <Support active={activeForm} setActive={setActiveForm} />
        <div className="container">
          <div className="layout__wrap">
            <div className="layout__left">
              <Footer otherClassName="layout__footer" />
            </div>
            <div className="layout__main">
              <div className="layout__main-wrapper">
                <div className="layout__center">
                  <Search setResult={setSearchResult} />
                  <div className="faq">
                    <div className="faq__wrap">
                      {serchResult.length ? (
                        <div className="faq__wrapper-search">
                          {serchResult.map((item) => (
                            <SectionBlock key={item.section_id} item={item} />
                          ))}
                        </div>
                      ) : (
                        <div className="faq__wrapper">
                          {publications.map((item) => (
                            <SectionBlock key={item.section_id} item={item} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="layout__right">
                  <span
                    onClick={() => setActiveForm(true)}
                    className="layout__sticky layout__circle-btn btn-circle btn-circle--pink"
                  >
                    Задайте свой вопрос...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span onClick={() => setActiveForm(true)} className="btn-ask-question">
        ?
      </span>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<FaqProps> = async (
  context
) => {
  try {
    const params = {
      iblockId: "35",
    };
    const { data } = await server.post(`/sw/v1/help.php`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return {
      props: {
        publications: Object.values(data.datas),
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
};

export default Faq;
