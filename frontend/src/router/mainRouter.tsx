import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import LayOut from "../components/Static/LayOut";
import Register from "../pages/Auth/Register";
import ResetPassword from "../pages/Auth/ResetPassword";
import SignIn from "../pages/Auth/SignIn";
import Home from "../pages/Home/Home";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        path: "",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "reset",
        element: <ResetPassword />,
      },
    ],
  },
]);
