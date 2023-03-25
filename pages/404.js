import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Error() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className="wrapper home">
      <Head>
        <title>Error</title>
      </Head>
      <h1>404</h1>
      <h2>Something is going wrong...</h2>
      <Image src="/cat.png" width={70} height={70} />
    </div>
  );
}
