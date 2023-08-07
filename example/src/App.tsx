
import React from 'react';
import WrappedReactPlayer from './WrappedReactPlayer';
import VideoWrapper from './VideoWrapper';
const App = () => {
  return (
    <div>
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=pSUydWEqKwE" playing={true} controls={true} loop={true}/> */}

      {/* 비디오 플레이어를 래핑하는 커스텀 래퍼 컴포넌트 전달 */}
      <WrappedReactPlayer
        url="https://www.youtube.com/watch?v=pSUydWEqKwE"
        wrapper={VideoWrapper} playing={true} controls={true} loop={true}
      />
      {/* 기본 래퍼 없이 사용 */}
      <WrappedReactPlayer url="another_video_url" />
    </div>
  );
};
export default App;

