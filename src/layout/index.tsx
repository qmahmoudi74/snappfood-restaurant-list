import Main from "layout/views/Main";
import type { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Layout;
