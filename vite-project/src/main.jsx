import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./assets/index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import {router} from "././router/router.jsx";
import {RouterProvider} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    </React.StrictMode>
);