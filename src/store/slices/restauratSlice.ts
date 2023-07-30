import { createSlice } from "@reduxjs/toolkit";

export interface RestaurantStates {
  vendors: {
    list: any[];
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: RestaurantStates = {
  vendors: {
    list: [],
    isLoading: false,
    isError: false
  }
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {}
});
