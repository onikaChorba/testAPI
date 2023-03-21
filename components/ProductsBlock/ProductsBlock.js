import styles from "./ProductsBlock.module.scss";

export default function ProductsBlock({ products }) {
  return (
    <div>
      <h1>All products</h1>
      <ul className={styles.productsBlock}>
        {products &&
          products.map(({ id, title, price, description, category, image }) => (
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
