import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "react-router-redux"; // import routerMiddleware

import rootreducers from "./utils/reducers";
import rootSaga from "./utils/rootSaga";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootreducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      routerMiddleware(history), // use routerMiddleware
      sagaMiddleware
    ),
});

sagaMiddleware.run(rootSaga);

export default store;
