import client from "services/client";

// GET VENDORS LIST
const getVendorsListURL = "/restaurant/vendors-list";

export const getVendorsList = async (params: GetVendorsListParams) => {
  const data = await client<GetVendorsListResponse>({
    method: "GET",
    url: getVendorsListURL,
    params
  });

  return data;
};
