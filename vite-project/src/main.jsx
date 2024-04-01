import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./assets/index.css";
import {router} from "././router/router.jsx";
import {RouterProvider} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);