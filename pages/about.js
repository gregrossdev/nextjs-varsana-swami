import Image from "next/image";

// styles
import styles from "../styles/page.module.css";

// images
import aboutImg from "../public/images/about-varsana.jpg";

export default function About() {
  return (
    <div className="page-container">
      <header>
        <h2 className="page-title"> About Varsana Swami </h2>
        <div className="page-wrapper">
          <div className={styles.aboutGrid}>
            <figure className={styles.aboutFigure}>
              <Image
                src={aboutImg}
                alt="about"
                layout="fill"
                objectFit="cover"
              />
            </figure>
            <article className={styles.aboutArticle}>
              <p>
                Varsana Maharaj is known for his deep understanding of the
                Gaudiya Vaishnava teachings, his enlivening presentations on
                Gaura Lila, Vrindavan pastimes, and Dhama-tattva.
              </p>
              <p>
                Led by the sensitivity of his heart, Maharaj has a unique
                lifelong connection with the Earth. His reverence is palpable as
                he takes special interest in the Dhama, sustainability and eco
                ethics.
              </p>
              <p>
                Maharaj effortlessly connects the magic of the natural world to
                Bhakti theology in a way that both illuminates scriptural
                understanding and awakens intuitive knowing to the listener.
              </p>
            </article>
          </div>
        </div>
      </header>
      <section className="page-section">
        <p>
          Varsana Swami was born in 1950 in Morristown, New Jersey. From
          childhood, he was deeply drawn to the workings of the natural world.
          He became a vegetarian of his own accord at the age of seven and was
          determined to lead a life of compassion. As a young man, his search
          for meaning manifested in studying theology in college, visiting
          ashrams, and hearing from different gurus.
        </p>

        <p>
          Finally, in 1972 he had the great fortune of meeting his beloved
          spiritual master, Srila Prabhupada. That encounter had such a profound
          impact on him that he was inspired to join the Brooklyn ISKCON temple.
          Shortly thereafter he went to New Vrindaban and began what is now over
          five decades of devotional service.
        </p>

        <p>
          Maharaja has performed a variety of seva over the years that includes:
          raising and training draft animals for farm work; pujari service;
          conservation work; and heading up the excavation department, which is
          responsible for literally carving out the infrastructure and holy
          places of New Vrindaban. For that purpose in 2007, he founded Dham
          Seva.Inc, a nonprofit organization dedicated to Srila Prabhupada’s
          desire that the holy tirthas of Vraja appear in New Vrindaban.
        </p>

        <p>
          Varsana Swami is also a strong advocate and dedicated supporter of the
          farm movement within ISKCON. He is the author of the book Sri Gaura
          Lila and Appreciating New Vrindaban Dhama.
        </p>
      </section>
    </div>
  );
}
