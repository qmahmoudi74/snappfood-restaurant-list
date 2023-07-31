import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import env from "helpers/env";

export const instance = axios.create({ baseURL: env.BASE_URL });

const client = async <ResponseType, DataType = unknown>(
  config: AxiosRequestConfig
) => {
  const { data } = await instance.request<
    ResponseType,
    AxiosResponse<ResponseType>,
    DataType
  >(config);

  return data;
};

export default client;
