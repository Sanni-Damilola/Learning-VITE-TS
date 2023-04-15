import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { ShareState } from "./Global/shareState";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ShareState>
      <RouterProvider router={mainRouter} />
    </ShareState>

    {/* <App /> */}
  </React.StrictMode>,
);
