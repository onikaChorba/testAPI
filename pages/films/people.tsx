import Head from "next/head";
import styles from '../../components/FilmsBlock/FilmsBlock.module.scss'
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
        <title>People</title>
      </Head>
       <div className={styles.links}>
        {navigation.map(({id, title, path})=>(<Link key={id} href={path} legacyBehavior ><ul className={styles.link}><a>{title}</a></ul></Link>))}
      </div>
      <h1>People</h1>
    </div>
  );
}