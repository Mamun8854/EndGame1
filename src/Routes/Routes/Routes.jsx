import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Home from "../../Pages/Home/Home";
import PostInput from "../../Pages/Home/PostInput/PostInput";
import PostDetails from "../../Pages/Home/Posts/PostDetails/PostDetails";
import Register from "../../Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/addPost", element: <PostInput></PostInput> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/post/:id",
        element: <PostDetails></PostDetails>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/post/${params.id}`);
        },
      },
    ],
  },
]);
