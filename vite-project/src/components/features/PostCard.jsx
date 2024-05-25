import {avatarUrl, dateFormat, imageUrl} from "../../../app/functions.js";
import React from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import ViewsCount from "./ViewsCount.jsx";

export default function PostCard({post, lang}) {
    const {i18n} = useTranslation();
    const locale = lang || i18n.language
    return (
        <article className="flex flex-col items-start justify-between relative rounded-lg hover:shadow-md">
            <div className="relative w-full">
                {/*Cover*/}
                <NavLink
                    to={`/posts/${post.id}`}
                    className="relative w-full"
                >
                    <img
                        src={imageUrl(post.cover.medium.url)}
                        alt={post[locale]?.title}
                        className="h-56 sm:h-72 w-full rounded-2xl bg-gray-100 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                </NavLink>
            </div>
            <div className="max-w-xl py-6 p-2">
                {/*Date & category*/}
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={dateFormat(post.created_at)} className="text-gray-500">
                        {dateFormat(post.created_at)}
                    </time>
                    <NavLink
                        to={`/posts/${post.id}`}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                        {post[locale]?.category}
                    </NavLink>
                </div>
                {/*Title & description*/}
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={`/posts/${post.id}`}>
                            <span className="absolute inset-0"/>
                            {post[locale]?.title}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post[locale]?.desc}</p>
                </div>
                {/*Author*/}
                <div className="relative mt-8 mb-4 flex items-center gap-x-4">
                    <img
                        src={avatarUrl(post.user?.avatar.thumb.url)}
                        alt="User avatar" className="h-10 w-10 rounded-full bg-gray-100"/>
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <span className="absolute inset-0"/>
                            {post.user.name}
                        </p>
                        <p className="text-gray-600">{"Lead developer"}</p>
                    </div>
                </div>
            </div>
            <ViewsCount count={post.views}/>
        </article>
    )
}