// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie, storeCookie } from "../../utils/cookie-function";
const baseUrl  = import.meta.env.VITE_BASE_URL;
const apiVersion  = import.meta.env.VITE_SERVER_VERSION;

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = getCookie("accessToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithRefreshToken = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
        const refreshToken = getCookie("refreshToken");
      if (refreshToken) {
        headers.set("authorization", `Bearer ${refreshToken}`);
      }
      return headers;
    },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    const refreshResult = await baseQueryWithRefreshToken(baseUrl + `auth/${apiVersion}/refreshToken`, api,extraOptions);
    if (refreshResult?.data?.accessToken) {
      // store the new token in local storage
      const localStorageData = getCookie('userDTO');
      const newData = {
        ...localStorageData,
        userData: {
          ...localStorageData?.userData,
          access_token: refreshResult?.data?.accessToken,
        },
      };
      storeCookie("userDTO",newData);

      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      //localStorage.clear();
      // navigate("/login");
      //window.location.reload();
    }
  }
  return result;
};

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  tagTypes: [
    "getAllProducts"
  ],
  endpoints: () => ({}),
});
