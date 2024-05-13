import {Form, NavLink, useLoaderData} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {MdOutlineEditNote, MdPlaylistRemove} from "react-icons/md";
import {useAlert} from "../../../../app/hooks.js";
import PostCard from "../../../components/features/PostCard.jsx";

export default function AdminPostsPage() {
    const posts = useLoaderData()
    const {i18n, t} = useTranslation('admin')

    return (
        <div className="lg:ml-12 py-3 border-b border-gray-200 bg-white">
            <div className="mb-8 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="min-w-0 flex-1">
                    <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        {t('posts.all_posts')}
                    </h1>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink
                        to={'/admin/posts/new'}
                        className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {t('posts.new_post')}
                    </NavLink>
                </div>
            </div>
            <div
                className="divide-y divide-gray-200 overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-px sm:divide-y-0">
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
            <PostCard post={post}/>
        </div>
    )
}



