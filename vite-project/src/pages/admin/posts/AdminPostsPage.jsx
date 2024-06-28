import {Form, NavLink, useLoaderData} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {MdOutlineEditNote, MdPlaylistRemove} from "react-icons/md";
import {useAlert} from "../../../../app/hooks.js";
import PostCard from "../../../components/features/PostCard.jsx";
import React, {useEffect, useState} from "react";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import api from "../../../../app/config/api.jsx";
import {IoEyeOutline} from "react-icons/io5";
import {supportedLngs} from "../../../../app/i18n/config.js";
import PageHeader from "../../../components/user/PageHeader.jsx";

export default function AdminPostsPage() {
    const posts = useLoaderData()
    const {i18n, t} = useTranslation('admin')

    return (
        <div className="lg:ml-12 py-3 border-b border-gray-200 bg-white">
            <PageHeader title={t('posts.all_posts')} path={'/admin/posts/new'} pathTitle={t('posts.new_post')}/>
            <div
                className="divide-y divide-gray-200 overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-px sm:divide-y-0">
                {posts.map((post) => (
                    <PostComponent key={post.id} post={post} locale={i18n.language}/>
                ))}
            </div>
        </div>
    )
}

export function PostComponent({post, locale}) {
    const [lang, setLang] = useState()
    const [isVisible, setIsVisible] = useState(post?.visible)
    useAlert()

    if (!post) return

    async function setVisible() {
        await api.put(`/posts/${post.id}/set_visible`, {})
        setIsVisible(!isVisible)
    }

    useEffect(() => {
        setLang(locale)
    }, [locale]);

    return (
        <div className={'group relative bg-white p-6'}>
            <div className="pb-6 flex justify-end items-center divide-x">
                <select name="lang" id="lang"
                        defaultValue={locale}
                        onChange={(e) => setLang(e.target.value)}
                        className={"mr-3 text-gray-500 hover:text-gray-900 hover:underline bg-inherit border-0"}
                >
                    {Object.entries(supportedLngs).map(([code, name]) => (
                        <option value={code} key={code}>
                            {name}
                        </option>
                    ))}
                </select>
                {/*Set Visible*/}
                <button onClick={() => setVisible()}
                        className={"text-gray-500 hover:text-blue-700"}>
                    {isVisible && <AiOutlineEyeInvisible className={"w-6 h-6 mx-3 text-gray-500 hover:text-red-700"}/>}
                    {!isVisible && <IoEyeOutline className={"w-6 h-6 mx-3 text-gray-500 hover:text-blue-700"}/>}
                </button>
                {/*Edit*/}
                <NavLink to={`/admin/posts/${post.id}/update`} className={"text-gray-500 hover:text-blue-700"}>
                    <MdOutlineEditNote className={"w-6 h-6 mx-3"}/>
                </NavLink>
                {/*Delete*/}
                <Form method="delete" action={`/admin/posts/${post.id}/delete`}
                      className={"text-gray-500 hover:text-red-700 flex items-center"}>
                    <button type="submit">
                        <MdPlaylistRemove className={"w-6 h-6 ml-3"}/>
                    </button>
                </Form>
            </div>
            <PostCard post={post} lang={lang}/>
        </div>
    );
}



