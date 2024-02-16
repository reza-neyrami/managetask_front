import request from '../utils/request';


export function getAllReportApi() {
    const config = {
      method: "get",
      url: `/files`,
    };
  
    return request(config);
  }