/* eslint-disable camelcase */

import request from "../utils/request";

export function loginApi({ params }) {
  const config = {
    method: "post",
    url: "auth/login",
    data: params,
  };

  return request(config);
}
export function reportsUserApi(params) {
  const config = {
    method: "post",
    url: "/files/reports/users",
    data: params,
  };

  return request(config);
}

export function uploadAllBannerApis(file) {
  const data = new FormData();
  data.append("banner", file);

  const config = {
    method: "post",
    url: `/files/upload`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data,
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

export function assignTask({ taskId, userIds }) {
  const config = {
    method: "post",
    url: `/tasks/assignuser/${taskId}`,
    data: { userIds },
  };

  return request(config);
}

export function deassignTask({ taskId, userIds }) {
  const config = {
    method: "delete",
    url: `/tasks/deassignuser/${taskId}`,
    data: { userIds },
  };

  return request(config);
}

export function createTask({ params }) {
  const config = {
    method: "post",
    url: `/tasks/create`,
    data: params,
  };

  return request(config);
}

export function userSkileApi(skile) {
  const config = {
    method: "get",
    url: `/users/skile/${skile}`,
  };

  return request(config);
}
export function updateStatus({ params }) {
  const { taskId, ...data } = params;
  const config = {
    method: "post",
    url: `/usertasks/status/${taskId}`,
    data,
  };

  return request(config);
}

//TODO CREATE AND UPDATE USERS MANAGE
export function createUser(params) {

  const config = {
    method: "post",
    url: `/users/upOrCreate`,
    data: params,
  };

  return request(config);
}

export function getReportByTaskIdApi(taskId) {
  const config = {
    method: "post",
    url: `/files/reports/users/${taskId}`,
  };

  return request(config);
}

export function getTaskUser() {
  const config = {
    method: "get",
    url: `/users/getTaskUser`,
  };

  return request(config);
}

export function getAllUserApi() {
  const config = {
    method: "get",
    url: `/users`,
  };

  return request(config);
}

export function getUserTask() {
  const config = {
    method: "get",
    url: `/tasks/user`,
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
