import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [playbackRate, setPlaybackRate] = useState(1.0);

  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (progress: {
    played: React.SetStateAction<number>;
  }) => {
    setPlayed(progress.played);
  };

  const handleDuration = (duration: React.SetStateAction<number>) => {
    setDuration(duration);
  };

  const handleVolumeChange = (e: { target: { value: string } }) => {
    setVolume(parseFloat(e.target.value));
  };

  const handlePlaybackRateChange = (e: { target: { value: string } }) => {
    setPlaybackRate(parseFloat(e.target.value));
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url="https://rehornubay.beget.app/upload/iblock/faf/ermzn9ce8lfb100kg2cyadzvg9ywkxt5.mp3" // Замените на ваш URL
        playing={isPlaying}
        volume={volume}
        playbackRate={playbackRate}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />

      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>

      <input
        type="range"
        min={0}
        max={1}
        step="any"
        value={played}
        onChange={(e) => setPlayed(parseFloat(e.target.value))}
      />

      <div>
        {formatTime(played * duration)} / {formatTime(duration)}
      </div>

      <input
        type="range"
        min={0}
        max={1}
        step="any"
        value={volume}
        onChange={handleVolumeChange}
      />

      <select value={playbackRate} onChange={handlePlaybackRateChange}>
        <option value={0.5}>0.5x</option>
        <option value={1.0}>1x</option>
        <option value={1.5}>1.5x</option>
        <option value={2.0}>2x</option>
      </select>
    </div>
  );
};

// Вспомогательная функция для форматирования времени
const formatTime = (seconds: number) => {
  const date = new Date(seconds * 1000);
  return date.toISOString().substr(11, 8);
};

export default AudioPlayer;
