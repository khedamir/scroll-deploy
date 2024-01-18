import React, {
  useState,
  useRef,
  useEffect,
  MouseEvent,
  ChangeEvent,
  TouchEvent,
} from "react";
import { ReactSVG } from "react-svg";
import SpeedChanger from "./speedChanger";
import { useAudioContext } from "../../context/audioContext";
import ReactPlayer from "react-player";

const AudioPlayer = () => {
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [speedValue, setSpeedValue] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [seeking, setSeeking] = useState<boolean>(false);
  const playerRef = useRef<ReactPlayer | null>(null);

  const {
    audioLink,
    playerActive,
    isPlaying,
    setIsPlaying,
    podcastId,
    podcastName,
  } = useAudioContext();

  useEffect(() => {
    setPlayed(0);
    setDuration(0);
  }, [podcastId, audioLink]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (progress: {
    played: React.SetStateAction<number>;
  }) => {
    if (!seeking) {
      setPlayed(progress.played);
    }
  };

  const handleDuration = (duration: React.SetStateAction<number>) => {
    setDuration(duration);
  };

  const toggleVolumeChange = () => {
    if (volume !== 0) {
      setVolume(parseFloat("0"));
    } else {
      setVolume(parseFloat("1"));
    }
  };
  const handleVolumeChange = (e: { target: { value: string } }) => {
    setVolume(parseFloat(e.target.value));
  };

  const handlePlaybackRateChange = (value: string) => {
    setPlaybackRate(parseFloat(value));
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };
  const handleSeekChange = (e: TouchEvent | MouseEvent | ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPlayed(parseFloat(target.value));
  };
  const handleSeekMouseUp = (e: MouseEvent | TouchEvent) => {
    const target = e.target as HTMLInputElement;
    setSeeking(false);
    playerRef.current?.seekTo(Number(target.value));
    setPlayed(Number(target.value));
  };

  if (!(audioLink && podcastId)) {
    return <span></span>;
  }

  return (
    <div className={`player ${playerActive && "is--active"}`}>
      <div className="player__wrap">
        <ReactPlayer
          ref={playerRef}
          url={audioLink}
          playing={isPlaying}
          volume={volume}
          playbackRate={playbackRate}
          onProgress={handleProgress}
          onDuration={handleDuration}
        />
      </div>

      <div className="player__wrapper">
        <div className="player__block">
          <span className="play__button" onClick={handlePlayPause}>
            {isPlaying ? (
              <ReactSVG src="/img/sprite/icon-pause.svg" />
            ) : (
              <ReactSVG src="/img/sprite/icon-play.svg" />
            )}
          </span>
          <div className="slider__wrapper">
            <span className="time">{formatTime(played * duration)}</span>
            <input
              className="rangeInput"
              type="range"
              min={0}
              max={1}
              step="any"
              value={played}
              onMouseDown={handleSeekMouseDown}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
              onTouchStart={handleSeekMouseDown}
              onTouchMove={handleSeekChange}
              onTouchEnd={handleSeekMouseUp}
            />
            <span className="time">{formatTime(duration)}</span>
          </div>
          <div className="times__mobile">
            <span className="time">{formatTime(played * duration)}</span>
            <span className="time">{formatTime(duration)}</span>
          </div>
          <SpeedChanger
            value={speedValue}
            setValue={setSpeedValue}
            HandlePlaybackRateChange={(v: string) =>
              handlePlaybackRateChange(v)
            }
          />
        </div>
        <div className="player__bottom">
          <span className="audio__name">{podcastName}</span>
          <span className="play__button" onClick={handlePlayPause}>
            {isPlaying ? (
              <ReactSVG src="/img/sprite/icon-pause.svg" />
            ) : (
              <ReactSVG src="/img/sprite/icon-play.svg" />
            )}
          </span>
          <div className="right__panel">
            <SpeedChanger
              value={speedValue}
              setValue={setSpeedValue}
              HandlePlaybackRateChange={(v: string) =>
                handlePlaybackRateChange(v)
              }
            />
            <div className="volume__changer">
              <span onClick={toggleVolumeChange}>
                <ReactSVG src="/img/sprite/icon-volume.svg" />
              </span>
              <input
                className="rangeInput"
                type="range"
                min={0}
                max={1}
                step="any"
                value={volume}
                onChange={handleVolumeChange}
                aria-valuetext={`Progress: ${volume * 100}%`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Вспомогательная функция для форматирования времени
const formatTime = (seconds: number) => {
  const date = new Date(seconds * 1000);
  return date.toISOString().substr(11, 8);
};

export default AudioPlayer;
