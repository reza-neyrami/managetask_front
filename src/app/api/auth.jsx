/* eslint-disable camelcase */

import request from "../utils/request";

export function loginApi({ params }) {
  console.log(params);
  const config = {
    method: "post",
    url: "auth/login",
    data: params,
  };

  return request(config);
}

export function registerUserApi(params) {
  const config = {
    method: "post",
    url: "/auth/registeration",
    data: params,
  };

  return request(config);
}

export function verifyCodeApi({ username, code }) {
  const config = {
    method: "post",
    url: "/auth/verify",
    data: { username, code },
  };

  return request(config);
}

export function getUserAdminApi() {
  const config = {
    method: "get",
    url: "/auth/isAdmin",
  };

  return request(config);
}

export function googleRegisterApi({
  name,
  email,
  password,
  access_token,
  expires_at,
  googleId,
}) {
  const config = {
    method: "post",
    url: "/auth/google/register",
    data: { name, email, password, access_token, expires_at, googleId },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return request(config);
}
