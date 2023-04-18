import React from "react";
import Head from "next/head";
import UsersBlock from "../components/UsersBlock/UsersBlock";

export default function Users() {
  return (
    <div className="wrapper">
      <Head>
        <title>Users Rwview</title>
      </Head>
      <h2> USERS REVIEW </h2>
      <UsersBlock />
    </div>
  );
}
