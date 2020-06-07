import React from "react";
import App from "next/app";
// Store
import { makeStoreWrapper } from "@redux";

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

WrappedApp.getInitialProps = async({ Component, ctx }) => ({
  pageProps: {
    ...(Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}),
    appProp: ctx.pathname
  },
});

export default makeStoreWrapper.withRedux(WrappedApp);
