import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import PostsPage, {postsLoader} from "../pages/PostsPage.jsx";
import SinglePostPage, {singlePostLoader} from "../pages/SinglePostPage.jsx";
import PostForm, {postActions} from "../features/posts/PostForm.jsx";
import * as React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
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
            },
            {
                path: "/posts/new",
                element: <PostForm/>,
                action: postActions
            }
        ]
    },
]);