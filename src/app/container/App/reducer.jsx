

import { produce } from "immer";
import { getAuth } from "./../../utils/auth";
import {
  ADD_CATEGORY,
  ADD_CATEGORY_FAIL,
  ADD_CATEGORY_SUCCESS,
  ADD_TAG,
  ADD_TAG_FAIL,
  ADD_TAG_SUCCESS,
  ADD_TO_CART,
  CATEGORY_SID_OPEN,
  DELETE_CART,
  DELETE_CART_ALL,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  DRAWER_OPEN,
  EDIT_CATEGORY,
  EDIT_CATEGORY_FAIL,
  EDIT_CATEGORY_SUCCESS,
  ERROR_CLEAR,
  ERROR_HAPPEN,
  GET_CATEGORIES,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_SUCCESS,
  GET_TAGS,
  GET_TAGS_FAIL,
  GET_TAGS_SUCCESS,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  GET_USER_ME,
  GET_USER_ME_FAIL,
  GET_USER_ME_SUCCESS,
  ISADMIN_USER,
  ISADMIN_USER_FAIL,
  ISADMIN_USER_SUCCESS,
  LOGOUT_ACTION,
  LOGOUT_ACTION_FAIL,
  LOGOUT_ACTION_SUCCESS,
  MENUSIDE_OPEN,
  NOTIFICATION_HIDE,
  NOTIFICATION_SHOW,
  REMOVE_CART,
  RESET_USER_PASSWORD,
  RESET_USER_PASSWORD_FAIL,
  RESET_USER_PASSWORD_SUCCESS,
  UNREGISTER_USER,
  UNREGISTER_USER_FAIL,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from "./constants";

const authData = getAuth();
export const initialState = {
  notification: {
    title: null,
    type: null,
  },
  bannerUpload: {
    file: null,
    error: null,
    data: null,
  },
  tags: {
    data: [],
    error: null,
  },
  addTag: {
    tag: null,
    data: null,
    error: null,
  },
  categories: {
    data: [],
    error: null,
  },
  addCategory: {
    category: null,
    data: null,
    error: null,
  },
  editCategory: {
    id: null,
    title: null,
    data: null,
    error: null,
  },
  unregisterUser: {
    loading: false,
    data: null,
    error: null,
  },
  userme: {
    data: [],
    error: null,
  },
  users: {
    params: null,
    data: [],
    error: null,
  },
  login: {
    params: null,
    data: [],
    error: null,
  },
  updateUser: {
    params: null,
    data: [],
    error: null,
  },
  resetUserPassword: {
    params: null,
    data: null,
    error: null,
  },
  deleteUser: {
    params: null,
    data: [],
    error: null,
  },
  logoutUser: {
    loading: false,
    error: null,
  },
  carts: {
    items: null,
    error: null,
    data: [],
  },

  auth: {
    error: null,
    isadmin: null,
  },
  menusideopen: false,
  categorysidepen: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // #region global
      case ERROR_HAPPEN:
        draft.error = action.error;
        break;
      case ERROR_CLEAR:
        draft.error = null;
        break;
      case DRAWER_OPEN:
        draft.drawerIsOpen =
          action.show === undefined ? !draft.drawerIsOpen : action.show;
        break;
      case MENUSIDE_OPEN:
        draft.menusideopen =
          action.show === undefined ? !draft.menusideopen : action.show;
        break;
      case CATEGORY_SID_OPEN:
        draft.categorysidepen =
          action.show === undefined ? !draft.categorysidepen : action.show;
        break;
      // #endregion global
      // #region NOTIFICATION
      case NOTIFICATION_SHOW:
        draft.notification.title = action.data.title;
        draft.notification.type = action.data.type;
        break;
      case NOTIFICATION_HIDE:
        draft.notification = initialState.notification;
        break;
      // #endregion NOTIFICATION
      // #region GET_TAGS
      case GET_TAGS:
        draft.tags.error = null;
        break;
      case GET_TAGS_SUCCESS:
        draft.tags.error = null;
        draft.tags.data = Object.values(action.data);
        break;
      case GET_TAGS_FAIL:
        draft.tags.error = action.error;
        break;
      // #endregion GET_TAGS
      // #region ADD_TAG
      case ADD_TAG:
        draft.addTag.error = null;
        draft.addTag.data = null;
        draft.addTag.tag = action.tag;
        break;
      case ADD_TAG_SUCCESS:
        draft.addTag.tag = null;
        draft.addTag.error = null;
        draft.addTag.data = action.data;
        break;
      case ADD_TAG_FAIL:
        draft.addTag.data = [];
        draft.addTag.error = action.error;
        break;
      // #endregion ADD_TAG
      // #region GET_CATEGORIES
      case GET_CATEGORIES:
        draft.categories.error = null;
        break;
      case GET_CATEGORIES_SUCCESS:
        draft.categories.data = Object.values(action.data);
        break;
      case GET_CATEGORIES_FAIL:
        draft.categories.error = action.error;
        break;
      // #endregion GET_CATEGORIES
      // #region ADD_CATEGORY
      case ADD_CATEGORY:
        draft.addCategory.error = null;
        draft.addCategory.data = null;
        draft.addCategory.category = action.category;
        break;
      case ADD_CATEGORY_SUCCESS:
        draft.addCategory.category = null;
        draft.addCategory.error = null;
        draft.addCategory.data = action.data;
        break;
      case ADD_CATEGORY_FAIL:
        draft.addCategory.data = [];
        draft.addCategory.error = action.error;
        break;
      // #endregion ADD_CATEGORY
      // #region EDIT_CATEGORY
      case EDIT_CATEGORY:
        draft.editCategory.error = null;
        draft.editCategory.data = null;
        draft.editCategory.id = action.id;
        draft.editCategory.title = action.title;
        break;
      case EDIT_CATEGORY_SUCCESS:
        draft.editCategory.id = null;
        draft.editCategory.title = null;
        draft.editCategory.error = null;
        draft.editCategory.data = action.data;

        draft.myCategories.data = state.myCategories.data.map((item) =>
          item.id === state.editCategory.id
            ? { ...item, title: state.editCategory.title }
            : item
        );

        draft.categories.data = state.categories.data.map((item) =>
          item.id === state.editCategory.id
            ? { ...item, title: state.editCategory.title }
            : item
        );
        break;
      case EDIT_CATEGORY_FAIL:
        draft.editCategory.id = null;
        draft.editCategory.title = null;
        draft.editCategory.data = null;
        draft.editCategory.error = action.error;
        break;
      // #endregion EDIT_CATEGORY
      // #region GET_USER_ME
      case GET_USER_ME:
        draft.userme.error = null;
        break;
      case GET_USER_ME_SUCCESS:
        draft.userme.data = action.data;
        break;
      case GET_USER_ME_FAIL:
        draft.userme.error = action.error;
        break;
      // #endregion GET_USER_ME
      // #region UNREGISTER_USER
      case UNREGISTER_USER:
        draft.unregisterUser.loading = true;
        draft.unregisterUser.data = null;
        draft.unregisterUser.error = null;
        break;
      case UNREGISTER_USER_FAIL:
        draft.unregisterUser.loading = false;
        draft.unregisterUser.error = action.error;
        break;
      // #endregion UNREGISTER_USER
      // #region GET_USERS
      case GET_USERS:
        draft.users.params = action.params;
        draft.users.error = null;
        draft.users.data = null;
        break;
      case GET_USERS_SUCCESS:
        draft.users.params = null;
        draft.users.error = null;
        draft.users.data = action.data;
        break;
      case GET_USERS_FAIL:
        draft.users.params = null;
        draft.users.data = null;
        draft.users.error = action.error;
        break;
      case LOGIN_USER:
        draft.login.params = action.params;
        draft.login.error = null;
        draft.login.data = null;
        break;
      case LOGIN_USER_SUCCESS:
        draft.login.params = null;
        draft.login.error = null;
        draft.login.data = action.data;
        break;
      case LOGIN_USER_FAIL:
        draft.login.params = null;
        draft.login.data = null;
        draft.login.error = action.error;
        break;
      // #endregion GET_USERS_ADMIN
      case ISADMIN_USER:
        draft.auth.error = null;
        break;
      case ISADMIN_USER_SUCCESS:
        draft.auth.isadmin = action.isadmin;
        break;
      case ISADMIN_USER_FAIL:
        draft.auth.isadmin = null;
        draft.auth.error = action.error;
        break;
      // #endregion GET_USERS_ADMIN
      // #region UPDATE_USER
      case UPDATE_USER:
        draft.updateUser.params = action.params;
        draft.updateUser.error = null;
        draft.updateUser.data = null;
        break;
      case UPDATE_USER_SUCCESS:
        draft.updateUser.params = null;
        draft.updateUser.error = null;
        draft.updateUser.data = action.data;
        if (state.users.data && state.users.data.data) {
          draft.users.data.data = state.users.data.data.map((item) =>
            item.id === state.updateUser.params.id
              ? { ...item, ...action.data }
              : item
          );
        }
        break;
      case UPDATE_USER_FAIL:
        draft.updateUser.params = null;
        draft.updateUser.data = null;
        draft.updateUser.error = action.error;
        break;
      // #endregion UPDATE_USER
      // #region RESET_USER_PASSWORD
      case RESET_USER_PASSWORD:
        draft.resetUserPassword.params = action.params;
        draft.resetUserPassword.error = null;
        draft.resetUserPassword.data = null;
        break;
      case RESET_USER_PASSWORD_SUCCESS:
        draft.resetUserPassword.params = null;
        draft.resetUserPassword.error = null;
        draft.resetUserPassword.data = action.data;
        break;
      case RESET_USER_PASSWORD_FAIL:
        draft.resetUserPassword.params = null;
        draft.resetUserPassword.data = null;
        draft.resetUserPassword.error = action.error;
        break;
      // #endregion RESET_USER_PASSWORD
      // #region DELETE_USER
      case DELETE_USER:
        draft.deleteUser.params = action.params;
        draft.deleteUser.error = null;
        draft.deleteUser.data = null;
        break;
      case DELETE_USER_SUCCESS:
        draft.deleteUser.params = null;
        draft.deleteUser.error = null;
        draft.deleteUser.data = action.data;
        if (state.users.data && state.users.data.data) {
          draft.users.data.data = state.users.data.data.filter(
            (item) => item.id !== state.deleteUser.params.id
          );
        }
        break;
      case DELETE_USER_FAIL:
        draft.deleteUser.params = null;
        draft.deleteUser.data = null;
        draft.deleteUser.error = action.error;
        break;
      // #endregion DELETE_USER
      // #region LOGOUT_ACTION
      case LOGOUT_ACTION:
        draft.logoutUser.loading = true;
        draft.logoutUser.error = null;
        break;
      case LOGOUT_ACTION_SUCCESS:
        Object.keys(initialState).forEach((key) => {
          draft[key] = initialState[key];
        });
        draft.userme.data = null;
        break;
      case LOGOUT_ACTION_FAIL:
        draft.logoutUser.loading = false;
        draft.logoutUser.error = action.error;
        break;
      // #endregion LOGOUT_ACTION

      case ADD_TO_CART:
        draft.carts.items = null;
        const ProductExite = Object.values(state.carts.data).find(
          (item) => item.id === action.items.id
        );
        draft.carts.data = action.items;
        if (ProductExite) {
          draft.carts.data = Object.values(state.carts.data).map((item) =>
            item.id === action.items.id
              ? { ...ProductExite, quantity: ProductExite.quantity + 1 }
              : item
          );
        } else {
          draft.carts.data = [
            ...state.carts.data,
            { ...action.items, quantity: 1 },
          ];
        }
        draft.carts.error = null;
        break;
      case REMOVE_CART:
        draft.carts.items = null;
        const ProductExites = Object.values(state.carts.data).find(
          (item) => item.id === action.items
        );
        const newItems = Object.values(state.carts.data).filter(
          (item) => item.id !== action.items
        );
        draft.carts.data = action.items;
        if (ProductExites.quantity === 1) {
          draft.carts.data = newItems;
        } else {
          draft.carts.data = Object.values(state.carts.data).map((items) =>
            items.id === action.items
              ? { ...ProductExites, quantity: ProductExites.quantity - 1 }
              : items
          );
        }
        break;
      case DELETE_CART:
        draft.carts.items = null;
        const PExites = Object.values(state.carts.data).find(
          (item) => item.id === action.items
        );
        const nItems = Object.values(state.carts.data).filter(
          (item) => item.id !== action.items
        );
        draft.carts.data = action.items;
        if (PExites.quantity) {
          draft.carts.data = nItems;
        }
        break;
      case DELETE_CART_ALL:
        draft.carts.items = null;
        draft.carts.data = [];
        break;
    }
  });

export default appReducer;
