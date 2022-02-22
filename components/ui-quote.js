import React from "react";
import quotes from "./ui-quote.module.css"


const Quote = ({ color, quote, author }) => {
  return (
    <article className={`${color} ${quotes.article}` }>
      <blockquote className={quotes.quote}>“ {quote} ”</blockquote>
      <p className={quotes.author}>- {author}</p>
    </article>
  );
};

export default Quote;
