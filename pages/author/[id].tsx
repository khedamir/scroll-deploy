import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar/sidebar";
import SectionLayout from "../../components/pageHome/sectionLayout";
import NewCard from "../../components/newCard";
import { fetchNews } from "../../server/content";
import { useRouter } from "next/router";
import { NewType } from "../../redux/types";

const Author = () => {
  const router = useRouter();
  const [publications, setPublications] = useState<NewType[]>([]);

  useEffect(() => {
    fetchNews({
      type: "userPublications",
      userId: String(router.query.id),
    }).then((result) => {
      setPublications(result.datas);
    });
  }, [router.query.id]);

  return (
    <div className="layout">
      <div className="container">
        <div className="layout__wrap layout__wrap--padding">
          <div className="layout__left">
            <Sidebar rubrics={[]} />
            <Footer />
          </div>

          <div className="layout__main">
            {publications.length !== 0 && (
              <SectionLayout
                children1={
                  <>
                    <h1 className="layout__head">{`${publications[0].author_name} ${publications[0].author_surname}`}</h1>
                    {publications.map((item, index) => (
                      <NewCard key={index} newItem={item} />
                    ))}
                  </>
                }
                children2={<></>}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
