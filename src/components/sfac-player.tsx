import React from 'react';
import './styles/sfac-player.css';
import SFACPlayerProps from './SFACPlayerProps';

  

// const SFACPlayer: React.FC<SFACPlayerProps> = ({ url, playing }) => {
//   return (
//     <div>
//       <video className="sfac-player" controls playing={playing}>
//         <source src={url} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };
const SFACPlayer: React.FC<SFACPlayerProps> = ({ url, playing, controls, ...videoProps }) => {
  return (
    <div>
      {/* <video className="sfac-player" controls={controls} playing={playing} {...videoProps}> */}
      <video className="sfac-player" controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};


export default SFACPlayer;