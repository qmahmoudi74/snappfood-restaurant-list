import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import restaurantReducer from "store/slices/restauratSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { restaurant: restaurantReducer },
  middleware: [sagaMiddleware]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
