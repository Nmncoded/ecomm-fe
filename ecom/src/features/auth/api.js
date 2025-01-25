import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { storeCookie } from '../../utils/cookie-function';
const baseUrl = import.meta.env.VITE_BASE_URL;
const apiVersion = import.meta.env.VITE_SERVER_VERSION;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  refetchOnFocus:true,
  refetchOnMountOrArgChange:true,
  refetchOnReconnect:true,
  tagTypes: [''],
  endpoints: (builder) => ({
    loginUser : builder.mutation({
      query: (data) => {
        return {
          url: `auth/${apiVersion}/login`,
          method: "POST",
          body: data.body,
        };
      },
      // invalidatesTags: [],
      transformResponse: async(response) => {
        console.log(response);
        const newData = {
          ...response,
          isUserLoggedIn: "true",
          loginTime: new Date(),
        };
        // localStorage.setItem(, JSON.stringify(newData));
        await storeCookie("userDTO",newData);
        return response;
      },
      // transformErrorResponse: (response, meta, arg) => console.log(response,meta,arg),
    }),
    registerUser : builder.mutation({
      query: (data) => {
        return {
          url: `auth/${apiVersion}/register`,
          method: "POST",
          body: data.body,
        };
      },
      // invalidatesTags: [],
      transformResponse: (response) => {
        return response;
      },
      // transformErrorResponse: (response, meta, arg) => console.log(response,meta,arg),
    }),
  }),
});


export const {useLoginUserMutation, useRegisterUserMutation } = authApi;

// In this example, we define an API object using createApi with an endpoint for fetching posts. We also define a postsSlice with an initial state that includes a posts array, a loading state, and an error state.
// In the extraReducers section of the slice, we use addMatcher to handle the pending, fulfilled, and rejected actions that are dispatched by the getPosts endpoint. These cases update the state of the posts field in the store based on the current state of the fetch operation.
// We also export a useGetPostsQuery hook that can be used in our components to fetch posts data from the API.
// Overall, using createApi and createSlice together can help simplify the process of managing API requests and state in a Redux application. The createApi function generates a set of actions and reducers based on your API definition, while createSlice provides a way to define additional reducers and actions for yourReduxstore.
