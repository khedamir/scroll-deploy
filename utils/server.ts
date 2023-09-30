import axios from "axios";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const server = axios.create({
  baseURL: publicRuntimeConfig.API_HOST,
});

export { server };
