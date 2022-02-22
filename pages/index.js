import { Fragment } from "react";
import Head from "next/head";

import Writings from "../components/writing-list";
import Hero from "../components/home-hero";
import Welcome from "../components/home-welcome";
import Founder from "../components/home-founder";
import PhotoBook from "../components/home-photo-book";

import { getAllPosts } from "../lib/posts";


export default function Home({allPosts}) {
  
  return (
    <Fragment>
      <Head>
        <title>Varsana Swami</title>
        <meta name="description" content="Stewardships to the Earth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero /> 
      <Welcome />
      <PhotoBook />
      <Writings items={allPosts} />
      <Founder />
    </Fragment>
  );
}


export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts: allPosts,
    },
  };
}