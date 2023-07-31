import VendorItem from "containers/vendors/views/VendorItem";
import styles from "containers/vendors/views/VendorsList/VendorsList.module.scss";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect, useMemo, useState, type FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GetVendorsListResponse } from "services/rest/restaurant";
import { setPage, useGetVendorsList } from "store/slices/restauratSlice";

type VendorsList = GetVendorsListResponse["data"]["finalResult"];

const VendorsList: FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.restaurant.page);
  const [vendorsList, setVendorsList] = useState<VendorsList>([]);
  const { data } = useGetVendorsList();

  useEffect(() => {
    if (!data) return;
    setVendorsList((prev) => prev.concat(data.data.finalResult));
  }, [data]);

  const next = () => dispatch(setPage(page + 1));

  const hasMore = useMemo(
    () => (data?.data.count ?? Infinity) / 10 >= page,
    [data?.data.count, page]
  );

  return (
    <InfiniteScroll
      dataLength={vendorsList.length}
      hasMore={hasMore}
      next={next}
      loader={null}
      className={styles["infinite-scroll"]}
    >
      <ul className={styles.list}>
        {vendorsList
          .filter(({ type, data }) => {
            return type === "VENDOR" && typeof data !== "string";
          })
          .map(({ data }, index) => {
            if (typeof data === "string") return null;
            return <VendorItem key={data.id} {...data} index={index} />;
          })}
      </ul>
    </InfiniteScroll>
  );
};

export default VendorsList;
