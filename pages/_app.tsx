import React from "react";
import "../styles/vendor.scss";
import "../styles/app.scss";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
// import { store } from "../store/store";

import Layout from "../components/layout";
import { ModalsContextProvider } from "../context/ModalsContext";
import { wrapper } from "../redux/store";
import { fetchRubrics } from "../redux/rubrics/asyncAction";

function MyApp({ Component, ...rest }: AppProps) {
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
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }) => {
      await store.dispatch(fetchRubrics());
      const pageProps = Component.getInitialProps
        ? await Component.getInitialProps({ ...ctx, store })
        : {};
      return { pageProps };
    }
);

export default MyApp;
