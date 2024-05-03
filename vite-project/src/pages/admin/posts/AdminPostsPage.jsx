import {Form, NavLink, useLoaderData} from "react-router-dom";
import {useTranslation} from "react-i18next";
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
                className="divide-y divide-gray-200 overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                {posts.map((post) => (
                    <PostComponent key={post.id} post={post} locale={i18n.language}/>
                ))}
            </div>
        </div>
    )
}

export function PostComponent({post}) {
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
            <article className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                    <img
                        src={'http://127.0.0.1:3000/' + post.cover.medium.url}
                        alt=""
                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                </div>
                <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time dateTime={post.created_at} className="text-gray-500">
                            {post.created_at}
                        </time>
                        <a
                            href={'/'}
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
                        <img src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                             alt="" className="h-10 w-10 rounded-full bg-gray-100"/>
                        <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                                <a href={'/'}>
                                    <span className="absolute inset-0"/>
                                    {post.user.email}
                                </a>
                            </p>
                            <p className="text-gray-600">{"Lead developer"}</p>
                        </div>
                    </div>
                </div>
            </article>
            <div className={"absolute bottom-4 inset-x-1/2 w-full flex items-center space-x-2 text-gray-500 text-xs"}>
                <span>{post.views}</span>
                <IoEyeOutline className={"w-4 h-4"}/>
            </div>
        </div>
    )
}



