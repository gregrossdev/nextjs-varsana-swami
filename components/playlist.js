import React, { useState } from "react";
import AudioFile from "./playlist-file";



const Playlist = ({ playlist }) => {
 
  return (
    <div>
      {playlist.map((file, index) => {
        
        return <AudioFile key={file.id} index={index} {...file} />;
      })}
    </div>
  );
};

export default Playlist;

