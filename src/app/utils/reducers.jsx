
import mySlice from "./../container/App/AppSlice/indexSlice.jsx";
import appReducer from "./../container/App/reducer.jsx";
// import reducers here...

const rootreducers = {
  app: appReducer,
  appSlice: mySlice
};

export default rootreducers;
