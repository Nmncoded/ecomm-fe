import { RouterProvider } from "react-router-dom";
import { privateRouter, publicRouter } from "./router";
// import { getCookie } from "../utils/cookie-function";
// import { useSelector } from "react-redux";

export default function AppRouter() {
  // const getRole = getCookie('role');
  const getRole = null
  // const {isUserLoggedIn} = useSelector(state => state.authData);
  const isUserLoggedIn = false;

  // const checkAndRedirectUser = () => {
  //   if (!isUserLoggedIn) {
  //     localStorage.clear();
  //   }
  // };  
  // checkAndRedirectUser();
  console.log(isUserLoggedIn);
  
  return (
    <RouterProvider
      router={
        isUserLoggedIn
          ? privateRouter(isUserLoggedIn,getRole)
          : publicRouter(isUserLoggedIn, getRole)
      }
    />
  );
}
