import axios from "axios";
import {API_URL} from "../../../app/constants.js";
import {useLoaderData} from "react-router-dom";
import UnsafeComponent from "../../components/features/UnsafeComponent.jsx";
import {avatarUrl, imageUrl} from "../../../app/functions.js";
import {useTranslation} from "react-i18next";
import React, {useEffect} from "react";
import ViewsCount from "../../components/features/ViewsCount.jsx";
import {Helmet, HelmetProvider} from "react-helmet-async";

export default function SinglePostPage() {
    const post = useLoaderData();
    const {i18n} = useTranslation();
    const locale = i18n.language

    const updateViews = async () => (
        await axios.put(`${API_URL}/posts/${post.id}/update_views`, {})
    )

    useEffect(() => {
        updateViews()
    }, []);

    return (
        <>
            <Meta post={post}/>
            <div
                className="relative isolate overflow-hidden bg-white px-6 pt-2 sm:pt-14 pb-6 -mb-20 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0}
                              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"/>
                    </svg>
                </div>

                <div
                    className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <img
                        className="lg:float-right m-3 max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 w-[30rem]"
                        src={imageUrl(post.cover.large.url)}
                        alt={post[locale].title}
                    />
                    <div
                        className="flex-col mt-4 space-y-4 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-indigo-600">
                                    {post[locale].category}
                                </p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    {post[locale].title}
                                </h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700">
                                    {post[locale].desc}
                                </p>
                            </div>
                        </div>
                        <UnsafeComponent html={post[locale].content}/>
                    </div>
                </div>
                {/*Author*/}
                <div className="md:ml-6 lg:ml-8 my-6 relative flex items-center w-full">
                    <img
                        src={avatarUrl(post.user?.avatar.thumb.url)}
                        alt="User avatar" className="h-10 w-10 rounded-full bg-gray-100 mr-4"/>
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <span className="absolute inset-0"/>
                            {post.user.name}
                        </p>
                        <p className="text-gray-600">{"Lead developer"}</p>
                    </div>
                </div>
                {/*Views*/}
                <ViewsCount count={post.views}/>
            </div>
        </>
    )
}

function Meta({post}) {
    const {t, i18n} = useTranslation('meta');
    const locale = i18n.language
    const currentUrl = window.location.href;

    return (
        <HelmetProvider>
            <Helmet>
                <title>{post[locale].title}</title>
                <meta name="description" content={post[locale].desc}/>
                <meta name="keywords" content="react, meta tags, seo"/>
                <meta name="author" content={post.user.name}/>
                <meta property="og:title" content={post[locale].title}/>
                <meta property="og:description" content={post[locale].desc}/>
                <meta property="og:image" content={imageUrl(post.cover?.large.url)}/>
                <meta property="og:url" content={currentUrl}/>
                <meta name="twitter:title" content={post[locale].title}/>
                <meta name="twitter:description" content={post[locale].desc}/>
                <meta name="twitter:image" content={imageUrl(post.cover?.large.url)}/>
                <meta name="twitter:card" content={imageUrl(post.cover?.large.url)}/>
            </Helmet>
        </HelmetProvider>
    )
}