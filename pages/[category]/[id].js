import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import category from "../../data/categories.json";

import leaf from "../../public/static/leaf.png";
import wave3 from "../../public/static/wave3.svg";

import Writing from "../../components/writing-detail";
import writings from "../../styles/page.module.css";

import { getAllPostIds, getPostData, getCategoryPosts } from "../../lib/posts";

export default function Post({ postData, categoryPosts }) {
  const { title, cover } = postData;

  const router = useRouter();

  return (
    <div className="page-container">
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta property="description" content={title} />
        <meta property="og:description" content={title} />
        <meta name="twitter:description" content={title} />
        <meta property="og:image" content={cover} />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image" content={cover} />
        <meta name="twitter:image" content={cover} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="" />
      </Head>

      {category.map((header) => {
        if (router.query.category == header.slug) {
          return (
            <header>
              <figure className="banner">
                <Image
                  src={header.image}
                  alt={header.title || "title"}
                  layout="fill"
                  objectFit="cover"
                />
              </figure>
              <section style={{ backgroundColor: `${header.bgColor}` }}>
                <div className={writings.wCategory}>
                  <h2 className={writings.wTitle}>{header.title}</h2>
                  <ul className={writings.wList}>
                    {categoryPosts.map((posts) => {
                      const { category, id, title } = posts;
                      return (
                        <li key={id}>
                          <Image src={leaf} alt="leaf" />
                          <Link
                            href="/[category]/[id]"
                            as={`/${category}/${id}`}
                          >
                            {title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
              <figure className="wave3">
                <Image src={wave3} layout="fill" objectFit="cover" alt="wave" />
              </figure>
            </header>
          );
        }
      })}

      <section className="page-section">
        <Writing post={postData} />
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = getCategoryPosts();
  const categoryPosts = posts.filter(
    (post) => post.category === params.category
  );

  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
      categoryPosts,
    },
  };
}
