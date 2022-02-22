import Link from "next/link";
import Image from "next/image";

// styles
import page from "../../styles/page.module.css";
import books from "../../styles/page-books.module.css";

const Books = (props) => {
  return (
    <div className={page.container}>
      <header>
        <h2 className={`${page.title} ${books.title}`}>Moontower Books</h2>
      </header>
      <div className={books.wrapper}>
        <section className={`inner ${page.content}`}>
          <div className={books.book}>
            <Link href="/books/single-book">
              <a className={books.fixed}>
                <figure className={books.figure}>
                  <Image src="/images/books-photo.jpg" alt="" layout="fill" />
                </figure>
              </a>
            </Link>

            <div className={books.info}>
              <p>Photo-Book</p>
              <p className={books.bold}>
                <em>
                  Appreciating New Vrindaban-dhama 
                </em>
              </p>
              <p className={books.bold}>
                <em>
                Her beauty and glory, message
                  and grace
                </em>
              </p>
              <p>
                Maharaja’s photo book is an invitation to realize and enter
                deeper, magical dimensions of Sri Dhama. It offers a tangible
                glimpse of this enchanted realm, not easily seen...
              </p>
              <div className={books.buttons}>
                <button className={books.button}>
                  <Link href="/books/single-book"> Read More </Link>
                </button>
                <div className={books.buy}>
                  <Link href="/purchase" className={books.btn}>
                    <a className={books.buyBtn}>
                      <span>Buy</span>
                      <span>Now</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={books.book}>
            <div className={books.fixed}>
              <figure className={books.figure2}>
                <Image src="/images/sri-gaura.jpg" alt="" layout="fill" objectFit="contain"/>
              </figure>
            </div>
            <div className={books.info}>
              <p>Currently unavailable </p>
              <p className={books.bold}>
                <em>
                Sri Gaura Lila: Nimai of Nadia
                </em>
              </p>
              <p>Early pastimes Sri Caitanya Mahaprabhu in Navadvipa.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Books;
