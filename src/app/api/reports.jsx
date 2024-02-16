import request from '../utils/request';


export function getAllReportApi() {
    const config = {
      method: "get",
      url: `/files`,
    };
  
    return request(config);
  }
export function getAllTasksApi() {
    const config = {
      method: "get",
      url: `/tasks`,
    };
  
    return request(config);
  }
export function getAllManageFilesApi() {
    const config = {
      method: "get",
      url: `/files/list`,
    };
  
    return request(config);
  }