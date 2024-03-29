/* eslint-disable import/no-unresolved */
import axios from "axios";

import { getAuth } from "./auth";
import { BASEURL } from "./../container/constanse/constance";

const request = axios.create({
  baseURL: `${BASEURL}/`,
  timeout: 1000000,
  headers: { 
    'Content-Type': 'application/json', 
    Accept: 'application/json', 

  },
});

request.interceptors.request.use(
  // eslint-disable-next-line func-names
  function (config) {
    const auth = getAuth();
    if (auth.access_token !== null && config.url !== "/login") {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `${auth.access_token}`;
    }

    return config;
  },
  // eslint-disable-next-line func-names
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
