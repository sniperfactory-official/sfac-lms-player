import React from "react";
interface ControlVolumeProps {
    volume: number;
    onVolumeChange: (volume: number) => void;
}
declare const ControlVolume: React.FC<ControlVolumeProps>;
export default ControlVolume;
