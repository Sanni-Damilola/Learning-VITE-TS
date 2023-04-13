import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/static/Layout";
import Register from "../pages/Auth/Register";
import Signin from "../pages/Auth/Signin";
import ResetPassword from "../pages/Auth/ResetPassword";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "register",
        index: true,
        element: <Register />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "reset",
        element: <ResetPassword />,
      },
    ],
  },
]);
