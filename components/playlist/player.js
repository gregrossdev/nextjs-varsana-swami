import React, { useState, useRef } from "react";

const Player = ({ source, slug, togglePlay, index, isCurrent }) => {
  const audioRef = useRef();
  const [playing, setPlaying] = useState(false);

  // check if source is a single string, if so convert to array
  if (!Array.isArray(source) && String(source) === source) {
    source = source.split();
  }

  console.log(source.Key);

  return (
    <div>
      <audio id={slug} ref={audioRef} controls>
        <source id={slug} src={`https://varsana-audio.nyc3.digitaloceanspaces.com/${source.Key}`} />; Your browser does not support the{" "}
        <code>audio</code> element.
      </audio>

      <div className="controls">
        {playing && isCurrent ? (
          <button
            className="player__button"
            onClick={() => {
              setPlaying(false);
              togglePlay(slug, index);
            }}
          >
            Pause
          </button>
        ) : (
          <button
            className="player__button"
            onClick={() => {
              setPlaying(true);
              togglePlay(slug, index);
            }}
          >
            Play
          </button>
        )}
      </div>
    </div>
  );
};

export default Player;
