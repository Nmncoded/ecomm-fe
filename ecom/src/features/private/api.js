import { api } from './index.js';
const apiVersion = import.meta.env.VITE_SERVER_VERSION;

export const privateApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => {
        return {
          url: `${apiVersion}/createProduct`,
          method: "POST",
          body: data.body,
        };
      },
      // invalidatesTags: [''],
      transformResponse: (response) => {
        return response;
      },
    }),
    getAllProducts: builder.query({
      query: () => {
        return {
          url: `${apiVersion}/getAllProducts`,
          method: "GET",
        };
      },
      providesTags: ["getAllProducts"],
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response) => {
        return response;
      },
      // Pick out errors and prevent nested properties in a hook or selector
    }),
  }),
  overrideExisting: false,
});


export const { 
  useCreateProductMutation,
  useGetAllProductsQuery,
} = privateApi;

// In this example, we define an API object using createApi with an endpoint for fetching posts. We also define a postsSlice with an initial state that includes a posts array, a loading state, and an error state.
// In the extraReducers section of the slice, we use addMatcher to handle the pending, fulfilled, and rejected actions that are dispatched by the getPosts endpoint. These cases update the state of the posts field in the store based on the current state of the fetch operation.
// We also export a useGetPostsQuery hook that can be used in our components to fetch posts data from the API.
// Overall, using createApi and createSlice together can help simplify the process of managing API requests and state in a Redux application. The createApi function generates a set of actions and reducers based on your API definition, while createSlice provides a way to define additional reducers and actions for yourReduxstore.
