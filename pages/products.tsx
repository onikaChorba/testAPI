import Head from "next/head";
import ProductsBlock from "../components/ProductsBlock/ProductsBlock";
import { productsType } from "@component/tipes";
import { GetStaticProps } from "next";


type productsInfoProps = {
  products: productsType[]
}

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
};

export default function Products({products}:productsInfoProps) {

  return (
    <div className="wrapper">
      <Head>
        <title>Products</title>
      </Head>
      <ProductsBlock  products={products}/>
    </div>
  );
}
