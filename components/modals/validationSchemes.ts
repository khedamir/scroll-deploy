export const legalAdviceScheme = {
  name: {
    required: "Это поле обязательное",
    minLength: {
      value: 2,
      message: "Имя должно содержать не менее 2 символов",
    },
    maxLength: {
      value: 255,
      message: "Имя должно содержать не более 255 символов",
    },
  },
  answer: {
    required: "Это поле обязательное",
    minLength: {
      value: 2,
      message: "Вопрос должен содержать не менее 2 символов",
    },
    maxLength: {
      value: 255,
      message: "Вопрос должен содержать не более 255 символов",
    },
  },
};

export const supportScheme = {
  answer: {
    required: "Это поле обязательное",
    minLength: {
      value: 2,
      message: "Вопрос должен содержать не менее 2 символов",
    },
    maxLength: {
      value: 255,
      message: "Вопрос должен содержать не более 255 символов",
    },
  },
};

export const contactsSchemes = {
  email: {
    required: "Это поле обязательное",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Неверный адрес электронной почты",
    },
  },
  phone: {
    required: "Это поле обязательное",
    pattern: {
      value: /^(\+7\s)?\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
      message: "Неверный телефон",
    },
  },
};
