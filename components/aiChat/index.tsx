import React, { useEffect, useState, FC, useRef } from "react";
import { ReactSVG } from "react-svg";
import { Answers } from "./answers";
import { askGpt } from "../../utils/askGpt";
import { useModalsContext } from "../../context/ModalsContext";
import { useHandleScroll } from "../../hooks";

enum role {
  USER = "user",
  GPT = "gpt",
}

interface Message {
  role: role;
  content: string;
}

const ChatAi = () => {
  const { aiChatActive, setAiChatActive } = useModalsContext();
  const [messages, setMessages] = useState<Message[]>([]);

  const [answer, setAnswer] = useState<Message>();
  const [message, setMessage] = useState<string>("");

  const [activeItem, setActiveItem] = useState<number>();
  const contentRefs = useRef<any>({});

  useHandleScroll(aiChatActive);

  const getHeight = (itemId: number) => {
    if (contentRefs.current[itemId]) {
      return contentRefs.current[itemId].getBoundingClientRect().height + "px";
    }
    return "0px";
  };

  const toggleActiveItem = (id: number) => {
    if (activeItem === id) {
      setActiveItem(undefined);
    } else {
      setActiveItem(id);
    }
  };

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, { role: role.USER, content: message }]);
      askGpt(message)
        .then((response) => {
          if (response) {
            setAnswer({ role: role.GPT, content: response });
          }
        })
        .catch((error) => {
          console.error(error);
        });
      setMessage("");
    }
  };

  useEffect(() => {
    if (answer) {
      setMessages([...messages, answer]);
      setAnswer(undefined);
    }
  }, [answer]);

  return (
    <div
      onClick={() => setAiChatActive(false)}
      className={`ai-chat ${aiChatActive && "is--active"}`}
      id="ai-chat"
    >
      <div className="ai-chat__wrap">
        <div onClick={(e) => e.stopPropagation()} className="ai-chat__wrapper">
          <button
            onClick={() => setAiChatActive(false)}
            className="ai-chat__close"
          >
            <ReactSVG src="/img/sprite/icon-close-thin.svg" />
          </button>
          <div className="ai-chat-assistant ai-chat__assistant">
            <picture className="ai-chat-assistant__img">
              <img src="/img/ai-img.png" alt="Assistant" />
            </picture>
            <div className="ai-chat-assistant__dropdown">
              <p className="ai-chat-assistant__message">
                Привет! <br />Я ассистент
              </p>
            </div>
          </div>
          <div className="ai-chat__main">
            <div className="ai-chat__list">
              {Answers.map((ans) => (
                <div
                  key={ans.id}
                  className={`ai-chat__item ${
                    activeItem === ans.id && "is--open"
                  }`}
                >
                  <button
                    onClick={() => toggleActiveItem(ans.id)}
                    className="ai-chat__trigger"
                  >
                    {ans.title}
                  </button>
                  <div
                    style={{
                      height: ans.id === activeItem ? getHeight(ans.id) : "0px",
                    }}
                    className={`ai-chat__dropdown ${
                      activeItem === ans.id && "is--open"
                    }`}
                  >
                    <div
                      className="ai-chat__content"
                      ref={(el) => (contentRefs.current[ans.id] = el)}
                    >
                      {ans.description}
                    </div>
                  </div>
                </div>
              ))}
              {messages.map((message, id) => (
                <div key={id} className={`ai-chat__item ${message.role}`}>
                  {message.content}
                </div>
              ))}
            </div>
          </div>
          <div className="ai-chat__bottom">
            <div className="ai-chat-field">
              <label htmlFor="ai-chat-input" className="ai-chat-field__label">
                Не нашли вопрос? Задайте
              </label>
              <div className="ai-chat-field__inner">
                <input
                  type="text"
                  className="ai-chat-field__input"
                  placeholder="Ваш вопрос"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  onClick={sendMessage}
                  className="ai-chat-field__btn"
                  aria-label="Далее"
                >
                  <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAi;
