import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import MyEditor from "../modals/myEditor";
import { fetchRubrics } from "../../redux/rubrics/asyncAction";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import { getPublications } from "../../utils/formFetchs";
import PublicationItem from "./publicationsComponets/publicationItem";
import DraftItem from "./publicationsComponets/draftItem";
import {
  selectNewPublication,
  setDrafts,
  setPublished,
} from "../../redux/new_publication/slice";
import { PublishedNewType } from "../../redux/new_publication/type";
import Empty from "./publicationsComponets/empty";
import { useEditorContext } from "../../context/editorContext";
import Image from "next/image";

interface PublicationsProps {
  active: boolean;
}

type ActiveBlockValue = "published" | "drafts";

const Publications: FC<PublicationsProps> = ({ active }) => {
  const [activeBlock, setActiveBlock] = useState<ActiveBlockValue>("published");
  const [formActive, setFormActive] = useState(false);
  const { user } = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const { published, drafts } = useSelector(selectNewPublication);

  useEffect(() => {
    dispatch(fetchRubrics());
    if (user) {
      const fetchData = async () => {
        const result: { datas: PublishedNewType[] } = await getPublications({
          userId: user.id,
          iblockid: "9",
        });
        if (result.datas) {
          dispatch(
            setPublished(
              result.datas.filter(
                (item) => !(item.poperties.DRAFT || item.poperties.MODERATION)
              )
            )
          );
          dispatch(
            setDrafts(
              result.datas.filter(
                (item) => item.poperties.DRAFT || item.poperties.MODERATION
              )
            )
          );
        }
      };

      fetchData();
    }
  }, [dispatch]);

  return (
    <div className={`lk-tabs__wrapper ${active && "is--active"}`}>
      <MyEditor active={formActive} setActive={setFormActive} />
      <div className="lk__body">
        <div className="lk__block">
          <div className="lk__fixed">
            <span
              onClick={() => setFormActive(true)}
              className="lk__fixed-btn btn-circle btn-circle--sm"
            >
              Предложить новость
            </span>
            <div className="lk__fixed-bg">
              <Image
                fill
                priority
                src="/img/lines-vertical.svg"
                alt="Background"
              />
            </div>
          </div>
        </div>
        <div className="lk__block">
          <div className="lk-publications">
            <ul className="lk-publications__tabs">
              <li
                className={`lk-publications__tabs-item ${
                  activeBlock === "published" && "is--active"
                }`}
              >
                <button
                  onClick={() => setActiveBlock("published")}
                  className="lk-publications__tabs-button"
                >
                  Опубликованное
                </button>
              </li>
              <li
                className={`lk-publications__tabs-item ${
                  activeBlock === "drafts" && "is--active"
                }`}
              >
                <button
                  onClick={() => setActiveBlock("drafts")}
                  className="lk-publications__tabs-button"
                >
                  Черновики
                </button>
              </li>
            </ul>
            <div
              className={`lk-publications__wrapper ${
                activeBlock === "published" && "is--active"
              }`}
            >
              <div className="lk-publications__list">
                {published.map((item) => (
                  <PublicationItem key={item.id} item={item} />
                ))}
              </div>
              {published.length === 0 && <Empty />}
            </div>
            <div
              className={`lk-publications__wrapper ${
                activeBlock === "drafts" && "is--active"
              }`}
            >
              <div className="lk-publications__list">
                {drafts.map((item) => (
                  <DraftItem
                    key={item.id}
                    item={item}
                    setFormActive={setFormActive}
                  />
                ))}
              </div>
              {drafts.length === 0 && <Empty />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
