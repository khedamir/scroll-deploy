import { OutputData } from "@editorjs/editorjs";
import {
  ChangeEvent,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { RubricType } from "../redux/rubrics/types";
import { FileUpload, addPublication } from "../utils/formFetchs";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/slice";
import {
  editorFormattedContent,
  editorFormattedContentServer,
  parseHTMLToEditorData,
} from "../utils/editorFormattedContent";
import { useAppDispatch } from "../redux/store";
import { addDraft, addPreview } from "../redux/new_publication/slice";
import { PublishedNewType } from "../redux/new_publication/type";
import { selectRubrics } from "../redux/rubrics/slice";

type AddDraftNewProps = {
  publication_type: "draft" | "moderation";
  type: "add" | "update";
};

type SetDataProps = {
  title: string;
  rubric: string;
  data: string;
  photo: string;
  preview: string;
  source: string;
  sourcePhoto: string;
  publicationId: string;
};

const EditorContext = createContext({
  title: "",
  setTitle: (v: string) => {},
  rubric: undefined,
  setRubric: (v: RubricType) => {},
  data: undefined,
  setData: (v: OutputData) => {},
  dataUpdate: false,
  setDataUpdate: (v: boolean) => {},
  photo: "",
  setPhoto: (v: string) => {},
  changePhoto: (v: ChangeEvent<HTMLInputElement>) => {},
  textPreview: "",
  setTextPreview: (v: string) => {},
  source: "",
  setSource: (v: string) => {},
  sourcePhoto: "",
  setSourcePhoto: (v: string) => {},
  changeSourcePhoto: (v: ChangeEvent<HTMLInputElement>) => {},
  addDraftNew: async ({}: AddDraftNewProps) => {},
  addPreviewNew: () => {},
  setDatas: ({}: SetDataProps) => {},
  clearDatas: () => {},
});

const EditorContextProvider = (props: any) => {
  const [title, setTitle] = useState("");
  const [rubric, setRubric] = useState<RubricType>();
  const [data, setData] = useState<OutputData>();
  const [dataUpdate, setDataUpdate] = useState(false);
  const [photo, setPhoto] = useState("");
  const [textPreview, setTextPreview] = useState("");
  const [source, setSource] = useState("");
  const [sourcePhoto, setSourcePhoto] = useState("");
  const [publicationId, setPublicationId] = useState("");

  const [photoData, setPhotoData] = useState<any>();
  const [sourcePhotoData, setSourcePhotoData] = useState<any>();

  const dispatch = useAppDispatch();
  const { user } = useSelector(selectUser);
  const { rubrics } = useSelector(selectRubrics);

  const setDatas = ({
    title,
    preview,
    rubric,
    photo,
    data,
    source,
    sourcePhoto,
    publicationId,
  }: SetDataProps) => {
    console.log(sourcePhoto);
    setTitle(title);
    setRubric(rubrics.find((item) => item.NAME === rubric));
    setPhoto(photo);
    setSource(source);
    setSourcePhoto(sourcePhoto);
    setTextPreview(preview);
    console.log(data);
    setDataUpdate(true);
    setData(parseHTMLToEditorData(data));
    setPublicationId(publicationId);
  };

  const clearDatas = () => {
    setTitle("");
    setRubric(undefined);
    setPhoto("");
    setPhotoData("");
    setSource("");
    setSourcePhoto("");
    setSourcePhotoData("");
    setTextPreview("");
    setDataUpdate(true);
    setData(parseHTMLToEditorData(""));
    setPublicationId("");
    console.log("clear");
  };

  const changePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      getFileData(file)
        .then((data) => {
          setPhoto(data);
          setPhotoData(file);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const changeSourcePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      getFileData(file)
        .then((data) => {
          setSourcePhoto(data);
          setSourcePhotoData(file);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const getFileData = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = function (ev) {
        if (ev.target && typeof ev.target.result === "string") {
          resolve(ev.target.result);
        } else {
          reject(new Error("Failed to read file data."));
        }
      };

      fileReader.readAsDataURL(file);
    });
  };

  const addDraftNew = async ({ publication_type, type }: AddDraftNewProps) => {
    if (user) {
      const new_photo = photoData
        ? await FileUpload({
            userId: user.id,
            file: photoData,
          })
        : "";
      const new_source_photo = sourcePhotoData
        ? await FileUpload({
            userId: user.id,
            file: sourcePhotoData,
          })
        : "";

      const result = await addPublication({
        userId: user?.id,
        iblockid: "9",
        title: title,
        photo: new_photo.filePath,
        text_preview: textPreview,
        text: data ? editorFormattedContentServer(data) : "",
        publication_type,
        rubric: rubric ? rubric.ID : "",
        source,
        source_photo: new_source_photo.filePath,
        source_url: "",
        type,
        publication_id: publicationId,
      });

      if (result.error) {
        throw new Error(result.error);
      }

      const draftParams: PublishedNewType = {
        id: result.success ? result.success : publicationId,
        comments: 0,
        likes: 0,
        liked: false,
        name: title,
        rubric: rubric ? rubric.NAME : "",
        views: "0",
        images: { detail: photo },
        poperties: {
          SOURCE: source,
          PUB_SOURCE_LOGO: sourcePhoto,
        },
        anons: textPreview,
        content: data ? editorFormattedContent(data) : "",
      };

      if (publication_type === "draft") {
        draftParams.poperties.DRAFT = "y";
      } else {
        draftParams.poperties.MODERATION = "y";
      }

      clearDatas();
      return draftParams;
    }
  };

  const addPreviewNew = () => {
    const previewData = {
      date: new Date().toLocaleString(),
      name: title,
      rubric: rubric ? rubric.NAME : "",
      image: photo,
      content: data ? editorFormattedContent(data) : "",
      anons: textPreview,
      source: source,
      sourcePhoto: sourcePhoto,
    };
    dispatch(addPreview(previewData));
    const preview = JSON.stringify(previewData);
    localStorage.setItem("preview", preview);
    window.open("/preview", "_blank");
  };

  return (
    <EditorContext.Provider
      value={{
        title,
        setTitle,
        rubric,
        setRubric,
        data,
        setData,
        dataUpdate,
        setDataUpdate,
        photo,
        setPhoto,
        changePhoto,
        textPreview,
        setTextPreview,
        source,
        setSource,
        sourcePhoto,
        setSourcePhoto,
        changeSourcePhoto,
        addDraftNew,
        addPreviewNew,
        setDatas,
        clearDatas,
      }}
      {...props}
    />
  );
};

const useEditorContext = () => useContext(EditorContext);
export { EditorContextProvider, useEditorContext };
