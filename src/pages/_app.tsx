import Layout from "layout";
import type { AppProps } from "next/app";
import AppFontProvider from "providers/AppFontProvider";
import AppReduxProvider from "providers/AppReduxProvider";
import type { FC } from "react";

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
