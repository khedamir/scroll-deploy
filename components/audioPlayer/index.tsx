import React, { FC, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";

interface AudioPlayerProps {
  audioUrl: string;
  active: boolean;
  isPlaying: boolean;
  setIsPlaying: (v: boolean) => void;
}

const AudioPlayer: FC<AudioPlayerProps> = ({
  audioUrl,
  active,
  isPlaying,
  setIsPlaying,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;

    // Событие, вызываемое при изменении времени воспроизведения
    const handleTimeUpdate = () => {
      if (audioElement) {
        setCurrentTime(audioElement.currentTime);
      }
    };

    // Событие, вызываемое при загрузке метаданных (включая продолжительность)
    const handleLoadedMetadata = () => {
      if (audioElement) {
        setDuration(audioElement.duration);
      }
    };

    // Подписка на события
    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    // Очистка событий при размонтировании компонента
    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, []);

  const handlePlayPause = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`player ${active && "is--active"}`}>
      <audio className="audio" ref={audioRef}>
        <source src={audioUrl} type="audio/mpeg" />
        Ваш браузер не поддерживает аудио элемент.
      </audio>
      <div className="player__wrapper">
        <div className="player__block">
          <span className="play__button" onClick={handlePlayPause}>
            <ReactSVG src="/img/sprite/icon-play.svg" />
          </span>
          <div className="slider__wrapper">
            <span className="time">{currentTime.toFixed(2)}</span>
            <span className="slider">
              <span className="progress"></span>
            </span>
            <span className="time">{duration.toFixed(2)}</span>
          </div>
          <span className="speed">1x</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
