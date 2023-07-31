import type { NextPage } from "next";
import styles from "containers/home/HomePage.module.scss";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/vendors">
        <button className={styles.cta}>
          رستوران‌ها <span>←</span>
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
