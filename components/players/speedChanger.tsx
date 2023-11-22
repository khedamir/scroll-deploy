import React, { FC, useState } from "react";

const SpeedValues = ["0.5x", "1x", "1.5x", "2x"];
const Speed = ["0.5", "1.0", "1.5", "2.0"];

interface SpeedChanger {
  value: number;
  setValue: (v: number) => void;
  HandlePlaybackRateChange: (v: string) => void;
}

const SpeedChanger: FC<SpeedChanger> = ({
  HandlePlaybackRateChange,
  value,
  setValue,
}) => {
  const changeValue = () => {
    if (value < 3) {
      HandlePlaybackRateChange(Speed[value + 1]);
      setValue(value + 1);
    } else {
      HandlePlaybackRateChange(Speed[0]);
      setValue(0);
    }
  };

  return (
    <div className="speed">
      <span onClick={changeValue}>{SpeedValues[value]}</span>
    </div>
  );
};

export default SpeedChanger;
