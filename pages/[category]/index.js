import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import category from "../../data/categories.json";

import leaf from "../../public/static/leaf.png";
import wave3 from "../../public/static/wave3.svg";

import Writing from "../../components/writing-detail";
import writings from "../../styles/page-writing.module.css";

import { getAllPostIds, getCategoryPosts } from "../../lib/posts";

export default function Post({ categoryPosts }) {
  

  const router = useRouter();

  return (
    <main className={writings.writings}>
      <Head>
        <title>Category</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content='Category' />
        <meta name="twitter:title" content='Category' />
        <meta property="description" content='Category' />
        <meta property="og:description" content='Category' />
        <meta name="twitter:description" content='Category' />
        <meta property="og:image" content='xxx' />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image" content='xxx' />
        <meta name="twitter:image" content='xxx' />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="" />
      </Head>

      {category.map((header) => {
        if (router.query.category == header.slug) {
          return (
            <header>
              <figure className={writings.banner}>
                <Image
                  src={header.image}
                  alt={header.title || "title"}
                  layout="fill"
                />
              </figure>
              <div
                className={writings.wrapper}
                style={{ backgroundColor: `${header.bgColor}` }}
              >
                <div className={writings.category}>
                  <h1 className={writings.title}>{header.title}</h1>
                  <ul className={writings.list}>
                    {categoryPosts.map((posts) => {
                      const { category, id, title } = posts;
                      return (
                        <li>
                          <Image src={leaf} />
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
              </div>
              <figure className={writings.wave3}>
                <Image src={wave3} layout='fill' objectFit='cover'/>
              </figure>
            </header>
          );
        }
      })}

      
    </main>
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

  return {
    props: {
      categoryPosts
    },
  };
}
