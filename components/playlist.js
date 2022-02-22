import React, { useState } from "react";
import AudioFile from "./playlist-file";


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

const Playlist = ({ playlist }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper>
      {playlist.map((file, index) => {
        let name = cleanTitle(file.public_id);
        return <AudioFile key={file.id} index={index} name={name} {...file} />;
      })}
    </Wrapper>
  );
};

export default Playlist;

const Wrapper = styled.div`
  max-height: 60vh;
  overflow-y: scroll;
  padding: 0;

  


  @media and screen and (min-width: 900px) {
    padding: 0rem 2rem;
  }
`;
