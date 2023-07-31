import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "services/client";
import sample from "services/rest/restaurant-sample.json";

// GET VENDORS LIST
export type GetVendorsListResponse = typeof sample;
const getVendorsListURL = "/restaurant/vendors-list";

export const getVendorsList = async (params: GetVendorsListParams) => {
  const data = await client<GetVendorsListResponse>({
    method: "GET",
    url: getVendorsListURL,
    params
  });

  return data;
};

export const getVendorsListThunk = createAsyncThunk(
  "restaurant/getVendorsList",
  getVendorsList
);
