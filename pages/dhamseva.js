import Image from "next/image";
import Quote from "../components/ui-quote";
import Letter from "../components/ui-letter";

// styles
import styles from "../styles/page-dhamseva.module.css";

// images
import dhamImg from "../public/images/dhamseva.jpg";
import srilaImg from "../public/images/excerpts.jpg";

const Dham = (props) => {
  return (
    <div className="page-container">
      <header>
        <h2 className="page-title">Dham Seva Project</h2>
        <div className="page-wrapper">
          <div className={styles.grid}>
            <figure className={styles.figure}>
              <Image
                src={dhamImg}
                alt="dham seva"
                layout="fill"
                quality={100}
              />
            </figure>

            <article className={styles.article}>
              <h3>Dham Seva Mission</h3>
              <p>
                To award a voice to the Dham and her subjects so as to promote
                and facilitate the cultivation of relationships between
                pilgrims, the holy Dham, and her residents.
              </p>
              <p>
                To facilitate the gathering of pilgrims for the purpose of
                hearing and discussing theology and pastimes to better
                understand the significance and blessings of the holy places.
              </p>
            </article>
          </div>
        </div>
      </header>

      <section className="page-section">
        <article>
          <p>
            Following the order of Lord Caitanya, the Six Goswamis of Vrindavan
            under-went great sacrifices to establish temples and holy tirthas
            commemorating the places where Lord Krishna performed His pastimes.
            Srila Prabhupada brought Lord Caitanyas mission to the West. He
            desired to have a replica of Vrindavan as a place of pilgrimage in
            America, which would offer a substantial contribution to his
            mission.
          </p>

          <p>
            Imbibing the instructions of Srila Prabhupada, His Holiness Varsana
            Swami has been carving out landscapes throughout New Vrindaban since
            1972. His heart is vested in seeing and revealing the glory and
            beauty of the Dhama thus he founded Dham Seva, a non-profit entity
            designed to identify, excavate, glorify and protect the various holy
            places within the greater New Vrindaban.
          </p>
        </article>
      </section>

      <div className={styles.excerptWrapper}>
        <section className="page-section">
          <header>
            <h2 className={styles.excerptTitle}>
              Selected excerpts from Srila Prabhupada’s letters <br />
              on New Vrindaban
            </h2>
            <figure className={styles.center}>
              <Image
                src={srilaImg}
                alt="Prabhuapda"
                placeholder="blur"
              />
            </figure>
          </header>
          <section className={styles.quotes}>
            <Quote
              color="yellow"
              quote="Now I am hopeful that our New Vrindavan will be an exact replica of Vrindaban in India."
              author="Srila Prabhupada letter, 18 February 1970"
            />

            <Quote
              color="green"
              quote="Convert West Virginia into New Vrindaban. I understand the spot is very beautiful and the hills may be renamed as New Govardhana. And if there are lakes, they can be renamed as Syamakunda and Radhakunda."
              author="Srila Prabhupada letter, 14 June 1968"
            />

            <Quote
              color="pink"
              quote="Therefore, I may once more request you to try your best to construct New Vrindabn as an exact duplicate of Vrindavana and that will give me the highest pleasure."
              author="Srila Prabhupada letter, 18 February 1970"
            />
          </section>
          <section className={styles.letters}>
            <Letter
              title="Letter to Hayagriva"
              date="18 November 1968"
              body="New
            Vrindaban should be taken up very seriously because actually I want
            to develop a replica of Old Vrindaban. I have got ambition to
            construct there 7 temples as follows: 1. Radha Madan Mohan, 2. Radha
            Govinda, 3. Radha Gopinatha, 4. Radha Damodara, 5. Radha Raman, 6.
            Radha Gokulananda, 7. Radha Syamasundara. The whole modern city of
            Vrindaban was established originally with these temples, started by
            different Gosvamis. And later on, many kings and princes started
            their own temples and thus the present Vrindaban is now full with
            small and big 5000 temples. We have to make such scheme in our New
            Vrindaban, gradually expanding to an area of one mile long and one
            mile broad."
            />

            <Letter
              title="Letter to Hayagriva, Los Angeles"
              date="18 November 1968"
              body="
              Vrindaban conception is a transcendental village, without any botheration of the modern industrial atmosphere. My idea of developing New Vrindaban is to create an atmosphere of spiritual life where people in bona fide order of social division, namely, Brahmacaris, Grhasthas, Vanaprastha, Sannyasis, or specifically Brahmacaris and Sannyasis, and Vanaprasthas, will live there independently, completely depending on agricultural produce and milk from the cows.
              The life should be simplified without being hampered by laboring day and night for economic development, without any spiritual understanding. The New Vrindaban idea is that persons who live there will accept the bare necessities of life to maintain the body and soul together and the major part of time should be engaged in development of Krishna Consciousness. The whole Vedic principle is to develop Krishna Consciousness, without creating much botheration for the program of sense gratification.
              "
            />

            <Letter
              title="Letter to Kirtanananda, Los Angeles "
              date="18 February 1970"
              body="
              Now I am hopeful that our New Vrindaban will be an exact replica of Vrindavan in India. I think it was ordained by Krishna that you went there, took your Sannyasa order of life in the presence of Rupa Goswami and Jiva Goswami, and now you have got the opportunity to execute their will…
              
              Therefore, I may once more request you to try your best to construct New Vrindaban an exact duplicate of Vrindaban, and that will give me the highest pleasure…

              Now I am hopeful that our New Vrindaban will be an exact replica of Vrindaban in India…
              "
            />

            <Letter
              title="Letter to Kirtanananda, Vrindaban "
              date="27 October 1972"
              body="
              Now we are in Radha-Damodara Temple staying, and the program of speaking morning and evening in the courtyard is going on very nicely. It is the same peaceful atmosphere as your New Vrindaban, and just as in New Vrindaban everyone present is devotee. Actually, everywhere wherever Krishna is being glorified, that is Vrindavan…
              
              Regarding your questions, try to finish the temples in New Vrindaban as quickly as possible using whatever materials you have. Later on they can be improved more and more and eventually they will be the first-className opulent temples in the world.
              "
            />

            <Letter
              title="Letter to Hladini, Calcutta "
              date="28 January 1973"
              body="
              This modern civilization is always artificial. You are actually learning in New Vrindaban the self-sufficient mode of living, simple living, high thinking, that is our policy, and as long as Krishna remains in the center of all these activities, then you are actually in Vrindavan.
              "
            />

            <Letter
              title="Letter to Kirtanananda, Bhaktivedanta Manor "
              date="27 July 1973"
              body="
              Yes! Go on acquiring the surrounding lands and in this way we will establish a local self governing village and show all the world a practical example of spiritual life as Krishna Himself exhibited in Vrindavan. Agriculture and protecting the cow, this is the main business of the residents of Vrindavan, and above all simply loving Krishna. The cows, the trees, the cowherd men and Gopis, their chief engagement was loving Krishna, and in New Vrindaban we want to create this atmosphere and thereby show the whole world how practical and sublime our movement is.
              "
            />
          </section>
        </section>
      </div>
    </div>
  );
};

export default Dham;
