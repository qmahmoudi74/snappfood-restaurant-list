import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import {
  GetVendorsListResponse,
  getVendorsListThunk
} from "services/rest/restaurant";

interface RestaurantStates {
  page: number;
  vendors: {
    data?: GetVendorsListResponse;
    isLoading: boolean;
    isError: boolean;
    error?: unknown;
  };
}

const initialState: RestaurantStates = {
  page: 1,
  vendors: {
    isLoading: false,
    isError: false
  }
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getVendorsListThunk.pending, (state) => {
      state.vendors.isLoading = true;
    });
    builder.addCase(getVendorsListThunk.fulfilled, (state, action) => {
      state.vendors.data = action.payload;
      state.vendors.isLoading = false;
    });
    builder.addCase(getVendorsListThunk.rejected, (state, action) => {
      state.vendors.isError = true;
      state.vendors.isLoading = false;
      state.vendors.error = action.error.message;
    });
  }
});

export const useGetVendorsList = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.restaurant.page);

  useEffect(() => {
    dispatch(
      getVendorsListThunk({
        page,
        page_size: 10,
        lat: 35.771513,
        long: 51.374377
      })
    );
  }, [dispatch, page]);

  return useAppSelector((state) => state.restaurant.vendors);
};

export const { setPage } = restaurantSlice.actions;
export default restaurantSlice.reducer;
