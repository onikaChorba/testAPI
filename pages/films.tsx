import Head from "next/head";
import { FilmsBlock } from "@component/components/FilmsBlock/FilmsBlock";
import { filmsType } from "@component/tipes";
import { GetStaticProps } from "next";

type filmsInfoProps = {
  films: filmsType[]
}

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch("https://api.tvmaze.com/search/shows?q=girls");
  const data = await response.json();
  return {
    props: {
      films: data,
    },
  };
};

export default function Films({ films }: filmsInfoProps) {
  return (
    <div className="wrapper">
      <Head>
        <title>Films</title>
      </Head>
      <FilmsBlock films={films} />
    </div>
  );
}