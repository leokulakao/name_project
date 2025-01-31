import { createSelector } from 'reselect';

import * as fromAuth from './auth.reducer';
import { AppState } from '../../state.interface';

export const getState = (State: AppState) => State.auth;

export const getToken = createSelector(getState, fromAuth.getToken);
export const getTokenLoading = createSelector(getState, fromAuth.getTokenLoading);
export const getTokenLoaded = createSelector(getState, fromAuth.getTokenLoaded);
export const getTokenFail = createSelector(getState, fromAuth.getTokenFail);

export const getRegister = createSelector(getState, fromAuth.getRegister);
export const getRegisterLoading = createSelector(getState, fromAuth.getRegisterLoading);
export const getRegisterLoaded = createSelector(getState, fromAuth.getRegisterLoaded);
export const getRegisterFail = createSelector(getState, fromAuth.getRegisterFail);

export const getUserData = createSelector(getState, fromAuth.getUserData);
export const getUserDataLoading = createSelector(getState, fromAuth.getUserDataLoading);
export const getUserDataLoaded = createSelector(getState, fromAuth.getUserDataLoaded);
export const getUserDataFail = createSelector(getState, fromAuth.getUserDataFail);

export const getAllUsers = createSelector(getState, fromAuth.getAllUsers);
export const getAllUsersLoading = createSelector(getState, fromAuth.getAllUsersLoading);
export const getAllUsersLoaded = createSelector(getState, fromAuth.getAllUsersLoaded);
export const getAllUsersFail = createSelector(getState, fromAuth.getAllUsersFail);

export const editUser = createSelector(getState, fromAuth.editUser);
export const editUserLoading = createSelector(getState, fromAuth.editUserLoading);
export const editUserLoaded = createSelector(getState, fromAuth.editUserLoaded);
export const editUserFail = createSelector(getState, fromAuth.editUserFail);

export const deleteUser = createSelector(getState, fromAuth.deleteUser);
export const deleteUserLoading = createSelector(getState, fromAuth.deleteUserLoading);
export const deleteUserLoaded = createSelector(getState, fromAuth.deleteUserLoaded);
export const deleteUserFail = createSelector(getState, fromAuth.deleteUserFail);
