import { CommentType, CommentsFetchType } from "../redux/comments/types";
import { removeDomainFromUrl } from "./editorFormattedContent";
import { server } from "./server";

type EventsParamsType = {
  event_name: string;
  email: string;
};

type LegalAdviceParamsType = {
  name: string;
  phone: string;
  email: string;
  answer: string;
};

type feadbackParamsType = {
  value: string;
};

type AdvertisingParamsType = {
  name: string;
  phone: string;
  email: string;
};

type SupprtParamsType = {
  contact: string;
  answer: string;
};

export type AddCommentFetchParams = {
  iblockId: string;
  id_publication: string;
  userId: string;
  text: string;
  depth_level: string;
  parent_comment?: string;
};

// запись на событие
export const eventFetch = async ({ event_name, email }: EventsParamsType) => {
  try {
    const params = {
      form_text_1: event_name,
      form_email_2: email,
    };

    await server.post("/sw/v1//webform/?id=1", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

// запись на консультацию юриста
export const legalAdviceFetch = async ({
  name,
  phone,
  email,
  answer,
}: LegalAdviceParamsType) => {
  try {
    const params = {
      form_text_3: name,
      form_text_4: phone,
      form_text_5: email,
      form_textarea_6: answer,
    };

    await server.post("/sw/v1//webform/?id=2", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

// впечатления о платформе
export const feadbackFetch = async ({ value }: feadbackParamsType) => {
  try {
    const params = {
      form_textarea_10: value,
    };

    await server.post("/sw/v1//webform/?id=4", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

// заявка на рекламу
export const advertisingFetch = async ({
  name,
  phone,
  email,
}: AdvertisingParamsType) => {
  try {
    const params = {
      form_text_18: name,
      form_text_19: phone,
      form_email_20: email,
    };
    await server.post("/sw/v1//webform/?id=5", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

// Вопрос в техподдержку
export const SupportFetch = async ({ contact, answer }: SupprtParamsType) => {
  try {
    const params = {
      form_text_22: contact,
      form_textarea_21: answer,
    };

    await server.post("/sw/v1//webform/?id=6", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

// Добавить комментарий
export const AddCommentFetch = async ({
  iblockId,
  id_publication,
  userId,
  text,
  depth_level,
  parent_comment,
}: AddCommentFetchParams) => {
  try {
    const params = {
      iblockId,
      id_publication,
      userId,
      text,
      depth_level,
      parent_comment,
      type: "add",
    };

    const result = await server.post("/sw/v1/comments.php", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return result.data.datas[0] as CommentType;
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

// Личный кабинет

export type RegisterParamsType = {
  name: string;
  email?: string;
  phone?: string;
  password: string;
};

export type ConfirmParamsType = {
  userId: string;
  confirm_code: string;
};

export type ChangeUserDataProps = {
  userId: string;

  data: {
    name?: string;
    last_name?: string;
    email?: string;
    city?: string;
    phone?: string;
    photo?: string;
    password?: string;
    confirm_password?: string;
  };
};

export type RecoveryPasswordProps = {
  login: string;
  control_string: string;
  password: string;
  confirm_password: string;
};

// Регистрация пользователя
export const registerSubmit = async ({
  name,
  email,
  phone,
  password,
}: RegisterParamsType) => {
  try {
    const params: RegisterParamsType = {
      name,
      password,
    };
    if (email) {
      params.email = email;
    }

    if (phone) {
      params.phone = phone;
    }

    const result = await server.post(`/sw/v1/register`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

// Подтверждение регистрации
export const registerConfirm = async ({
  userId,
  confirm_code,
}: ConfirmParamsType) => {
  try {
    const result = await server.post(
      `/sw/v1/register_confirm`,
      { userId, confirm_code },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

// Изменить данные пользователя
export const UserDataChange = async ({ userId, data }: ChangeUserDataProps) => {
  try {
    const params = {
      type: "change",
      userId,
      ...data,
    };

    const result = await server.post("/sw/v1/userData.php", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

// Изменить данные пользователя
export const PasswrodRecoveryFetch = async ({
  login,
  control_string,
  password,
  confirm_password,
}: RecoveryPasswordProps) => {
  try {
    const params = {
      login,
      control_string,
      password,
      confirm_password,
    };

    const result = await server.post("/sw/v1/changePassword.php", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

// Работа с файлами

export type FileUploadType = {
  userId: string;
  file: string;
};

export type FileDeleteType = {
  userId: string;
  "delete-file-path": string;
};

// Загрузить файл
export const FileUpload = async ({ userId, file }: FileUploadType) => {
  try {
    const params = {
      userId,
      file,
      type: "add",
    };

    const result = await server.post("/sw/v1/file.php", params, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return result.data;
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

export const FileDelete = async (data: FileDeleteType) => {
  try {
    const params = {
      userId: data.userId,
      "delete-file-path": data["delete-file-path"],
      type: "delete",
    };

    const result = await server.post("/sw/v1/file.php", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

// Публикации

export type AddPublicationType = {
  userId: string;
  iblockid: string;
  title: string;
  photo: string;
  text_preview: string;
  text: string;
  publication_type: "draft" | "moderation";
  rubric: string;
  source: string;
  source_photo: string;
  source_url: string;
  type: "add" | "update";
  publication_id: string;
};

export type GetPublicationsType = {
  userId: string;
  iblockid: string;
};

export type DeletePublicationType = {
  userId: string;
  iblockid: string;
  publication_id: string;
};

export const addPublication = async ({
  userId,
  iblockid,
  title,
  photo,
  text_preview,
  text,
  publication_type,
  rubric,
  source,
  source_photo,
  source_url,
  type,
  publication_id,
}: AddPublicationType) => {
  try {
    const params: AddPublicationType = {
      userId,
      iblockid,
      title,
      photo,
      text_preview,
      text,
      publication_type,
      rubric,
      type,
      source,
      source_photo,
      source_url,
      publication_id,
    };

    const result = await server.post("/sw/v1/userPublications.php", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return result.data;
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

export const getPublications = async ({
  userId,
  iblockid,
}: GetPublicationsType) => {
  try {
    const params = {
      userId,
      type: "get",
      iblockid,
    };

    const result = await server.post("/sw/v1/userPublications.php", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return result.data;
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

export const deletePublication = async ({
  userId,
  iblockid,
  publication_id,
}: DeletePublicationType) => {
  try {
    const params = {
      userId,
      iblockid,
      publication_id,
      type: "delete",
    };

    const result = await server.post("/sw/v1/userPublications.php", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return result.data;
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};
