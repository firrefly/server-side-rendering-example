import React from "react";
import App from "next/app";
// Layouts
import { PlanLayout } from "@layouts";
// Store
import { makeStoreWrapper } from "@redux";

const WrappedApp = ({ Component, pageProps }) => {
  return (
    <PlanLayout>
      <Component {...pageProps} />
    </PlanLayout>
  );
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
