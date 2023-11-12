import React, { FC, useState } from "react";

interface AudioPlayerProps {
  audioUrl: string;
}

const AudioPlayer: FC<AudioPlayerProps> = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      <audio
        controls // Добавьте элементы управления, такие как кнопки воспроизведения и ползунок
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src={audioUrl} type="audio/mpeg" />
        Ваш браузер не поддерживает аудио элемент.
      </audio>
    </div>
  );
};

export default AudioPlayer;
