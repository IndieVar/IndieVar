import {Form, NavLink, useLoaderData} from "react-router-dom";
import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {MdOutlineEditNote, MdPlaylistRemove} from "react-icons/md";
import {IoEyeOutline} from "react-icons/io5";
import {useAlert} from "../../../../app/hooks.js";

export default function AdminPostsPage() {
    const posts = useLoaderData()
    const {i18n} = useTranslation()

    return (
        <div className="lg:ml-12 py-3 border-b border-gray-200 bg-white">
            <div className="mb-8 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="min-w-0 flex-1">
                    <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Posts
                    </h1>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink
                        to={'/admin/posts/new'}
                        className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create new post
                    </NavLink>
                </div>
            </div>
            <div
                className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                {posts.map((post) => (
                    <PostComponent key={post.id} post={post} locale={i18n.language}/>
                ))}
            </div>
        </div>
    )
}

export function PostComponent({post, locale}) {
    useAlert()

    if (!post) return

    return (
        <div className={'group relative bg-white p-6'}>
            <div className="pb-6 flex justify-end items-center divide-x">
                {/*Edit*/}
                <NavLink to={`/admin/posts/${post.id}/update`} className={"text-gray-500 hover:text-blue-700"}>
                    <MdOutlineEditNote className={"w-6 h-6 mx-3"}/>
                </NavLink>
                {/*Delete*/}
                <Form method="delete" action={`/admin/posts/${post.id}/delete`}
                      className={"text-gray-500 hover:text-red-700"}>
                    <button type="submit">
                        <MdPlaylistRemove className={"w-6 h-6 ml-3"}/>
                    </button>
                </Form>
            </div>
            <p className="pb-6 text-base text-gray-500 group-hover:text-gray-700">
                {post.title}
            </p>
            <div className={"absolute bottom-4 inset-x-1/2 w-full flex items-center space-x-2 text-gray-500 text-xs"}>
                <span>{post.views}</span>
                <IoEyeOutline className={"w-4 h-4"}/>
            </div>
        </div>
    )
}


