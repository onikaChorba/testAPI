import Head from "next/head";
import QuotesBlock from "../components/QuotesBlock/QuotesBlock";
import React, { useState, useEffect } from "react";
import styles from "../components/QuotesBlock/QuotesBlock.module.scss";
export default function Quotes() {
  const [quote, setQuote] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const getNewQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      });
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
  };
  const getRandomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color;
  };
  useEffect(() => {
    getNewQuote();
    getRandomColor();
  }, []);

  return (
    <div className="wrapper" style={{ backgroundColor }}>
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
