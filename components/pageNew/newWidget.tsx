import React, { FC, RefObject, useEffect, useState } from "react";

interface NewWidgetProps {
  widgetRef: RefObject<HTMLDivElement>;
}

const NewWidget: FC<NewWidgetProps> = ({ widgetRef }) => {
  const [isContentWidgetVisible, setIsContentWidgetVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contentWidgetMobile = document.querySelector(
        ".content-widget--mobile"
      );

      if (contentWidgetMobile) {
        const rect = contentWidgetMobile.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsContentWidgetVisible(!isVisible);
      }
    };

    // Добавляем обработчик события на прокрутку
    window.addEventListener("scroll", handleScroll);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleConsultationClick = () => {
    // Проверяем, что у нас есть ссылка на элемент
    if (widgetRef.current) {
      // Получаем текущую вертикальную позицию элемента
      const offsetTop = widgetRef.current.offsetTop;

      // Выполняем скролл к элементу с добавлением расстояния сверху (например, 20 пикселей)
      window.scrollTo({
        top: offsetTop - 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      onClick={handleConsultationClick}
      className={`content-flag ${isContentWidgetVisible && "is--active"}`}
    >
      <span className="content-flag__wrapper">Консультация</span>
    </div>
  );
};

export default NewWidget;
