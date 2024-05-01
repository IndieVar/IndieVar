import {Form, NavLink, useLoaderData, useLocation} from "react-router-dom";
import {classNames, printError} from "../../../../app/functions.js";
import {useAlert} from "../../../../app/hooks.js";
import {ExclamationCircleIcon} from "@heroicons/react/20/solid/index.js";

export function PostForm() {
    const post = useLoaderData()
    const {state} = useLocation()
    const errors = state?.errors || false
    useAlert()

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
            >
                <div className={"space-y-6"}>
                    <div>
                        <label htmlFor="title" className={"font-semibold text-gray-500"}>Title</label>
                        <input
                            name="title"
                            id="title"
                            // required
                            className={classNames(
                                errors.title ? "border border-red-600" : "border-0",
                                "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            )}
                            placeholder="Title"
                            defaultValue={post?.title || ''}
                        />
                        {errors?.title && <p className="my-2 text-sm text-red-600" id="email-error">
                            {printError(errors.title)}
                        </p>}
                    </div>
                    <div>
                        <label htmlFor="category" className={"font-semibold text-gray-500"}>Category</label>
                        <input
                            name="category"
                            id="category"
                            // required
                            className={classNames(
                                errors.category ? "border border-red-600" : "border-0",
                                "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            )}
                            placeholder="Category"
                            defaultValue={post?.category || ''}
                        />
                        {errors?.category && <p className="my-2 text-sm text-red-600" id="email-error">
                            {printError(errors.category)}
                        </p>}
                    </div>
                    <div>
                        <label htmlFor="desc" className={"font-semibold text-gray-500"}>Description</label>
                        <textarea
                            rows={3}
                            name="desc"
                            id="desc"
                            // required
                            className={classNames(
                                errors.desc ? "border border-red-600" : "border-0",
                                "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            )}
                            placeholder="Description"
                            defaultValue={post?.desc || ''}
                        />
                        {errors?.desc && <p className="my-2 text-sm text-red-600" id="email-error">
                            {printError(errors.desc)}
                        </p>}
                    </div>
                    {/*<div>*/}
                    {/*    <label htmlFor="en" className={"font-semibold text-gray-500 py-2"}>English</label>*/}
                    {/*    <textarea*/}
                    {/*        rows={3}*/}
                    {/*        name="en"*/}
                    {/*        id="en"*/}
                    {/*        // required*/}
                    {/*        className={classNames(*/}
                    {/*            errors.en ? "border border-red-600" : "border-0",*/}
                    {/*            "mb-2 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"*/}
                    {/*        )}*/}
                    {/*        placeholder="Add your English text..."*/}
                    {/*        defaultValue={post?.en || ''}*/}
                    {/*    />*/}
                    {/*    {errors?.en && <p className="my-2 text-sm text-red-600" id="email-error">*/}
                    {/*        {printError(errors.en)}*/}
                    {/*    </p>}*/}
                    {/*</div>*/}
                </div>
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