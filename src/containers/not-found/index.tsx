import type { NextPage } from "next";
import styles from "containers/not-found/NotFoundPage.module.scss";

const message = "متأسفانه صفحه مورد نظر شما وجود ندارد!";

const NotFoundPage: NextPage = () => {
  return <h1 className={styles.wrapper}>{message}</h1>;
};

export default NotFoundPage;
