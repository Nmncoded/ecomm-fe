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
  if (result?.error?.status === 403) {
    // console.log("token expired ----- ",result);
    const refreshResult = await baseQueryWithRefreshToken(baseUrl + `auth/${apiVersion}/refreshToken`, api,extraOptions);
    // console.log("refreshResult  ----- ",refreshResult);

    if (refreshResult?.data?.access_token) {
      const localStorageData = JSON.parse(localStorage.getItem("userDTO"));
      // console.log("localStorageData  ----- ",localStorageData);
      const newData = {
        ...localStorageData,
        token: refreshResult?.data?.access_token,
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
