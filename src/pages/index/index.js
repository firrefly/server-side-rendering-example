// Modules
import React, { memo } from "react";
import Head from "next/head";
import { getServerSideProps } from "./get-server-side-props";
// Components
import { Header } from "@components/header";
// Styles
import css from "@assets/styles/styles.less";

const HomeComponent = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <Header />
      </main>
    </div>
  )
}

const Home = memo(HomeComponent);

export default Home;
export { getServerSideProps };
