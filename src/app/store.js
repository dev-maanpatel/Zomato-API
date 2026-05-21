import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
} from "redux-persist";

import authReducer from "../features/auth/authSlice";

import foodReducer from "../features/food/foodSlice";

import orderReducer from "../features/order/orderSlice";

const customStorage = {
  getItem: (key) => {
    return Promise.resolve(
      localStorage.getItem(key)
    );
  },

  setItem: (
    key,
    value
  ) => {
    localStorage.setItem(
      key,
      value
    );

    return Promise.resolve();
  },

  removeItem: (key) => {
    localStorage.removeItem(
      key
    );

    return Promise.resolve();
  },
};

const appReducer =
  combineReducers({
    auth: authReducer,

    foods: foodReducer,

    orders: orderReducer,
  });

const persistConfig = {
  key: "root",

  storage: customStorage,

  whitelist: ["auth"],
};

const persistedReducer =
  persistReducer(
    persistConfig,
    appReducer
  );

export const store =
  configureStore({
    reducer:
      persistedReducer,

    middleware: (
      getDefaultMiddleware
    ) =>
      getDefaultMiddleware({
        serializableCheck:
          false,
      }),
  });

export const persistor =
  persistStore(store);