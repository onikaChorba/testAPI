import styles from "./QuotesBlock.module.scss";
import { quoteType } from "@component/tipes";

export default function QuotesBlock({ text, author }:quoteType) {
  return (
    <div className={styles.quoteBlock}>
      <p className={styles.quoteText}>{text}</p>
      <p className={styles.quoteAutor}>- {author || "Unknown"}</p>
    </div>
  );
}
