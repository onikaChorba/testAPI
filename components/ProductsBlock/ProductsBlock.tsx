import { FC} from "react";

import styles from "./ProductsBlock.module.scss";
import { useState, useEffect } from "react";
import { productsType } from "@component/tipes";

type productsInfoProps = {
  products: productsType[]
}

const ProductsBlock:FC<productsInfoProps> = ({ products })=> {

  const [card, setCards] = useState(products);
  const [currentCard, setCurrentCard] = useState("All");

  const handleBtns = (e:any) => {
    let word = e.target.value;
    setCurrentCard(word);
  };

  useEffect(() => {
    if (currentCard === "All") {
      setCards(products);
    } else {
      const filtered = products.filter((card) => {
        return (
          card.category === currentCard || card.category.includes(currentCard)
        );
      });
      setCards(filtered);
    }
  }, [currentCard]);

  return (
    <div>
      <button
        className={styles.productButton}
        onClick={handleBtns}
        type="button"
        value="All"
      >
        All products
      </button>
      <button
        className={styles.productButton}
        onClick={handleBtns}
        type="button"
        value="men's clothing"
      >
        Men's clothing
      </button>
      <button
        className={styles.productButton}
        onClick={handleBtns}
        type="button"
        value="women's clothing"
      >
        Women's clothing
      </button>
      <button
        className={styles.productButton}
        onClick={handleBtns}
        type="button"
        value="jewelery"
      >
        Qewelery
      </button>
      <button
        className={styles.productButton}
        onClick={handleBtns}
        type="button"
        value="electronics"
      >
        Electronics
      </button>
      <ul className={styles.productsBlock}>
        {card &&
          card.map(({id, image, price, title, category,description}:productsType ) => (
            <ol key={id} className={styles.product}>
              <div className={styles.productImgBlock}>
                <img
                  src={image}
                  className={styles.productImg}
                  alt="Picture of the author"
                />
              </div>
              <h3 className={styles.productName}> {title}</h3>
              <p className={styles.productText}>
                <span>Price:</span> {price}
              </p>
              <p className={styles.productText}>
                <span>Category:</span> {category}
              </p>
              <p className={styles.productText}>
                <span>More info:</span> {description}
              </p>
            </ol>
          ))}
      </ul>
    </div>
  );
}
export default ProductsBlock;