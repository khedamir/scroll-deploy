import React from "react";
import "../styles/vendor.scss";
import "../styles/app.scss";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
// import { store } from "../store/store";

import Layout from "../components/layout";
import { ModalsContextProvider } from "../context/ModalsContext";
import { wrapper } from "../redux/store";

type PageProps = AppProps;

const MyApp: React.FC<PageProps> = ({ Component, ...rest }) => {
  const { store } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ModalsContextProvider>
        <Layout>
          <Component {...rest.pageProps} />
        </Layout>
      </ModalsContextProvider>
    </Provider>
  );
};

export default MyApp;
