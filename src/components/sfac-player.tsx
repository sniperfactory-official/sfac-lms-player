import React, { useState } from "react";
import "./styles/sfac-player.css";
import SFACPlayerProps from "./SFACPlayerProps";
import ControlPlayPause from "./controller/ControlPlayPause";
import ControlPlaybackRate from "./controller/ControlPlaybackRate";
import ControlVolume from "./controller/ControlVolume";

const SFACPlayer: React.FC<SFACPlayerProps> = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handlePlaybackRate = (rate: number) => {
    setPlaybackRate(rate);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  return (
    <div>
      <video className="sfac-player" controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag. ss
      </video>

      <ControlPlayPause
        onPlay={handlePlay}
        onPause={handlePause}
        isPlaying={playing}
      />

      <ControlPlaybackRate
        playbackRate={playbackRate}
        onPlaybackRateChange={handlePlaybackRate}
      />

      <ControlVolume volume={volume} onVolumeChange={handleVolumeChange} />
    </div>
  );
};

export default SFACPlayer;
