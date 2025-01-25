import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Navigate,
  ScrollRestoration,
} from "react-router-dom";
import Registration from "../components/registration";
import Error from "../components/error";
import Login from "../components/login";
import UserDashboard from "../components/dashboard/roleTypes/userDashboard";
import Dashboard from "../components/dashboard";
import Products from "../components/products";


export const publicRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          exact
          errorElement={<Error to={"/login"} />}
          path="/login"
          element={
            <>
              <ScrollRestoration
                getKey={(location) => {
                  // default behavior
                  return location.key;
                }}
              />

              <Login />
            </>
          }
        />
        <Route exact path="/registration" element={<Registration />} />
        <Route path="*" element={<Navigate to={"/login"} />} />
      </>
    )
  );
};

export const privateRouter = (isUserLoggedIn=false) => {
  return createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={isUserLoggedIn ? <Dashboard /> : <Navigate to={"/login"} />}
          errorElement={<Error to={"/"} />}
        >
          <Route index element={<UserDashboard />} />
          <Route exact path="products" element={<Products />} />


          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </>
    )
  );
};
