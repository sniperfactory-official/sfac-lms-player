import React from "react";
import { useState } from "react";

interface ControlVolumeProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

const ControlVolume: React.FC<ControlVolumeProps> = ({
  volume,
  onVolumeChange,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    onVolumeChange(newVolume);
  };

  return (
    <div className="control-volume">
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={isDragging ? volume : 0}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default ControlVolume;
