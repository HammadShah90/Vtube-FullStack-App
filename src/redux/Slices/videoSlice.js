import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: null,
  isLoading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "Video",
  initialState,
  reducers: {
    videoPending: (state) => {
      state.isLoading = true;
    },
    videoSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.currentVideo = payload;
    },
    videoFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

const { actions, reducer } = videoSlice;

export const {
  videoPending,
  videoSuccess,
  videoFailed,
} = actions;

export default reducer;
