import React from "react";
import "../styles/vendor.scss";
import "../styles/app.scss";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Head from "next/head";
import Layout from "../components/layout";

type PageProps = AppProps;

const MyApp: React.FC<PageProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
