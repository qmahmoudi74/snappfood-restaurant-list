import type { FC, PropsWithChildren } from "react";
import styles from "layout/views/Main/Main.module.scss";

const Main: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.wrapper}>{children}</main>;
};

export default Main;
