// Modules
import React, { memo } from "react";
import Head from "next/head";
import { getServerSideProps } from "./get-server-side-props";
// Styles
import css from "@/styles.less";

const HomeComponent = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}

const HomeMemo = memo(HomeComponent);
const Home = HomeMemo;

export default Home;
export { getServerSideProps };
