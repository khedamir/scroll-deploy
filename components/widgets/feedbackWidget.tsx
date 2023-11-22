import React, { useState } from "react";
import Feadback from "../modals/feadback";

const FeedbackWidget = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <Feadback active={modalActive} setActive={setModalActive} />
      <span onClick={() => setModalActive(true)}>Помогите нам стать лучше</span>
    </div>
  );
};

export default FeedbackWidget;
