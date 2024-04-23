import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import HomePage, {quoteLoader} from "../pages/home/HomePage.jsx";
import PostsPage, {postsLoader} from "../pages/posts/PostsPage.jsx";
import SinglePostPage, {singlePostLoader} from "../pages/posts/SinglePostPage.jsx";
import * as React from "react";
import DashboardPage from "../pages/admin/dashboard/DashboardPage.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import AdminProvider from "../providers/AdminProvider.jsx";
import AuthProvider, {currentUserLoader} from "../providers/AuthProvider.jsx";
import QuotesPage from "../pages/admin/quotes/QuotesPage.jsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<AuthProvider/>} errorElement={<ErrorPage/>}
                   loader={currentUserLoader}>
                <Route element={<Layout/>}>
                    <Route path="/" element={<HomePage/>} loader={quoteLoader}/>
                    <Route path="/posts" element={<PostsPage/>} loader={postsLoader}/>
                    <Route path="/posts/:id" element={<SinglePostPage/>} loader={singlePostLoader}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route element={<AdminProvider/>}>
                        <Route path='/admin/dashboard' element={<DashboardPage/>}/>
                        <Route path='/admin/quotes' element={<QuotesPage/>}/>
                    </Route>
                </Route>
            </Route>
        </>
    )
);

