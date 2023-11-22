import { createContext, useContext, useEffect, useState } from "react";

const AudioContext = createContext({
  playerActive: false,
  setPlayerActive: (value: boolean) => {},
  audioLink: "",
  setAudioLink: (v: string) => {},
  isPlaying: false,
  setIsPlaying: (value: boolean) => {},
  podcastId: "",
  podcastName: "",
  setPodcastName: (v: string) => {},
  setPodcastId: (v: string) => {},
});

const AudioContextProvider = (props: any) => {
  const [playerActive, setPlayerActive] = useState(false);
  const [audioLink, setAudioLink] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [podcastId, setPodcastId] = useState("");
  const [podcastName, setPodcastName] = useState("");

  return (
    <AudioContext.Provider
      value={{
        playerActive,
        setPlayerActive,
        audioLink,
        setAudioLink,
        isPlaying,
        setIsPlaying,
        podcastId,
        setPodcastId,
        podcastName,
        setPodcastName,
      }}
      {...props}
    />
  );
};

const useAudioContext = () => useContext(AudioContext);
export { AudioContextProvider, useAudioContext };
