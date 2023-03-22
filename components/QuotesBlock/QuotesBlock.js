import styles from "./QuotesBlock.module.scss";

export default function QuotesBlock({ text, author }) {
  return (
    <div className={styles.quoteBlock}>
      <p className={styles.quoteText}>{text}</p>
      <p className={styles.quoteAutor}>- {author || "Unknown"}</p>
    </div>
  );
}
