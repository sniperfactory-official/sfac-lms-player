import React from "react";
interface ControlPlayPauseProps {
    onPlay: () => void;
    onPause: () => void;
    isPlaying: boolean;
}
declare const ControlPlayPause: React.FC<ControlPlayPauseProps>;
export default ControlPlayPause;
