import React from "react";



const AudioFile = ({Key}) => {
  return (
    <article>
      <h5>{Key}</h5>
      <audio src={`https://varsana-audio.nyc3.digitaloceanspaces.com/${Key}`} type="audio/mpeg" controls />
    </article>
  );
};

export default AudioFile;


