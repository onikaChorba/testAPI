import { setQuote } from './quotesSlice';

export const getNewQuote = (): any=> async (dispatch:any) => {
  const response = await fetch('https://type.fit/api/quotes');
  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * data.length);
  const { text, author } = data[randomIndex];
  dispatch(setQuote({ quote: text, author }));
};

export const addToFavorites = (quote: string, author: string) => {
  const favorites = JSON.parse(localStorage.getItem("favoriteQuotes") ?? "[]");
  favorites.push({ quote, author });
  localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));
}

export const copyToClipboard = (quote: string, author: string)=>{
  navigator.clipboard.writeText(`${quote} - ${author}`)
}

export const clickShare = (quote: string)=>{
   window.open(`https://twitter.com/intent/tweet?text=${quote}`);
}

