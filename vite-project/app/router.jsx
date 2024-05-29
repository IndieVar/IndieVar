import * as React from "react";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "../src/pages/Layout.jsx";
import ErrorPage from "../src/pages/ErrorPage.jsx";
import HomePage, {homeLoader} from "../src/pages/home/HomePage.jsx";
import PostsPage, {postsLoader} from "../src/pages/posts/PostsPage.jsx";
import SinglePostPage, {singlePostLoader} from "../src/pages/posts/SinglePostPage.jsx";
import DashboardPage from "../src/pages/admin/dashboard/DashboardPage.jsx";
import LoginPage from "../src/pages/auth/LoginPage.jsx";
import AuthProvider, {currentUserLoader} from "../src/providers/AuthProvider.jsx";
import QuotesPage, {QuoteComponent, quotesLoader} from "../src/pages/admin/quotes/QuotesPage.jsx";
import {messagesAction, postsAction, quotesAction, usersAction} from "./actions.js";
import {QuoteFormPage, quoteLoader} from "../src/pages/admin/quotes/QuoteFormPage.jsx";
import AdminLayout from "../src/pages/admin/AdminLayout.jsx";
import AdminPostsPage, {PostComponent} from "../src/pages/admin/posts/AdminPostsPage.jsx";
import {PostFormPage} from "../src/pages/admin/posts/PostFormPage.jsx";
import ProfilePage from "../src/pages/admin/profile/ProfilePage.jsx";
import MessagesPage, {MessageComponent, messagesLoader} from "../src/pages/admin/messages/MessagesPage.jsx";
import SingleMessagePage, {singleMessageLoader} from "../src/pages/admin/messages/SingleMessagePage.jsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<AuthProvider/>} errorElement={<ErrorPage/>}
                   loader={currentUserLoader}>
                <Route element={<Layout/>}>
                    <Route path="/" element={<HomePage/>} loader={homeLoader}/>
                    <Route path="/posts" element={<PostsPage/>} loader={postsLoader}/>
                    <Route path="/posts/:id" element={<SinglePostPage/>} loader={singlePostLoader}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route element={<AdminLayout/>}>
                        {/*Dashboard*/}
                        <Route path='/admin/dashboard' element={<DashboardPage/>}/>
                        {/*Messages*/}
                        <Route path="/admin/messages" element={<MessagesPage/>} loader={messagesLoader}/>
                        <Route path="/admin/messages/:id" element={<SingleMessagePage/>} loader={singleMessageLoader}/>
                        <Route path="/admin/messages/:id/delete" element={<MessageComponent/>} action={messagesAction}/>
                        {/*Profile*/}
                        <Route path='/admin/profile' element={<ProfilePage/>} action={usersAction}/>
                        {/*Quotes*/}
                        <Route path='/admin/quotes' element={<QuotesPage/>} loader={quotesLoader}/>
                        <Route path='/admin/quotes/new' element={<QuoteFormPage/>} action={quotesAction}/>
                        <Route path='/admin/quotes/:id/update' element={<QuoteFormPage/>} loader={quoteLoader} action={quotesAction}/>
                        <Route path='/admin/quotes/:id/delete' element={<QuoteComponent/>} action={quotesAction}/>
                        {/*Posts*/}
                        <Route path='/admin/posts' element={<AdminPostsPage/>} loader={postsLoader}/>
                        <Route path='/admin/posts/new' element={<PostFormPage/>} action={postsAction}/>
                        <Route path='/admin/posts/:id/update' element={<PostFormPage/>} loader={singlePostLoader} action={postsAction}/>
                        <Route path='/admin/posts/:id/delete' element={<PostComponent/>} action={postsAction}/>
                    </Route>
                </Route>
            </Route>
        </>
    )
);

