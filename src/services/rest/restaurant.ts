import client from "services/client";

export interface GetVendorsListParams {
  page: number;
  page_size: number;
  lat: number;
  long: number;
}

export interface GetVendorsListResponse {}

const getVendorsListURL = "/restaurant/vendors-list";

export const getVendorsList = async (params: GetVendorsListParams) => {
  const data = await client<GetVendorsListResponse>({
    params,
    url: getVendorsListURL
  });

  return data;
};
