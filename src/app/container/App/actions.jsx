/*
 *
 * App actions
 *
 */

import {
  ADD_CATEGORY,
  ADD_CATEGORY_FAIL,
  ADD_CATEGORY_SUCCESS,
  ADD_TAG,
  ADD_TAG_FAIL,
  ADD_TAG_SUCCESS,
  DEFAULT_ACTION,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  DRAWER_OPEN,
  CATEGORY_SID_OPEN,
  EDIT_CATEGORY,
  EDIT_CATEGORY_FAIL,
  EDIT_CATEGORY_SUCCESS,
  ERROR_CLEAR,
  ERROR_HAPPEN,
  GET_CATEGORIES,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_SUCCESS,
  GET_TASK,
  GET_TASK_FAIL,
  GET_TASK_SUCCESS,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  GET_USER_ME,
  GET_USER_ME_FAIL,
  GET_USER_ME_SUCCESS,
  LOGOUT_ACTION,
  LOGOUT_ACTION_FAIL,
  LOGOUT_ACTION_SUCCESS,
  MENUSIDE_OPEN,
  NOTIFICATION_HIDE,
  NOTIFICATION_SHOW,
  RESET_USER_PASSWORD,
  RESET_USER_PASSWORD_FAIL,
  RESET_USER_PASSWORD_SUCCESS,
  UNREGISTER_USER,
  UNREGISTER_USER_FAIL,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  ADD_TO_CART,
  REMOVE_CART,
  ISADMIN_USER,
  ISADMIN_USER_SUCCESS,
  ISADMIN_USER_FAIL,
  DELETE_CART,
  DELETE_CART_ALL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

// #region global
export function errorHappenAction(error) {
  return {
    type: ERROR_HAPPEN,
    error,
  };
}
export function errorClearAction() {
  return {
    type: ERROR_CLEAR,
  };
}
export function drawerToggleAction(show) {
  return {
    type: DRAWER_OPEN,
    show,
  };
}
export function drawerMenuActions(show) {
  return {
    type: MENUSIDE_OPEN,
    show,
  };
}
export function drawerCategorySideActions(show) {
  return {
    type: CATEGORY_SID_OPEN,
    show,
  };
}
// #endregion global

// #region notification
export function notificationShowAction(title, type) {
  return {
    type: NOTIFICATION_SHOW,
    data: { title, type },
  };
}

export function notificationHideAction() {
  return {
    type: NOTIFICATION_HIDE,
  };
}
// #endregion notification

// #region getTags
export function getTaskAction() {
  return {
    type: GET_TASK,
  };
}
export function getTaskSuccessAction(data) {
  return {
    type: GET_TASK_SUCCESS,
    data,
  };
}
export function getTaskFailAction(error) {
  return {
    type: GET_TASK_FAIL,
    error,
  };
}
// #endregion getTags

// #region addTag
export function addTagAction(tag) {
  return {
    type: ADD_TAG,
    tag,
  };
}
export function addTagSuccessAction(data) {
  return {
    type: ADD_TAG_SUCCESS,
    data,
  };
}
export function addTagFailAction(error) {
  return {
    type: ADD_TAG_FAIL,
    error,
  };
}
// #endregion addTag

// #region getCategories
export function getCategoriesAction() {
  return {
    type: GET_CATEGORIES,
  };
}
export function getCategoriesSuccessAction(data) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    data,
  };
}
export function getCategoriesFailAction(error) {
  return {
    type: GET_CATEGORIES_FAIL,
    error,
  };
}
// #endregion getCategories

// #region addCategory
export function addCategoryAction(category) {
  return {
    type: ADD_CATEGORY,
    category,
  };
}
export function addCategorySuccessAction(data) {
  return {
    type: ADD_CATEGORY_SUCCESS,
    data,
  };
}
export function addCategoryFailAction(error) {
  return {
    type: ADD_CATEGORY_FAIL,
    error,
  };
}
// #endregion addCategory

