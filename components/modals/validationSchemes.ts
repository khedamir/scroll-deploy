const nameScheme = {
  required: "Это поле обязательное",
  minLength: {
    value: 2,
    message: "Имя должно содержать не менее 2 символов",
  },
  maxLength: {
    value: 255,
    message: "Имя должно содержать не более 255 символов",
  },
};

const emailScheme = {
  required: "Это поле обязательное",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Неверный адрес электронной почты",
  },
};

const phoneScheme = {
  required: "Это поле обязательное",
  pattern: {
    value: /^(\+7\s)?\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
    message: "Неверный телефон",
  },
};

const passwordScheme = {
  required: "Это поле обязательное",
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/,
    message:
      "Пароль может содержать только буквы верхнего и нижнего регистра и цифры. Также допускаются указанные спецсимволы (@, $, !, %, *, ?, &). Длина пароля должна быть от 8 до 20 символов.",
  },
};

const textareaScheme = {
  required: "Это поле обязательное",
  minLength: {
    value: 2,
    message: "Поле должно содержать не менее 2 символов",
  },
  maxLength: {
    value: 255,
    message: "Поле должно содержать не более 255 символов",
  },
};

export const loginSchemes = {
  password: passwordScheme,
};

export const registerSchemes = {
  name: nameScheme,
  password: passwordScheme,
};

export const changeUserData = {
  name: nameScheme,
  last_name: nameScheme,
  phone: phoneScheme,
  email: emailScheme,
};

export const advertisingSchemes = {
  name: nameScheme,
  phone: phoneScheme,
  email: emailScheme,
};

export const changePasswordSchemes = {
  passwrd: passwordScheme,
  re_password: passwordScheme,
};

export const legalAdviceSchemes = {
  name: nameScheme,
  answer: textareaScheme,
};

export const feadbackSchemes = {
  value: textareaScheme,
};

export const supportScheme = {
  answer: textareaScheme,
};

export const contactsSchemes = {
  email: emailScheme,
  phone: phoneScheme,
};
