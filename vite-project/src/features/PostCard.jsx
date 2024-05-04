import {avatarUrl, dateFormat, imageUrl} from "../../app/functions.js";
import React from "react";
import {IoEyeOutline} from "react-icons/io5";

export default function PostCard({post}) {
    return (
        <article className="flex flex-col items-start justify-between relative rounded-lg">
            <div className="relative w-full">
                <img
                    src={imageUrl(post.cover.medium.url)}
                    alt={post.title}
                    className="h-56 sm:h-72 w-full rounded-2xl bg-gray-100 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
            </div>
            <div className="max-w-xl py-6">
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={dateFormat(post.created_at)} className="text-gray-500">
                        {dateFormat(post.created_at)}
                    </time>
                    <a
                        href={`/posts/${post.id}`}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                        {post.category}
                    </a>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={`/posts/${post.id}`}>
                            <span className="absolute inset-0"/>
                            {post.title}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.desc}</p>
                </div>
                <div className="relative mt-8 mb-4 flex items-center gap-x-4">
                    <img
                        src={avatarUrl(post.user?.avatar)}
                        alt="User avatar" className="h-10 w-10 rounded-full bg-gray-100"/>
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <span className="absolute inset-0"/>
                            {post.user.email}
                        </p>
                        <p className="text-gray-600">{"Lead developer"}</p>
                    </div>
                </div>
            </div>
            <div className={"absolute bottom-4 inset-x-1/2 w-full flex items-center space-x-2 text-gray-500 text-xs"}>
                <span>{post.views}</span>
                <IoEyeOutline className={"w-4 h-4"}/>
            </div>
        </article>
    )
}