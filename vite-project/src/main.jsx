import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {RouterProvider,} from "react-router-dom";
import "./assets/index.css";
import {router} from "././services/router.jsx";
import axios from "axios";
import {AUTH_API_URL} from "./constants.js";

const refreshToken = () => {
    axios.post(`${AUTH_API_URL}/refresh`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('refresh_token')}`,
        },
    }).then((res) => {
        console.log(res)
    })
}

const tokenInfo = () => {
    axios.get(`${AUTH_API_URL}/info`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
    }).then((res) => {
        console.log(res)
    })
}

if (localStorage.getItem('access_token')) {
    tokenInfo()
    refreshToken()
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);