import axios from "axios";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const baseURL = publicRuntimeConfig.API_HOST;

const server = axios.create({
  baseURL,
});

const serverWithJwt = axios.create({
  baseURL,
});

serverWithJwt.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export { server, serverWithJwt };
