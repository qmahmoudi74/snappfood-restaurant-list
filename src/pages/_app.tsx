import Layout from "layout";
import type { AppProps } from "next/app";
import "normalize.css/normalize.css";
import AppFontProvider from "providers/AppFontProvider";
import AppReduxProvider from "providers/AppReduxProvider";
import type { FC } from "react";
import "styles/global.css";
import "styles/main.scss";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppFontProvider>
      <AppReduxProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppReduxProvider>
    </AppFontProvider>
  );
};

export default App;
