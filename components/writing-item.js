import React from "react";
import Link from "next/link";
import Image from "next/image";
import writing from "./writing-item.module.css";


export default function Writing(props) {
  const { title, cover, content, date, id, category } = props;

  let imgPath = cover;

  if (cover) {
    imgPath = cover.replace("/public", "");
  }

  
  let excerpt;

  if(title.length > 28) {
    excerpt = content.split(' ').slice(0, 42).join(' ');
  } else {
    excerpt = content.split(' ').slice(0, 50).join(' ');
  }


  return (
    <article className={writing.article}>
      <figure className={`${writing.cover} imgRadius`}>
        <Image
          src={imgPath}
          alt={title}
          layout='fill'
          objectFit='cover'
        />
      </figure>
      <div className={writing.info}>
        <span className={writing.date}>{date}</span>
        <h3 className={writing.title}>{title}</h3>
        <p className={writing.excerpt}>{excerpt}...</p>
        <button className={writing.btn}>
          <Link href="/[category]/[id]" as={`/${category}/${id}`} className="link">
            Read More
          </Link>
        </button>
      </div>
    </article>
  );
}
