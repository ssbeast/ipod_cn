import React from "react";
import './styles.css';
import Song from "./Song";
import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";

import useAudioPlayer from './useAudioPlayer';

function Audio() {
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();

  return (
    <div className="player">
      <audio id="audio">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Song songName="Spy vs. Spy" songArtist="Chill-out Acid Squeeze Mix" />
      <div className="controls">
        {playing ? 
          <Pause handleClick={() => setPlaying(false)} /> :
          <Play handleClick={() => setPlaying(true)} />
        }
        <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
      </div>
    </div>
  );
}

export default Audio;
