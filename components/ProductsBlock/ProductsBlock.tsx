import styles from "./ProductsBlock.module.scss";
import { useState, useEffect, useId } from "react";
import { productsType } from "@component/tipes";
import { FC} from "react";
import Select from "react-select";

type productsInfoProps = {
  products: Array <productsType>
}

const ProductsBlock:FC<productsInfoProps> = ({ products })=> {

  const filterButton = [
   { value: "All", text: " All products"},
   { value: "men's clothing", text: "Men's clothing"},
   { value: "women's clothing", text: "Women's clothing"},
   { value: "jewelery", text: "Qewelery"},
   { value: "electronics", text: "Electronics"},
  ]
  const options = [
    { value: "All", label: "All categories" },
    { value: "high", label: "From expensive" },
    { value: "low", label: "From cheap ones" },
  ];
  const customStyles = {
    option: (provided:any, state:any) => ({
      ...provided,
      borderBottom: "1px dotted #cccccc",
      color: state.isSelected ? "white" : "grey",
      backgroundColor: state.isSelected ? "grey" : "white",
    }),
    control: (provided:any) => ({
      ...provided,
      width: "100%",
      height: "44px",
      border: "1px solid grey",
      borderRadius: "10px",
      "&:hover": { borderColor: "black" },
      boxShadow: "none",
    }),
    singleValue: (defaultStyles:any) => ({
      ...defaultStyles,
      color: "#979797",
    }),
  };
  const [cards, setCards] = useState(products);
  const [currentCard, setCurrentCard] = useState("All");
  const [selectCategory, setSelectCategory] = useState("All");

  const handleBtns = (e:any) => {
    let word = e.target.value;
    setCurrentCard(word);
  };

  const handleCategoryChange = (event:any)=> {
    setSelectCategory(event.value);
  }

  function getFilteredList() {
    if (currentCard === "All") {
      setCards(products);
    } else if (selectCategory === "high") {
     const newFiltered = [...products].sort((a, b) => {
      return a.price - b.price});
      setCards(newFiltered);
    } else if (selectCategory === "low") {
     const newFiltered = [...products].sort((a, b) => {
      return b.price - a.price});
      setCards(newFiltered);
    } else {
      const filtered = products.filter((card) => {
        return (
          card.category === currentCard || card.category.includes(currentCard)
        );
      });
      setCards(filtered);
    } 
  }
  useEffect(() => {
    getFilteredList();
  }, [currentCard, selectCategory]
  );
  return (
    <div>
      <div className={styles.productsFilterBlock}>
        <div className={styles.productsFilterButton}>
      {
        filterButton.map((el, index)=>(
        <button
        key={index}
        className={styles.productButton}
        onClick={handleBtns}
        type="button"
        value={el.value}
      >
        {el.text}
      </button>
        ))
      }</div>
      <div className={styles.productsFilterSelect}>
          <Select
          instanceId={useId()}
            options={options}
            className={styles.selectFilter}
            value={options.filter(function (option) {
              return option.value === selectCategory;
            })}
            onChange={handleCategoryChange}
            styles={customStyles}
          />
        </div>
        </div>
      <ul className={styles.productsBlock}>
        {cards &&
          cards.map(({id, image, price, title, category,description}:productsType ) => (
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