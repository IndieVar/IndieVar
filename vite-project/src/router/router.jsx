import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import PostsPage, {postsLoader} from "../pages/PostsPage.jsx";
import SinglePostPage, {singlePostLoader} from "../pages/SinglePostPage.jsx";
import * as React from "react";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import AdminProvider from "../providers/AdminProvider.jsx";
import AuthProvider, {currentUserLoader} from "../providers/AuthProvider.jsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<AuthProvider/>} errorElement={<ErrorPage/>}
                   loader={currentUserLoader}>
                <Route element={<Layout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/posts" element={<PostsPage/>} loader={postsLoader}/>
                    <Route path="/posts/:id" element={<SinglePostPage/>} loader={singlePostLoader}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route element={<AdminProvider/>}>
                        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
                    </Route>
                </Route>
            </Route>
        </>
    )
);

