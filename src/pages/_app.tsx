import type { AppProps } from "next/app";
import AppReduxProvider from "providers/AppReduxProvider";
import type { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppReduxProvider>
      <Component {...pageProps} />
    </AppReduxProvider>
  );
};

export default App;
