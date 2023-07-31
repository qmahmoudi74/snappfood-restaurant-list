import { createSlice } from "@reduxjs/toolkit";

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

export default restaurantSlice.reducer;
