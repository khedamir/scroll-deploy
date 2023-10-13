import axios from "axios";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const baseURL = publicRuntimeConfig.API_HOST;

const server = axios.create({
  baseURL,
});

export { server };
