import React from "react";
interface ControlPlaybackRateProps {
    playbackRate: number;
    onPlaybackRateChange: (rate: number) => void;
}
declare const ControlPlaybackRate: React.FC<ControlPlaybackRateProps>;
export default ControlPlaybackRate;
