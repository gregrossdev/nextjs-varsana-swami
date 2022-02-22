import React from "react";



const AudioFile = ({name, secure_url}) => {
  return (
    <Wrapper>
      <h5>{name}</h5>
      <audio src={`${secure_url}`} type="audio/mpeg" controls />
    </Wrapper>
  );
};

export default AudioFile;


const Wrapper = styled.article`
  margin: 2em;
  max-width: 90%;

  h5 {
    font-size: 1.25rem;
    font-weight: bold;
    font-family: 'monospace'; 
  }

  audio {
    width: 100%;
  }
`
