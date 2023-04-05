import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { RootProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <RootProvider>
        <Root />
      </RootProvider>
    </BrowserRouter>
);
