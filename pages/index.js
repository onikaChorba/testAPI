import Head from "next/head";
import Quotes from "../components/Quotes/Quotes";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div className="wrapper home">
        <Quotes />
      </div>
    </div>
  );
}
