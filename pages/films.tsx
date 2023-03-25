import Head from "next/head";
import { FilmsBlock } from "@component/components/FilmsBlock/FilmsBlock";

import { GetStaticProps } from "next";


export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch("https://api.tvmaze.com/search/shows?q=girls");
  const data = await response.json();
  return {
    props: {
      films: data,
    },
  };
};

export default function Products({ films }:any) {
  return (
    <div className="wrapper">
      <Head>
        <title>Films</title>
      </Head>
      <FilmsBlock films={films} />
    </div>
  );
}