import Head from "next/head";
import QuotesBlock from "../QuotesBlock/QuotesBlock";
import React from "react";
import styles from "../QuotesBlock/QuotesBlock.module.scss";


export default function Quotes() {
  return (
    <div>
      <div className={styles.quoteBlock}>
        <Head>
          <title>Quotes</title>
        </Head>
        <h1>Random Quote</h1>
        <QuotesBlock/>
      </div>
    </div>
  );
}
