import { all } from "redux-saga/effects";
import app from "./../container/App/saga";


export default function* rootSaga() {
  yield all([
    app(),
  ]);
}
