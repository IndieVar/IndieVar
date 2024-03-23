import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import PostsPage, {postsLoader} from "../pages/PostsPage.jsx";
import SinglePostPage, {singlePostLoader} from "../pages/SinglePostPage.jsx";
import * as React from "react";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Layout/>} errorElement={<ErrorPage/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/posts" element={<PostsPage/>} loader={postsLoader}/>
                <Route path="/posts/:id" element={<SinglePostPage/>} loader={singlePostLoader}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route element={<AuthOutlet fallbackPath='/login'/>}>
                    <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
                    {/*<Route path='/products' element={<Products/>} />*/}
                </Route>
            </Route>

            {/*<Route path="/dashboard" element={<ProtectedLayout />}>*/}
            {/*    <Route path="profile" element={<ProfilePage />} />*/}
            {/*    <Route path="settings" element={<SettingsPage />} />*/}
            {/*</Route>*/}
        </>
    )
);

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout/>,
//         errorElement: <ErrorPage/>,
//         children: [
//             {
//                 index: true,
//                 element: <HomePage/>
//             },
//             {
//                 path: "/posts",
//                 element: <PostsPage/>,
//                 loader: postsLoader
//             },
//             {
//                 path: "/posts/:id",
//                 element: <SinglePostPage/>,
//                 loader: singlePostLoader
//             },
//             {
//                 path: "/posts/new",
//                 element: <PostForm/>,
//                 action: postActions
//             },
//             {
//                 path: "/admin/login",
//                 element: <LoginPage/>,
//             },
//             {
//                 path: "/admin/dashboard",
//                 element: <AdminDashboard fallbackPath='/admin/login' />
//             }
//         ]
//     },
// ]);