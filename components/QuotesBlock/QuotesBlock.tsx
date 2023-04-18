import styles from "./QuotesBlock.module.scss";
import { quoteType } from "@component/tipes";
import { useDispatch, useSelector } from 'react-redux';
import { getNewQuote } from '../../store/quoteActions';
import { addToFavorites } from '../../store/quoteActions';
import { copyToClipboard } from "../../store/quoteActions";
import { clickShare } from "../../store/quoteActions";

interface quotesType {
 quote: quoteType,
}

export default function QuotesBlock() {

  const dispatch = useDispatch();
  const { quote, author } = useSelector((state: quotesType) => state.quote);

  const handleNewQoute = () => {
    dispatch(getNewQuote());
  };

  const handleAddToFavorites =()=>{
    addToFavorites(quote, author);
    console.log("Цитату додано до списку улюблених!");
  }
  const handleCoppy = ()=>{
    copyToClipboard(quote, author);
    console.log("Цитату скопійовано!");
  }
  const handleShare = ()=>{
    clickShare (quote);
  }
  
  return (
    <div>
      <div className={styles.quoteBlock}>
        <p className={styles.quoteText}>{quote}</p>
        <p className={styles.quoteAutor}>- {author || "Unknown"}</p>
      </div>
      <div className={styles.quoteButtonBlock}>
        <div className={styles.quoteButtonBlock__share}>
          <button  className={styles.quoteButton} onClick={handleAddToFavorites}><img src="/star.png" width={25}/> </button>
          <button  className={styles.quoteButton} onClick={handleCoppy}><img src="/data-transfer.png" width={25}/></button>
          <button  className={styles.quoteButton} onClick={handleShare}><img src="/share.png" width={25}/></button>
        </div>
        <button onClick={handleNewQoute} className={styles.quoteButton}>
          New Quote
        </button>
      </div>
    </div>
  );
}
