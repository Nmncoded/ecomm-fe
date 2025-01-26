import { createSlice } from '@reduxjs/toolkit';
import { privateApi } from './api';


const privateSlice = createSlice({
  name: 'privateSlice',
  initialState: {
    allProductsData : [],
    isSidebarCollapsed: true,
  
  },
  reducers: {
    setSidebarCollapsed: (state, action) => {
      state.isSidebarCollapsed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(privateApi.endpoints.getAllProducts.matchFulfilled, (state, action) => {
        state.allProductsData = action.payload;
      })
  },
});

// Action creators are generated for each case reducer function
export const { setSidebarCollapsed } = privateSlice.actions

export default privateSlice.reducer;

// In this example, we define an API object using createApi with an endpoint for fetching posts. We also define a postsSlice with an initial state that includes a posts array, a loading state, and an error state.
// In the extraReducers section of the slice, we use addMatcher to handle the pending, fulfilled, and rejected actions that are dispatched by the getPosts endpoint. These cases update the state of the posts field in the store based on the current state of the fetch operation.
// We also export a useGetPostsQuery hook that can be used in our components to fetch posts data from the API.
// Overall, using createApi and createSlice together can help simplify the process of managing API requests and state in a Redux application. The createApi function generates a set of actions and reducers based on your API definition, while createSlice provides a way to define additional reducers and actions for yourreduxstore.
