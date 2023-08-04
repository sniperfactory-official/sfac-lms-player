import React from "react";
import SFACPlayerProps from "../SFACPlayerProps";

interface ControlPlaybackRateProps {
  playbackRate: number;
  onPlaybackRateChange: (rate: number) => void;
}

const ControlPlaybackRate: React.FC<ControlPlaybackRateProps> = ({
  playbackRate,
  onPlaybackRateChange,
}) => {
  const playbackRates = [0.5, 0.75, 1, 1.5, 2];

  return (
    <>
      {playbackRates.map((rate) => (
        <button
          key={rate}
          onClick={() => onPlaybackRateChange(rate)}
          className={playbackRate === rate ? "active" : ""}
        >
          {rate}x
        </button>
      ))}
    </>
  );
};

export default ControlPlaybackRate;
