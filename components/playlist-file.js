import React from "react";
import styles from './playlist-file.module.css'

// TODO: clean title 
// TODO: add accordion  

function nthIndex(str, pat, n) {
  var L = str.length,
    i = -1;
  while (n-- && i++ < L) {
    i = str.indexOf(pat, i);
    if (i < 0) break;
  }
  return i;
}

function cleanTitle(folderName) {
  const splice = nthIndex(folderName, "/", 2);
  folderName = folderName.substr(splice + 1);
  return folderName;
}


const AudioFile = ({Key}) => {
  return (
    <article className={styles.article}>
      <h5 className={styles.h5}>{Key}</h5>
      <audio className={styles.audio} src={`https://varsana-audio.nyc3.digitaloceanspaces.com/${Key}`} type="audio/mpeg" controls />
    </article>
  );
};

export default AudioFile;


