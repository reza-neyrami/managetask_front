import request from "../utils/request";

export function uploadBannerApi(file) {
  const data = new FormData();
  data.append('banner', file);

  const config = {
    method: 'post',
    url: '/video/upload-banner',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  };

  return request(config);
}