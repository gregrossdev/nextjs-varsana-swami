import Link from "next/link";
import Image from "next/image";

// styles
import styles from "../../styles/page.module.css";

export default function Books() {
  return (
    <div className="page-container">
      <header>
        <h2 className={styles.bookTitle}>Moontower Books</h2>
      </header>
      <div className={styles.bookWrapper}>
        <section className="page-section">
          <div className={styles.bookItem}>
            <Link href="/books/single-book">
              <a>
                <figure className={styles.bookFigure}>
                  <Image
                    src="/images/books-photo.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
              </a>
            </Link>

            <div className={styles.bookInfo}>
              <div className={styles.bookInfoCol}>
                <p>Photo-Book</p>
                <p className={styles.bold}>
                  <em>Appreciating New Vrindaban-dhama</em>
                </p>
                <p className={styles.bold}>
                  <em>Her beauty and glory, message and grace</em>
                </p>
                <p>
                  Maharaja’s photo book is an invitation to realize and enter
                  deeper, magical dimensions of Sri Dhama. It offers a tangible
                  glimpse of this enchanted realm, not easily seen...
                </p>
                <div className={styles.bookButtons}>
                  <button className="button">
                    <Link href="/books/single-book"> Read More </Link>
                  </button>
                  <div className={styles.bookBuy}>
                    <Link href="/purchase">
                      <a className={styles.bookBuyBtn}>
                        <span>Buy</span>
                        <span>Now</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.book}>
            <span>
              <figure className={styles.figure}>
                <Image
                  src="/images/sri-gaura.jpg"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </figure>
            </span>
            <div className={styles.info}>
              <div className={styles.infoCol}>
                <p>Currently unavailable </p>
                <p className={styles.bold}>
                  <em>Sri Gaura Lila: Nimai of Nadia</em>
                </p>
                <p>Early pastimes Sri Caitanya Mahaprabhu in Navadvipa.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