// #region editCategory
export function editCategoryAction(id, title) {
  return {
    type: EDIT_CATEGORY,
    id,
    title,
  };
}
export function editCategorySuccessAction(data) {
  return {
    type: EDIT_CATEGORY_SUCCESS,
    data,
  };
}
export function editCategoryFailAction(error) {
  return {
    type: EDIT_CATEGORY_FAIL,
    error,
  };
}
// #endregion editCategory

// #region unregisterUser
export function unregisterUserAction() {
  return {
    type: UNREGISTER_USER,
  };
}
export function unregisterUserFailAction(error) {
  return {
    type: UNREGISTER_USER_FAIL,
    error,
  };
}
// #endregion unregisterUser

// #region getUsers
export function getUsersAction(params) {
  return {
    type: GET_USERS,
    params,
  };
}
export function getUsersSuccessAction(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}
export function getUsersFailAction(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}
// #endregion getUsers

// #region updateUser
export function updateUserAction(params) {
  return {
    type: UPDATE_USER,
    params,
  };
}
export function updateUserSuccessAction(data) {
  return {
    type: UPDATE_USER_SUCCESS,
    data,
  };
}
export function updateUserFailAction(error) {
  return {
    type: UPDATE_USER_FAIL,
    error,
  };
}
// #endregion updateUser

// #region getUserMe
export function getUserMeAction() {
  return {
    type: GET_USER_ME,
  };
}
export function getUserMeSuccessAction(data) {
  return {
    type: GET_USER_ME_SUCCESS,
    data,
  };
}
export function getUserMeFailAction(error) {
  return {
    type: GET_USER_ME_FAIL,
    error,
  };
}
// #endregion getUserMe

// #region getUserADMIN
export function getUserAdminAction() {
  return {
    type: ISADMIN_USER,
  };
}
export function getUserAdminSuccessAction(isadmin) {
  return {
    type: ISADMIN_USER_SUCCESS,
    isadmin,
  };
}
export function getUserAdminFailAction(error) {
  return {
    type: ISADMIN_USER_FAIL,
    error,
  };
}
// #endregion getUserMe

// #region resetUserPassword
export function resetUserPasswordAction(params) {
  return {
    type: RESET_USER_PASSWORD,
    params,
  };
}
export function resetUserPasswordSuccessAction(data) {
  return {
    type: RESET_USER_PASSWORD_SUCCESS,
    data,
  };
}
export function resetUserPasswordFailAction(error) {
  return {
    type: RESET_USER_PASSWORD_FAIL,
    error,
  };
}
// #endregion updateUser

// #region deleteUser
export function deleteUserAction(params) {
  return {
    type: DELETE_USER,
    params,
  };
}
export function deleteUserSuccessAction(data) {
  return {
    type: DELETE_USER_SUCCESS,
    data,
  };
}
export function deleteUserFailAction(error) {
  return {
    type: DELETE_USER_FAIL,
    error,
  };
}

// #endregion deleteUser

// #region logout
export function logoutAction() {
  return {
    type: LOGOUT_ACTION,
  };
}
export function logoutSuccessAction() {
  return {
    type: LOGOUT_ACTION_SUCCESS,
  };
}
export function logoutFailAction(error) {
  return {
    type: LOGOUT_ACTION_FAIL,
    error,
  };
}
// #endregion logout
export function addToCart(items) {
  return {
    type: ADD_TO_CART,
    items,
  };
}

export function removeFromCart(items) {
  return {
    type: REMOVE_CART,
    items,
  };
}
export function deleteFromCart(items) {
  return {
    type: DELETE_CART,
    items,
  };
}
export function deleteFromAllCart(items) {
  return {
    type: DELETE_CART_ALL,
    items,
  };
}


export function loginUserAction(params) {
  return {
    type: LOGIN_USER,
    params,
  };
}
export function loginUserSuccessAction(data) {
  return {
    type: LOGIN_USER_SUCCESS,
    data,
  };
}
export function loginUserFailAction(error) {
  return {
    type: LOGIN_USER_FAIL,
    error,
  };
}