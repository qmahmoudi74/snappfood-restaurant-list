import { Html, Head, Main, NextScript } from "next/document";
import type { FC } from "react";

const Document: FC = () => {
  return (
    <Html lang="fa-IR" dir="rtl">
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
