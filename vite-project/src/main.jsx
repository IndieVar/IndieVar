import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./assets/index.css";
import Layout from "./pages/Layout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import PostsPage, {postsLoader} from "./pages/PostsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SinglePostPage, {singlePostLoader} from "./pages/SinglePostPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/posts",
                element: <PostsPage/>,
                loader: postsLoader
            },
            {
                path: "/posts/:id",
                element: <SinglePostPage/>,
                loader: singlePostLoader
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);