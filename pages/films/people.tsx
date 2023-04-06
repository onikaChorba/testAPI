import Head from "next/head";

import styles from '../../components/FilmsBlock/FilmsBlock.module.scss'
import { PeopleBlock } from "@component/components/PeopleBlock/PeopleBlock";
import { peopleType } from "@component/tipes";
import { GetStaticProps } from "next";
import Link from "next/link";

type peopleInfoProps = {
  people: peopleType[]
}

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch("https://api.tvmaze.com/people");
  const data = await response.json();
  return {
    props: {
      people: data,
    },
  };
};

export default function Films({people}:peopleInfoProps) {
    const navigation = [
    {id: 1, title: "All films", path: '/films'}, {id: 2, title: "People", path: '/films/people'}
  ]

  return (
    <div className="wrapper films">
      <Head>
        <title>People</title>
      </Head>
       <div>
        {navigation.map(({id, title, path})=>(<Link key={id} href={path} legacyBehavior ><ul className="links link "><a>{title}</a></ul></Link>))}
      </div>
      <div className={styles.filmsBlock}>
        {people.map((people:any, number:Number)=>(
          <PeopleBlock people={people} key={number.toString()}/>
        ))
      }</div>
    </div>
  );
}