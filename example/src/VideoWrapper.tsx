import React, { ReactNode } from 'react';
interface VideoWrapperProps {
  children: ReactNode;
}
const VideoWrapper: React.FC<VideoWrapperProps> = ({ children }) => {
  return (
    <div className="video-wrapper">
      {children}
    </div>
  );
};
export default VideoWrapper;