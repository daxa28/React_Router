import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
// import About from "../pages/About";
// import Posts from "../pages/Posts";
// import Error from "../pages/Error";
// import Home from "../pages/Home";
// import PostIdPage from "../pages/PostIdPage";
import { privateRoutes, pablicRoutes } from "../router";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {pablicRoutes.map((route) => (
        <Route
          key={route.path}
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
