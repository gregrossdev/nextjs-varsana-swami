import React from "react";
import Link from "next/link";
import Image from "next/image";
import book from "./home-photo-book.module.css";

// images
import bookImg from "../public/images/photo-book.jpg";

export default function PhotoBook() {
  return (
    <section className={`${book.section} photo-book`}>
      <div className={`inner ${book.buy}`}>
        <Link href="/purchase">
          <a className={book.buyBtn}>
            <span>Buy</span>
            <span>Now</span>
          </a>
        </Link>
      </div>
      <div className={book.grid}>
        <figure className={book.figure}>
          <Image
            src={bookImg}
            alt="photo-book"
            className={book.img}
          />
        </figure>
        <article className={book.article}>
          <div className={book.textBox}>
            <h2>Photo Book</h2>
            <p>Appreciating New Vrindaban-dhama</p>
          </div>
        </article>
      </div>
    </section>
  );
}
