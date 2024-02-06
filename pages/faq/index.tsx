import React, { useState } from "react";
import Footer from "../../components/footer";
import Support from "../../components/modals/support";
import Search from "../../components/pageFaq/search";
import SectionBlock from "../../components/pageFaq/sectionBlock";
import SectionList from "../../components/pageFaq/sectionList";

export type SectionBLock = {
  elements: { id: string; answer: string; question: string }[];
  section_id: string;
  section_name: string;
};

const Faq = () => {
  const [activeForm, setActiveForm] = useState(false);
  const [serchResult, setSearchResult] = useState<SectionBLock[]>([]);

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
                        <SectionList />
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

export default Faq;
