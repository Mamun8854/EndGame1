import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Home from "../../Pages/Home/Home";
import PostInput from "../../Pages/Home/PostInput/PostInput";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/addPost", element: <PostInput></PostInput> },
      { path: "/login", element: <Login></Login> },
    ],
  },
]);
