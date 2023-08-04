// export SFACPlayer as default, and ControlPlayPause.tsx, ControlVolume.tsx, ControlProgress.tsx, ControlFullScreen.tsx
// Path: src/SFACPlayer.tsx
import SFACPlayer from './components/sfac-player';
import ControlPlayPause from './components/controller/ControlPlayPause';
// import ControlVolume from './components/controller/ControlVolume';
import ControlPlaybackRate from './components/controller/ControlPlaybackRate';
export default SFACPlayer;
export { ControlPlayPause, ControlPlaybackRate };