import React, { ComponentType, ReactNode } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import VideoWrapper from './VideoWrapper';

interface WrappedReactPlayerProps extends ReactPlayerProps {
  wrapper?: ComponentType<{ children: React.ReactNode }>;
}

const WrappedReactPlayer: React.FC<WrappedReactPlayerProps> = ({
  wrapper: WrapperComponent,
  ...props
}) => {
  if (WrapperComponent) {
    return (
      <WrapperComponent>
        <ReactPlayer {...props} />
      </WrapperComponent>
    );
  }
  return <ReactPlayer {...props} />;
};

export default WrappedReactPlayer;
