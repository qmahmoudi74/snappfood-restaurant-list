import type { FC, PropsWithChildren } from "react";
import styles from "layout/views/Main/Main.module.scss";
import Head from "next/head";

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Snapp! Food" />
        <title>اسنپ! فود | Snapp! Food</title>
      </Head>

      <main id="main" className={styles.wrapper}>
        {children}
      </main>
    </>
  );
};

export default Main;
