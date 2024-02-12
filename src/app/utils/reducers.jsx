import mySlice from "./../container/App/AppSlice/indexSlice.jsx";
import appReducer from "./../container/App/reducer.jsx";
import bannerSlice from "./../container/BannerSlice/bannerSlice.jsx";
import usersSlice from "./../container/TaskPage/TaskSlice/index.jsx";

// import reducers here...

const rootreducers = {
  app: appReducer,
  appSlice: mySlice,
  bannerSlice: bannerSlice,
  usersskile: usersSlice,
  // tasksAss: userTaskReducers.tasksReducer,
};

export default rootreducers;
