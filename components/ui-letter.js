import React from "react";
import letter from "./ui-letter.module.css"


const Letter = ({ title, date, body }) => {
  return (
    <article className={letter.article}>
      <h2>{title}</h2>
      <span>{date}</span>
      <p>“{body}”</p>
    </article>
  );
};

export default Letter;

