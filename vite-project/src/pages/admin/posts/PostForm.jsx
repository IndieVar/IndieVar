import {Form, NavLink, useLoaderData, useLocation} from "react-router-dom";
import {classNames, printError} from "../../../../app/functions.js";
import {useAlert} from "../../../../app/hooks.js";
import {useEffect, useState} from "react";
import {useAuth} from "../../../providers/AuthProvider.jsx";
import Loading from "../../../components/Loading.jsx";
import UploadImage from "../../../components/features/UploadImage.jsx";
import EditorComponent from "../../../components/features/EditorComponent.jsx";

export function PostForm() {
    const [isLoading, setIsLoading] = useState(true)
    const {currentUser} = useAuth()
    const post = useLoaderData()
    const {state} = useLocation()
    const errors = state?.errors || false
    const langs = ['en', 'ru']
    useAlert()

    useEffect(() => {
        setIsLoading(false)
    }, [state]);

    if (isLoading) return <Loading/>

    return (
        <div className="lg:ml-12 py-3 border-b border-gray-200 bg-white">
            <div className="mb-8 md:flex md:items-center md:justify-between">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        {post ? 'Edit post' : 'Create new post'}
                    </h2>
                </div>
                <div className="mt-4 flex md:ml-4 md:mt-0">
                    <NavLink
                        to={"/admin/posts"}
                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        Back
                    </NavLink>
                </div>
            </div>
            <Form method={post ? 'patch' : 'post'}
                  action={`/admin/posts/${post ? post.id + '/update' : 'new'}`}
                  encType={"multipart/form-data"}
                  onSubmit={() => setIsLoading(true)}
            >
                <input type="hidden" name={"post[user_id]"} defaultValue={currentUser?.id}/>
                <UploadImage inputName={"post[cover]"}
                             image={post?.cover}
                             error={errors?.cover}/>
                <hr/>
                {langs.map((lang) => (
                    <TextContent key={lang} lang={lang} post={post} errors={errors}/>
                ))}
                <div className="mt-6 flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Post
                    </button>
                </div>
            </Form>
        </div>
    )
}

function TextContent({post, errors, lang}) {

    return (
        <div className={"space-y-6"}>
            <label className="font-semibold text-gray-500 text-center text-xl">{lang === 'en' ? 'English' : 'Russian'}</label>
            <div>
                <label htmlFor="title" className={"font-semibold text-gray-500"}>Title</label>
                <input
                    name={`post[${lang}_attributes][title]`}
                    id={`${lang}-title`}
                    // required
                    className={classNames(
                        errors[`${lang}.title`] ? "border border-red-600" : "border-0",
                        "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    )}
                    placeholder="Title"
                    defaultValue={post?.title || ''}
                />
                {errors[`${lang}.title`] && <p className="my-2 text-sm text-red-600" id={`${lang}-title-error`}>
                    {printError(errors[`${lang}.title`])}
                </p>}
            </div>
            <div>
                <label htmlFor="category" className={"font-semibold text-gray-500"}>Category</label>
                <input
                    name={`post[${lang}_attributes][category]`}
                    id={`${lang}-category`}
                    // required
                    className={classNames(
                        errors[`${lang}.category`] ? "border border-red-600" : "border-0",
                        "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    )}
                    placeholder="Category"
                    defaultValue={post?.category || ''}
                />
                {errors[`${lang}.category`] && <p className="my-2 text-sm text-red-600" id={`${lang}-category-error`}>
                    {printError(errors[`${lang}.category`])}
                </p>}
            </div>
            <div>
                <label htmlFor="desc" className={"font-semibold text-gray-500"}>Description</label>
                <textarea
                    rows={3}
                    name={`post[${lang}_attributes][desc]`}
                    id={`${lang}-desc`}
                    // required
                    className={classNames(
                        errors[`${lang}.desc`] ? "border border-red-600" : "border-0",
                        "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    )}
                    placeholder="Description"
                    defaultValue={post?.desc || ''}
                />
                {errors[`${lang}.desc`] && <p className="my-2 text-sm text-red-600" id={`${lang}-desc-error`}>
                    {printError(errors[`${lang}.desc`])}
                </p>}
            </div>
            <EditorComponent inputName={`post[${lang}_attributes][content]`}
                             initialValue={post?.content}
                             error={errors[`${lang}.content`]}/>
            <hr/>
        </div>
    )
}