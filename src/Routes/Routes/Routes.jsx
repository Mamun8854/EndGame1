import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import PostInput from "../../Pages/Home/PostInput/PostInput";
import PostDetails from "../../Pages/Home/Posts/PostDetails/PostDetails";
import Posts from "../../Pages/Home/Posts/Posts";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

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
          return fetch(`https://endgame1-server.vercel.app/post/${params.id}`);
        },
      },
      { path: "/media", element: <Posts></Posts> },
      { path: "/about", element: <About></About> },
    ],
  },
]);
