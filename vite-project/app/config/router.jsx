import * as React from "react";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "../../src/pages/Layout.jsx";
import ErrorPage from "../../src/pages/ErrorPage.jsx";
import HomePage, {quoteLoader} from "../../src/pages/home/HomePage.jsx";
import PostsPage, {postsLoader} from "../../src/pages/posts/PostsPage.jsx";
import SinglePostPage, {singlePostLoader} from "../../src/pages/posts/SinglePostPage.jsx";
import DashboardPage from "../../src/pages/admin/dashboard/DashboardPage.jsx";
import LoginPage from "../../src/pages/auth/LoginPage.jsx";
import AdminProvider from "../../src/providers/AdminProvider.jsx";
import AuthProvider, {currentUserLoader} from "../../src/providers/AuthProvider.jsx";
import QuotesPage, {quotesLoader} from "../../src/pages/admin/quotes/QuotesPage.jsx";

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
                        <Route path='/admin/quotes' element={<QuotesPage/>} loader={quotesLoader}/>
                    </Route>
                </Route>
            </Route>
        </>
    )
);

