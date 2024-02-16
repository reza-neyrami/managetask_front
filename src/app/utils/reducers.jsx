import mySlice from "./../container/App/AppSlice/indexSlice.jsx";
import appReducer from "./../container/App/reducer.jsx";
import bannerSlice from "./../container/BannerSlice/bannerSlice.jsx";
import assinedSlices from "./../container/TaskPage/TaskSlice/index.jsx";
// import assigenSlice from "./../container/TaskPage/TaskSlice/index.jsx";

// import reducers here...
import assigenSlice from "./../container/TaskPage/TaskSlice/assigned";
import createTaskSlice from "./../container/TaskPage/CreateTask/createSlice";
import userTasksSlice from "./../container/TaskPage/GetTaskUser/index";
import tasksStatuseSlice from "./../container/TaskPage/TaskEditor/UpdateStatuseSlice";
import reportSlice from "./../container/TaskPage/ReportTable/FetchReport/index.jsx";
import getReportByTaskSlice from "./../container/TaskPage/ReportTable/getReportByTask/index";
import reportsAllSlice from "../container/ManageReportsPage/getSlice";

const rootreducers = {
  app: appReducer,
  appSlice: mySlice,
  bannerSlice: bannerSlice,
  tasks: assinedSlices,
  assgnied: assigenSlice,
  createtask: createTaskSlice,
  getusertask: userTasksSlice,
  updateStatus: tasksStatuseSlice,
  tasksReport: getReportByTaskSlice,
  report: reportSlice,
  allReports: reportsAllSlice,

  // tasksAss: userTaskReducers.tasksReducer,
};

export default rootreducers;
