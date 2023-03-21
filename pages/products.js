import Head from "next/head";
import ProductsBlock from "../components/ProductsBlock/ProductsBlock";
export const getStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
};
export default function Products({ products }) {
  return (
    <div className="wrapper">
      <Head>
        <title>Products</title>
      </Head>
      <ProductsBlock products={products} />
    </div>
  );
}
