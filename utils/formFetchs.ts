import { CommentsFetchType } from "../redux/comments/types";
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
    console.log(result);
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
