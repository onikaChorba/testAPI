import Head from "next/head";
import QuotesBlock from "../QuotesBlock/QuotesBlock";
import React, { useState, useEffect } from "react";
import styles from "../QuotesBlock/QuotesBlock.module.scss";

interface QuotesType {
  text: string;
  author: string;
}

export default function Quotes() {

  const [quote, setQuote] = useState<QuotesType>({ text: "", author: "" });
  const [copied, setCopied] = useState(false);

  const getNewQuote = ():void => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      });
  };

  function addToFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favoriteQuotes") ?? "[]");
    favorites.push(quote);
    localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));
  }

  function handleAddToFavorites() {
    addToFavorites();
    alert("Цитату додано до списку улюблених!");
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(`${quote.text} - ${quote.author}`);
    setCopied(true);
  }

  const handleClickShare = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.text}`);
  };

  useEffect(() => {
    setCopied(false);
  }, [quote]);


  return (
    <div className="wrapper quote">
      <div className={styles.quoteBlock}>
        <Head>
          <title>Quotes</title>
        </Head>
        <h1>Random Quote</h1>
        {quote && <QuotesBlock text={quote.text} author={quote.author} />}
        <div style={{display: "flex", justifyContent: 'space-between', width: '80%'}}>
          <div>
          <button  className={styles.quoteButton} onClick={handleAddToFavorites}><img src="/star.png" width={25}/> </button>
          <button  className={styles.quoteButton} onClick={copyToClipboard}><img src={copied ? '/check.png':"/data-transfer.png" } width={25}/></button>
          <button  className={styles.quoteButton} onClick={handleClickShare}><img src="/share.png" width={25}/></button>
          </div>
          <button onClick={getNewQuote} className={styles.quoteButton}>
          New Quote
        </button>
        </div>
      </div>
    </div>
  );
}
