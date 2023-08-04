import React from "react";

interface ControlPlayPauseProps {
  onPlay: () => void;
  onPause: () => void;
  isPlaying: boolean;
}

const ControlPlayPause: React.FC<ControlPlayPauseProps> = ({
  onPlay,
  onPause,
  isPlaying,
}) => {
  return (
    <>
      <button onClick={isPlaying ? onPause : onPlay}>
        {isPlaying ? "일시정지" : "재생"}
      </button>
    </>
  );
};

export default ControlPlayPause;
