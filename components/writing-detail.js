import React from "react";
import Link from "next/link";
import Image from "next/image";
import writing from "./writing-detail.module.css";

export default function Writing(props) {
  const { cover, title, content } = props.post;

  return (
    <article className={writing.article}>
        <figure className={writing.cover}>
          <Image
            src={cover}
            alt={`Cover Image for ${title}`}
            layout="fill"
            objectFit='cover'
          />
        </figure>
        <h2 className={writing.title}>{title}</h2>
        <section
          className={writing.body}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
  );
}
