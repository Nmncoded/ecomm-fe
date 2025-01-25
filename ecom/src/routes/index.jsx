import { RouterProvider } from "react-router-dom";
import { privateRouter, publicRouter } from "./router";
import { useSelector } from "react-redux";
import { getCookie } from "../utils/cookie-function";

export default function AppRouter() {
  const getRole = getCookie('role');
  const {isUserLoggedIn} = useSelector(state => state.authData);

  const checkAndRedirectUser = () => {
    if (!isUserLoggedIn) {
      localStorage.clear();
    }
  };  
  checkAndRedirectUser();
  console.log(isUserLoggedIn,getRole);
  
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
