import mySlice from "./../container/App/AppSlice/indexSlice.jsx";
import appReducer from "./../container/App/reducer.jsx";
import bannerSlice from "./../container/BannerSlice/bannerSlice.jsx";
import assinedSlices from "./../container/TaskPage/TaskSlice/index.jsx";
// import assigenSlice from "./../container/TaskPage/TaskSlice/index.jsx";

// import reducers here...
import assigenSlice from "./../container/TaskPage/TaskSlice/assigned";
import createTaskSlice from "./../container/TaskPage/CreateTask/createSlice";

const rootreducers = {
  app: appReducer,
  appSlice: mySlice,
  bannerSlice: bannerSlice,
  tasks: assinedSlices,
  assgnied: assigenSlice,
  createtask: createTaskSlice,
  // tasksAss: userTaskReducers.tasksReducer,
};

export default rootreducers;
