import React, { useEffect, useState } from "react";
import { useModalsContext } from "../../context/ModalsContext";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { registerConfirm } from "../../utils/formFetchs";
import InputWrapper from "../InputWrapper";
import { ReactSVG } from "react-svg";
import Loader from "../loader";
import { useHandleScroll } from "../../hooks";

interface FormValuesType {
  code: string;
}

const ConfirmRegistration = () => {
  const { setLoginActive } = useModalsContext();
  const router = useRouter();
  const { confirm_user_id, confirm_code } = router.query;
  const [succes, setSucces] = useState(false);

  useHandleScroll(Boolean(confirm_user_id));

  const clearQueryParams = () => {
    const { pathname, query } = router;
    const newUrl = { pathname };
    router.replace({ pathname: newUrl.pathname, query: {} }, undefined, {
      shallow: true,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesType>({
    defaultValues: {
      code: "",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    let timeoutId;
    if (confirm_code) {
      registerConfirm({
        userId: String(confirm_user_id),
        confirm_code: String(confirm_code),
      }).then(() => {
        setSucces(true);

        timeoutId = setTimeout(() => {
          setLoginActive(true);
          clearQueryParams();
        }, 1500);
      });
    }
  }, []);

  const onSubmit = async (values: FormValuesType) => {
    registerConfirm({
      userId: String(confirm_user_id),
      confirm_code: values.code,
    }).then(() => {
      setLoginActive(true);
      clearQueryParams();
    });
    try {
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div
      className={`modal modal--wide ${confirm_user_id && "is--active"}`}
      id="modal-login"
    >
      <div className="modal__wrap">
        <div className="modal__wrapper">
          <div className="modal__left">
            <picture className="modal__logotype">
              <img src="/img/logotype.svg" alt="SCROLL" />
            </picture>
            <button
              onClick={() => clearQueryParams()}
              className="modal__close-btn modal__close-btn--mobile"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
          </div>
          <div className="modal__right">
            <button
              onClick={() => clearQueryParams()}
              className="modal__close-btn modal__close-btn--desktop"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
            <div className="modal__body">
              {!confirm_code ? (
                <>
                  <h3 className="modal__heading">
                    Введите код для подтверждения регистрации
                  </h3>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="modal-form modal__form"
                  >
                    <InputWrapper
                      error={errors.code}
                      errorMessage={errors.code?.message}
                    >
                      <input
                        type="text"
                        className="input-field__input"
                        placeholder="Код подтверждения"
                        {...register("code", { required: "", minLength: 2 })}
                      />
                    </InputWrapper>
                    <button
                      type="submit"
                      className="modal-form__btn btn btn--blue"
                    >
                      Отправить
                    </button>
                  </form>
                </>
              ) : (
                <>
                  {succes ? (
                    <>
                      <h3 className="modal__heading">
                        Аккаунт успешно активирован
                      </h3>
                      <div className="modal__description">
                        <ReactSVG src="/img/sprite/icon-complete.svg" />
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="modal__heading">Идет активация...</h3>
                      <Loader />
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRegistration;
