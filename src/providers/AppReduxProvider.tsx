import type { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store from "store";

const AppReduxProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppReduxProvider;
