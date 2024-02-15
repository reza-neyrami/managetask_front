import { call, put, takeLatest } from "redux-saga/effects";
import { loginApi } from "./../../api/auth";
import {
  loginUserSuccessAction,
  loginUserFailAction,
  notificationShowAction,
  getUsersSuccessAction,
  getUsersFailAction,
} from "./actions.jsx";

import { getAllUserApi } from "./../../api/auth.jsx";
import { setAuth } from "./../../utils/auth";
import {
  LOGIN_USER,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_ERROR,
  GET_USERS,
} from "./constants";

// Individual exports for testing

export function* getUsers({ params }) {
  try {
    const response = yield call(getAllUserApi, params);
    yield put(getUsersSuccessAction(response.data));
  } catch (error) {
    yield put(getUsersFailAction(error));
  }
}

// export function* updateUsers({ params }) {
//   try {
//     const response = yield call(updateUserApi, params);
//     yield put(updateUserSuccessAction(response.data));

//     yield put(
//       notificationShowAction(
//         "به روز رسانی اطلاعات کاربری با موفقیت انجام شد",
//         NOTIFICATION_TYPE_SUCCESS
//       )
//     );
//   } catch (error) {
//     yield put(
//       notificationShowAction(
//         "به روز رسانی اطلاعات کاربری با خطا مواجه شد",
//         NOTIFICATION_TYPE_ERROR
//       )
//     );
//     yield put(updateUserFailAction(error));
//   }
// }

// export function* resetUserPassword({ params }) {
//   try {
//     const response = yield call(resetUserPasswordApi, params);
//     yield put(resetUserPasswordSuccessAction(response.data));

//     yield put(
//       notificationShowAction(
//         "بازنشانی گذر واژه با موفقیت انجام شد",
//         NOTIFICATION_TYPE_SUCCESS
//       )
//     );
//   } catch (error) {
//     yield put(
//       notificationShowAction(
//         "بازنشانی گذر واژه با مشکل مواجه شد",
//         NOTIFICATION_TYPE_ERROR
//       )
//     );
//     yield put(resetUserPasswordFailAction(error));
//   }
// }

// export function* unregisterUser() {
//   try {
//     yield call(unregisterUserApi);
//     setAuth();
//     window.location.href = '/login';
//     yield put(logoutSuccessAction());
//   } catch (error) {
//     yield put(unregisterUserFailAction(error));
//   }
// }

// export function* deleteUser({ params }) {
//   try {
//     yield call(deleteUserApi, params);
//     yield put(deleteUserSuccessAction(true));
//     yield put(
//       notificationShowAction(
//         "حذف کاربر با موفقیت انجام شد",
//         NOTIFICATION_TYPE_SUCCESS
//       )
//     );
//   } catch (error) {
//     yield put(deleteUserFailAction(error));
//     yield put(
//       notificationShowAction(
//         "حذف کاربر با خطا مواجه شد",
//         NOTIFICATION_TYPE_ERROR
//       )
//     );
//   }
// }

// export function* getUserMe() {
//   try {
//     const response = yield call(getUserMeApi);
//     yield put(getUserMeSuccessAction(response.data));
//   } catch (error) {
//     yield put(getUserMeFailAction(error));
//   }
// }

// export function* getUserAdmin() {
//   try {
//     const response = yield call(getUserAdminApi);
//     yield put(getUserAdminSuccessAction(response.data));
//   } catch (error) {
//     yield put(getUserAdminFailAction(error));
//   }
// }

// export function* logout() {
//   try {
//     yield call(logoutApi);
//     setAuth();
//     window.location.href = '/login';
//     yield put(logoutSuccessAction());
//   } catch (error) {
//     yield put(logoutFailAction(error));
//   }
// }

// function* getTags() {
//   try {
//     const response = yield call(getTagsApi);
//     yield put(getTagsSuccessAction(response.data));
//   } catch (error) {
//     yield put(getTagsFailAction(error));
//   }
// }

// function* addTag({ tag }) {
//   if (tag) {
//     try {
//       const response = yield call(addTagApi, tag);
//       yield put(addTagSuccessAction(response.data));
//       const { data } = yield select(makeSelectTags());
//       data.push({ ...response.data, isNew: true });
//       yield put(getTagsSuccessAction(data));
//     } catch (error) {
//       yield put(addTagFailAction(error));
//     }
//   }
// }

// function* addCategories({ category }) {
//   if (category) {
//     try {
//       const response = yield call(addCategoriesApi, category);
//       yield put(addCategorySuccessAction(response.data));
//       const { data } = yield select(makeSelectCategories());
//       data.push({ ...response.data, isNew: true });
//       yield put(getCategoriesSuccessAction(data));
//     } catch (error) {
//       yield put(addCategoryFailAction(error));
//     }
//   }
// }

// function* getCategories() {
//   try {
//     const response = yield call(getCategoriesApi);
//     yield put(getCategoriesSuccessAction(response.data));
//   } catch (error) {
//     yield put(getCategoriesFailAction(error));
//   }
// }

export function* loginUser(params) {
  try {
    const response = yield call(loginApi, params);
    yield put(loginUserSuccessAction(true));
    setAuth(response.data);
    window.location.href = "/dashboard/page";
    yield put(
      notificationShowAction("با موفقیت لاگین شدید", NOTIFICATION_TYPE_SUCCESS)
    );
  } catch (error) {
    yield put(loginUserFailAction(error));
    yield put(
      notificationShowAction("لاگین با خطا مواجه شد", NOTIFICATION_TYPE_ERROR)
    );
  }
}

export default function* app() {
  yield takeLatest(LOGIN_USER, loginUser);
  yield takeLatest(GET_USERS, getUsers);

  // yield takeLatest(GET_CATEGORIES, getCategories);
  // yield takeLatest(ADD_CATEGORY, addCategories);
  // // yield takeLatest(EDIT_CATEGORY, editCategory);

  // yield takeLatest(GET_USERS, getUsers);
  // yield takeLatest(UPDATE_USER, updateUsers);
  // yield takeLatest(RESET_USER_PASSWORD, resetUserPassword);
  // yield takeLatest(DELETE_USER, deleteUser);
  // yield takeLatest(UNREGISTER_USER, unregisterUser);
  // yield takeLatest(LOGOUT_ACTION, logout);
  // yield takeLatest(GET_USER_ME, getUserMe);
  // yield takeLatest(ISADMIN_USER, getUserAdmin);
}
