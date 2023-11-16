import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import { useAppDispatch } from "../../redux/store";
import { fetchAuth, fetchAuthMe } from "../../redux/auth/asyncAction";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { registerConfirm } from "../../utils/register";

interface FormType {
  code: string;
}

const ConfirmRegistration = () => {
  const { setLoginActive, setRegisterActive } = useModalsContext();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { confirm_user_id, confirm_code } = router.query;
  const [active, setActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      code: "",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    console.log(confirm_user_id);

    if (confirm_user_id) {
      setActive(true);
    }

    if (confirm_code) {
      registerConfirm({
        userId: String(confirm_user_id),
        confirm_code: String(confirm_code),
      });
    }
  }, []);

  const onSubmit = async (values: FormType) => {
    console.log(values);
    registerConfirm({
      userId: String(confirm_user_id),
      confirm_code: values.code,
    }).then(() => {
      router.push("/");
      setActive(false);
      setLoginActive(true);
    });
    try {
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div
      className={`modal modal--wide ${active && "is--active"}`}
      id="modal-login"
    >
      <div className="modal__wrap">
        <div className="modal__wrapper">
          <div className="modal__left">
            <picture className="modal__logotype">
              <img src="/img/logotype.svg" alt="SCROLL" />
            </picture>
          </div>
          <div className="modal__right">
            <div className="modal__content">
              <h3 className="modal__heading">
                Введите код для подтверждения регистрации
              </h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="modal-form modal__form"
              >
                <div
                  className={`input-field input-field--border modal-form__input ${
                    errors.code && "is--error"
                  }`}
                >
                  <div className="input-field__inner">
                    <input
                      type="text"
                      className="input-field__input"
                      placeholder="Код подтверждения"
                      {...register("code", { required: "", minLength: 2 })}
                    />
                  </div>
                  <span className="input-field__error">
                    Это обязательное поле
                  </span>
                </div>
                <button type="submit" className="modal-form__btn btn btn--blue">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRegistration;
