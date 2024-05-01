import * as React from "react";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "../src/pages/Layout.jsx";
import ErrorPage from "../src/pages/ErrorPage.jsx";
import HomePage, {randomQuoteLoader} from "../src/pages/home/HomePage.jsx";
import PostsPage, {postsLoader} from "../src/pages/posts/PostsPage.jsx";
import SinglePostPage, {singlePostLoader} from "../src/pages/posts/SinglePostPage.jsx";
import DashboardPage from "../src/pages/admin/dashboard/DashboardPage.jsx";
import LoginPage from "../src/pages/auth/LoginPage.jsx";
import AuthProvider, {currentUserLoader} from "../src/providers/AuthProvider.jsx";
import QuotesPage, {QuoteComponent, quotesLoader} from "../src/pages/admin/quotes/QuotesPage.jsx";
import {quotesAction} from "./actions.js";
import {QuoteForm, quoteLoader} from "../src/pages/admin/quotes/QuoteForm.jsx";
import AdminLayout from "../src/pages/admin/AdminLayout.jsx";
import AdminPostsPage from "../src/pages/admin/posts/AdminPostsPage.jsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<AuthProvider/>} errorElement={<ErrorPage/>}
                   loader={currentUserLoader}>
                <Route element={<Layout/>}>
                    <Route path="/" element={<HomePage/>} loader={randomQuoteLoader}/>
                    <Route path="/posts" element={<PostsPage/>} loader={postsLoader}/>
                    <Route path="/posts/:id" element={<SinglePostPage/>} loader={singlePostLoader}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route element={<AdminLayout/>}>
                        <Route path='/admin/dashboard' element={<DashboardPage/>}/>
                        {/*Quotes*/}
                        <Route path='/admin/quotes' element={<QuotesPage/>} loader={quotesLoader}/>
                        <Route path='/admin/quotes/new' element={<QuoteForm/>} action={quotesAction}/>
                        <Route path='/admin/quotes/:id/update' element={<QuoteForm/>} loader={quoteLoader} action={quotesAction}/>
                        <Route path='/admin/quotes/:id/delete' element={<QuoteComponent/>} action={quotesAction}/>
                        {/*Posts*/}
                        <Route path='/admin/posts' element={<AdminPostsPage/>} loader={postsLoader}/>
                    </Route>
                </Route>
            </Route>
        </>
    )
);

