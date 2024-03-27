import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {RouterProvider,} from "react-router-dom";
import "./assets/index.css";
import {router} from "./router/router.jsx";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";

const store = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider store={store}>
            <RouterProvider router={router}/>
        </AuthProvider>
    </React.StrictMode>
);