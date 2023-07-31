import type { FC, PropsWithChildren } from "react";
import localFont from "next/font/local";

const vazirmatn = localFont({
  src: "./Vazirmatn[wght].woff2",
  display: "swap",
  preload: true
});

const AppFontProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <style jsx={true} global={true}>
        {`
          :root {
            font-family: (${vazirmatn.style.fontFamily}), sans-serif;
          }
        `}
      </style>
      {children}
    </>
  );
};

export default AppFontProvider;
