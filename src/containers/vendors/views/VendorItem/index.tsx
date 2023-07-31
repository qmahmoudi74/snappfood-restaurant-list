import Image from "next/image";
import { useMemo, type FC } from "react";
import { GetVendorsListResponse } from "services/rest/restaurant";
import styles from "containers/vendors/views/VendorItem/VendorItem.module.scss";
import Star from "local-assets/icons/Star";

type Props = GetVendorsListResponse["data"]["finalResult"][number]["data"];

const placeholderImage = "/assets/images/placeholder.png";

const VendorItem: FC<Props & { index: number }> = (data) => {
  const { rate, delivery, deliveryFee, voteCount } = useMemo(() => {
    if (typeof data === "string") return {};
    return {
      rate: data.rate.toLocaleString("fa-IR").replace("٫", "."),
      voteCount: data.voteCount.toLocaleString("fa-IR"),
      delivery: data.isZFExpress ? "ارسال اکسپرس" : "پیک فروشنده",
      deliveryFee: data.deliveryFee.toLocaleString("fa-IR")
    };
  }, [data]);

  if (typeof data === "string") return null;
  return (
    <li className={styles.card}>
      <div className={styles.card__cover}>
        <Image
          src={data.backgroundImage || placeholderImage}
          alt={data.title}
          sizes="(max-width: 30em) 100vw, (max-width: 64em) 50vw, 33vw"
          priority={data.index === 0}
          loading={data.index === 0 ? "eager" : "lazy"}
          fill={true}
        />

        <div className={styles["card__cover--logo"]}>
          <Image
            src={data.logo || placeholderImage}
            alt={data.title}
            sizes="(max-width: 30em) 100vw, (max-width: 64em) 50vw, 33vw"
            fill={true}
          />
        </div>
      </div>

      <div className={styles.card__body}>
        <header className={styles["card__body--header"]}>
          <h3 className={styles["card__body--title"]}>{data.title}</h3>
          <p className={styles["card__body--vote-count"]}>({voteCount})</p>

          <div className={styles["card__body--rate"]}>
            {rate}

            <div className={styles["card__body--rate-star"]}>
              <Star />
            </div>
          </div>
        </header>

        <div className={styles["card__body--description"]}>
          {data.description.replaceAll(",", " ")}
        </div>

        <div className={styles["card__body--delivery"]}>
          <span className={styles["card__body--delivery-status"]}>
            {delivery}
          </span>

          <span>{deliveryFee} تومان</span>
        </div>
      </div>
    </li>
  );
};

export default VendorItem;
