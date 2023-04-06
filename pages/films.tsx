import Head from "next/head";
import styles from '../components/FilmsBlock/FilmsBlock.module.scss'
import { FilmsBlock } from "@component/components/FilmsBlock/FilmsBlock";
import { filmsType } from "@component/tipes";
import { GetStaticProps } from "next";
import Link from "next/link";

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
      const navigation = [
    {id: 1, title: "All films", path: '/films'}, {id: 2, title: "People", path: '/films/people'}
  ]
  return (
    <div className="wrapper films">
      <Head>
        <title>Films</title>
      </Head>
      <div className="link">
        {navigation.map(({id, title, path})=>(<Link key={id} href={path} legacyBehavior ><ul className="links link"><a>{title}</a></ul></Link>))}
      </div>
      <div className={styles.filmsBlock}>
      {
        films.map((film, number)=>(
          <FilmsBlock film={film} key={number.toString()}/>
        ))
      }
      </div>
    </div>
  );
}