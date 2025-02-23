import React from "react";
import "../styles/vendor.scss";
import "../styles/app.scss";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../components/layout";
import { ModalsContextProvider } from "../context/ModalsContext";
import { wrapper } from "../redux/store";
import { FavoritesContextProvider } from "../context/FavoritesContext";
import { EditorContextProvider } from "../context/editorContext";

function MyApp({ Component, ...rest }: AppProps) {
  const { store } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ModalsContextProvider>
        <FavoritesContextProvider>
          <EditorContextProvider>
            <Layout>
              <Component {...rest.pageProps} />
            </Layout>
          </EditorContextProvider>
        </FavoritesContextProvider>
      </ModalsContextProvider>
    </Provider>
  );
}

// MyApp.getInitialProps = wrapper.getInitialAppProps(
//   () =>
//     async ({ Component, ctx }) => {
//       await ctx.store.dispatch(fetchRubrics());
//       const pageProps = Component.getInitialProps
//         ? await Component.getInitialProps({ ...ctx })
//         : {};
//       return { pageProps };
//     }
// );

export default MyApp;
