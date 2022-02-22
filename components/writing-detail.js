import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import writing from "./writing-detail.module.css";

export default function Writing(props) {
  const { cover, title, content } = props.post;

  let imgPath = cover;

  if (cover) {
    imgPath = cover.replace("/public", "");
  }

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image src={imagePath} alt={image.alt} width={600} height={300} />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={writing.article}>
      <figure className={writing.cover}>
        <Image
          src={imgPath}
          alt={`Cover Image for ${title}`}
          layout="fill"
          objectFit="cover"
        />
      </figure>
      <h2 className={writing.title}>{title}</h2>
      <section className={writing.body}>
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      </section>
    </article>
  );
}
