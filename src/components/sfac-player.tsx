// import React, { useState } from "react";
// import "./styles/sfac-player.css";
// import SFACPlayerProps from "./SFACPlayerProps";
// import ControlPlayPause from "./controller/ControlPlayPause";
// import ControlPlaybackRate from "./controller/ControlPlaybackRate";
// import ControlVolume from "./controller/ControlVolume";

// const SFACPlayer: React.FC<SFACPlayerProps> = ({ url }) => {
//   const [playing, setPlaying] = useState(false);
//   const [playbackRate, setPlaybackRate] = useState(1);
//   const [volume, setVolume] = useState(1);

//   const handlePlay = () => {
//     setPlaying(true);
//   };

//   const handlePause = () => {
//     setPlaying(false);
//   };

//   const handlePlaybackRate = (rate: number) => {
//     setPlaybackRate(rate);
//   };

//   const handleVolumeChange = (newVolume: number) => {
//     setVolume(newVolume);
//   };

//   return (
//     <div>
//       <video className="sfac-player" controls>
//         <source src={url} type="video/mp4" />
//         Your browser does not support the video tag. ss
//       </video>

//       <ControlPlayPause
//         onPlay={handlePlay}
//         onPause={handlePause}
//         isPlaying={playing}
//       />

//       <ControlPlaybackRate
//         playbackRate={playbackRate}
//         onPlaybackRateChange={handlePlaybackRate}
//       />

//       <ControlVolume volume={volume} onVolumeChange={handleVolumeChange} />
//     </div>
//   );
// };

// export default SFACPlayer;
//
//
//
//Next.js의 경우 CSS 모듈을 사용하기 위해서는 CSS 파일 이름에 .module.css 확장자를 사용
import styles from "./styles/sfac-player.module.css";
import classNames from "classnames";
import React, { memo, useEffect, useRef, useState } from "react";
// import Controlbar from "./Controlbar";

interface SFACPlayerProps {
  src: string;
  className?: string;
}

const SFACPlayer: React.FC<SFACPlayerProps> = ({ className, src }) => {
  const [nowPlaying, setNowPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControl, setShowControl] = useState(false);

  const ref = useRef<HTMLVideoElement>(null);

  // 현재 재생 중인 영상의 총 시간
  const totalTime = (ref && ref.current && ref.current.duration) || 0;
  // 참조한 <video> 요소를 가리키는 변수
  const videoElement = ref && ref.current;

  // CSS 모듈에서 가져온 클래스와 className 속성을 조합하여 생성된 클래스
  const classProps = classNames(styles.video, className);

  // 재생할 영상의 소스 URL
  const videoSrc = src || "";
  // 현재 재생 중인 시간
  const startTime = Math.floor(currentTime);

  // 동영상 시간 업데이트 함수
  const addTimeUpdate = () => {
    const observedVideoElement = ref && ref.current;
    if (observedVideoElement) {
      observedVideoElement.addEventListener("timeupdate", function () {
        setCurrentTime(observedVideoElement.currentTime);
      });
      setNowPlaying(true);
      observedVideoElement.play();
    }
  };

  useEffect(() => {
    addTimeUpdate();
  }, []);

  // progress 이동시켰을때 실행되는 함수
  const onProgressChange = (percent: number) => {
    if (!showControl) {
      setShowControl(true);
    }

    if (videoElement) {
      const playingTime = videoElement.duration * (percent / 100);

      setCurrentTime(playingTime);
    }
  };

  // play icon 클릭했을떄 실행되는 함수
  const onPlayIconClick = () => {
    if (videoElement) {
      if (nowPlaying) {
        setNowPlaying(false);
        videoElement.pause();
      } else {
        setNowPlaying(true);
        videoElement.play();
      }
    }
  };

  // control bar visible 관련 함수
  const handleControlVisible = () => {
    if (!showControl) {
      setShowControl(true);
      setTimeout(() => {
        setShowControl(false);
      }, 3000);
    }
  };

  return (
    <div>
      <video
        className="sfac-player"
        controls
        autoPlay={true}
        muted={true}
        playsInline={true}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag. ss
      </video>
    </div>
  );
};

export default SFACPlayer;
