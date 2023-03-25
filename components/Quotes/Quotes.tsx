import Head from "next/head";
import QuotesBlock from "../QuotesBlock/QuotesBlock";
import React, { useState, useEffect } from "react";
import styles from "../QuotesBlock/QuotesBlock.module.scss";

interface QuotesType {
  text: string;
  author: string;
}

export default function Quotes() {

  const [quote, setQuote] = useState<QuotesType>();

  const getNewQuote = ():void => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      });
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div className="wrapper quote">
      <div className={styles.quoteBlock}>
        <Head>
          <title>Quotes</title>
        </Head>
        <h1>Random Quote</h1>
        {quote && <QuotesBlock text={quote.text} author={quote.author} />}
        <button onClick={getNewQuote} className={styles.quoteButton}>
          New Quote
        </button>
      </div>
    </div>
  );
}
