import axios, { AxiosRequestConfig } from "axios";
import env from "helpers/env";

export const instance = axios.create({ baseURL: env.BASE_URL });

const client = async <ResponseType>(config: AxiosRequestConfig) => {
  const { data } = await instance.request<ResponseType>(config);
  return data;
};

export default client;
