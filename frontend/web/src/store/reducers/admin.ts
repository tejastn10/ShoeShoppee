import { createReducer } from "@reduxjs/toolkit";
import {
  getUserListRequest,
  getUserListSuccess,
  getUserListError,
  userDeleteRequest,
  userDeleteSuccess,
  userDeleteError,
  updatePrivilegeRequest,
  updatePrivilegeSuccess,
  updatePrivilegeError,
  clearAdminState,
} from "../actions/actions";
import { AdminState } from "../@types";

const initialState: AdminState = {
  isLoading: false,
  errors: {
    results: null,
  },
  messages: {
    message: null,
  },
  users: null,
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(getUserListRequest, (state, _action) => {
      state.isLoading = true;
      state.errors.results = null;
      state.users = null;
    })
    .addCase(getUserListSuccess, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    })
    .addCase(getUserListError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(userDeleteRequest, (state, _action) => {
      state.isLoading = true;
      state.messages.message = null;
    })
    .addCase(userDeleteSuccess, (state, action) => {
      state.isLoading = false;
      state.messages = action.payload;
    })
    .addCase(userDeleteError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(updatePrivilegeRequest, (state, _action) => {
      state.isLoading = true;
      state.messages.message = null;
    })
    .addCase(updatePrivilegeSuccess, (state, action) => {
      state.isLoading = false;
      state.messages = action.payload;
    })
    .addCase(updatePrivilegeError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    })
    .addCase(clearAdminState, (state, _action) => {
      state.isLoading = false;
      state.errors.results = null;
      state.messages.message = null;
      state.users = null;
    })
    .addDefaultCase((state, _action) => {
      state.isLoading = false;
    });
});

export { initialState as AdminInitialState, reducer as AdminStateReducer };
