import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the app state domain
 */

const selectAppDomain = state => state.app || initialState;
const selectRouter = state => state.router;
/**
 * Other specific selectors
 */

/**
 * Default selector used by App
 */

export const makeSelectApp = () =>
  createSelector(
    selectAppDomain,
    substate => substate,
  );

export const makeSelectError = () =>
  createSelector(
    selectAppDomain,
    appState => appState && appState.error,
  );

export const makeSelectDrawerIsOpen = () =>
  createSelector(
    selectAppDomain,
    appState => appState && appState.drawerIsOpen,
  );
export const makeSelectDrawerCategorySideOpen = () =>
  createSelector(
    selectAppDomain,
    appState => appState && appState.categorysidepen,
  );

export const makeSelectNotification = () =>
  createSelector(
    selectAppDomain,
    appState => appState.notification,
  );

export const makeSelectTags = () =>
  createSelector(
    selectAppDomain,
    appState => appState.tags,
  );

export const makeSelectAddTag = () =>
  createSelector(
    selectAppDomain,
    appState => appState.addTag.data,
  );

export const makeSelectCategories = () =>
  createSelector(
    selectAppDomain,
    appState => appState.categories,
  );

export const makeSelectAddCategory = () =>
  createSelector(
    selectAppDomain,
    appState => appState.addCategory.data,
  );

export const makeSelectUserMe = () =>
  createSelector(
    selectAppDomain,
    appState => appState.userme.data,
  );

export const makeSelectEditCategory = () =>
  createSelector(
    selectAppDomain,
    appState => appState.editCategory,
  );

export const makeSelectUnregisterUser = () =>
  createSelector(
    selectAppDomain,
    appState => appState.unregisterUser,
  );

export const makeSelectUsers = () =>
  createSelector(
    selectAppDomain,
    appState => appState.users.data,
  );

export const makeSelectDeleteUser = () =>
  createSelector(
    selectAppDomain,
    appState => appState.deleteUser,
  );

export const makeSelectUpdateUser = () =>
  createSelector(
    selectAppDomain,
    appState => appState.updateUser,
  );

export const makeSelectResetUserPassword = () =>
  createSelector(
    selectAppDomain,
    appState => appState.resetUserPassword,
  );

export const makeSelectMenuIsOpen = () =>
  createSelector(
    selectAppDomain,
    appState => appState && appState.menusideopen,
  );

export const makeSelectLogout = () =>
  createSelector(
    selectAppDomain,
    appState => appState.logoutUser,
  );

export const makeSelectCartItem = () =>
  createSelector(
    selectAppDomain,
    appState => appState.carts.data,
  );
export const makeSelectCart = () =>
  createSelector(
    selectAppDomain,
    appState => appState.carts.data,
  );
export const makeSelectIsAdmin = () =>
  createSelector(
    selectAppDomain,
    appState => appState.auth.isadmin,
  );
