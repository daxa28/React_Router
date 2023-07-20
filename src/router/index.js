// import About from "../pages/About";
import Error from "../pages/Error";
import Home from "../pages/Home";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import PostsNotLogin from "../pages/PostsNotLogin";
import LoginExit from "../pages/LoginExit";

export const privateRoutes = [
  // { path: "/about", component: <About />, exact: true },
  { path: "/*", component: <Error />, exact: true },
  { path: "/", component: <Home />, exact: true },
  { path: "/posts", component: <Posts />, exact: true },
  { path: "/posts/:id", component: <PostIdPage />, exact: true },
  { path: "/login", component: <LoginExit />, exact: true },
];

export const pablicRoutes = [
  { path: "/", component: <Home />, exact: true },
  // { path: "/about", component: <About />, exact: true },
  { path: "/*", component: <Error />, exact: true },
  { path: "/login", component: <Login />, exact: true },
  { path: "/posts", component: <PostsNotLogin />, exact: true },
];
