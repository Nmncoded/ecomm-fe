import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../features/auth/api.js";
import authSlice from "../features/auth/slice.js";
import privateSlice from '../features/private/slice.js';
import { api } from "../features/private";


export const store = configureStore({
  reducer: {
    [authApi.reducerPath] : authApi.reducer,
    [api.reducerPath] : api.reducer,

    authData : authSlice,
    privateData : privateSlice,

  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      api.middleware,

    ),
  devTools: true,
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
