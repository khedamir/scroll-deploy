import React, { useState, useRef } from "react";
import YouTube from "react-youtube";

const YoutubeAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [playbackRate, setPlaybackRate] = useState(1.0);

  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (e: {
    target: { currentTime: any; duration: any };
  }) => {
    const { currentTime, duration } = e.target;
    setPlayed(currentTime / duration);
    setDuration(duration);
  };

  const handleVolumeChange = (e: { target: { value: string } }) => {
    setVolume(parseFloat(e.target.value));
  };

  const handlePlaybackRateChange = (e: { target: { value: string } }) => {
    setPlaybackRate(parseFloat(e.target.value));
  };

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: isPlaying ? 1 : 0,
    },
  };

  // YouTube video URL с параметром `audio_only`
  const youtubeAudioUrl =
    "https://www.youtube.com/watch?v=dpwHq_NVxQg&audio_only=1";

  return (
    <div>
      <YouTube
        // videoId={"dpwHq_NVxQg"}
        opts={opts}
        // @ts-ignore
        onProgress={handleProgress}
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

export default YoutubeAudioPlayer;
