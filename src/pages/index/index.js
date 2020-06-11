// Modules
import React, { memo } from "react";
import Head from "next/head";
import { getServerSideProps } from "@lib/server-request/home";
// Components
import { Header } from "@components/header";
import { Content } from "@components/content";
// Styles
import css from 'antd/dist/antd.less';
// import css from "@assets/styles/styles.less";

const HomeComponent = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <Header />
       <Content />
      </main>
    </div>
  )
}

const Home = memo(HomeComponent);

export default Home;
export { getServerSideProps };
