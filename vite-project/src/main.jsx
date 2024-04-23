import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "../app/assets/index.css";
import {router} from "../app/config/router.jsx";
import {RouterProvider} from "react-router-dom";
import "../app/i18n/config.ts";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <React.Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router}/>
        </React.Suspense>
    </React.StrictMode>
);