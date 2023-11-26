import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Reducers
import AuthReducer from "./Slices/authSlice.js";
import VideoReducer from "./Slices/videoSlice.js";
// import videoReducer from "./Slices/videoSlice.js";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Video: VideoReducer,
  // comment: commentReducer,
  // channel: channelReducer,
  // search: searchReducer,
  // notification: notificationReducer,
  // user: userReducer,
  // playlist: playlistReducer,
  // subscription: subscriptionReducer,
  // history: historyReducer,
  // favorite: favoriteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  },
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
