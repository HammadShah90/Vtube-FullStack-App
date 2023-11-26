import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: false,
  token: null,
};

export const userSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.currentUser = payload.user;
    },
    loginFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = true;
    },
    // signupPending: (state) => {
    //   state.isLoading = true;
    // },
    // signupSuccess: (state, { payload }) => {
    //   state.isLoading = false;
    // },
    // signupFailed: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = true;
    // },
    logout: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.error = false;
    },
  },
});

const { actions, reducer } = userSlice;

export const {
  loginPending,
  loginSuccess,
  loginFailed,
  // signupPending,
  // signupSuccess,
  // signupFailed,
  logout,
} = actions;

export default reducer;
