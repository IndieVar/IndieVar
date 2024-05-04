import {Form, NavLink, useLoaderData, useLocation} from "react-router-dom";
import {classNames, imageUrl, printError} from "../../../../app/functions.js";
import {useAlert} from "../../../../app/hooks.js";
import {Editor} from "@tinymce/tinymce-react";
import {useEffect, useState} from "react";
import {useAuth} from "../../../providers/AuthProvider.jsx";
import {TINY_API_KEY} from "../../../../app/constants.js";
import {PhotoIcon} from "@heroicons/react/20/solid/index.js";
import Loading from "../../../components/Loading.jsx";

export function PostForm() {
    const [isLoading, setIsLoading] = useState(true)
    const {currentUser} = useAuth()
    const post = useLoaderData()
    const {state} = useLocation()
    const errors = state?.errors || false
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
                <div className={"space-y-6"}>
                    <div>
                        <label htmlFor="title" className={"font-semibold text-gray-500"}>Title</label>
                        <input
                            name="post[title]"
                            id="title"
                            // required
                            className={classNames(
                                errors.title ? "border border-red-600" : "border-0",
                                "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            )}
                            placeholder="Title"
                            defaultValue={post?.title || ''}
                        />
                        {errors?.title && <p className="my-2 text-sm text-red-600" id="title-error">
                            {printError(errors.title)}
                        </p>}
                    </div>
                    <div>
                        <label htmlFor="category" className={"font-semibold text-gray-500"}>Category</label>
                        <input
                            name="post[category]"
                            id="category"
                            // required
                            className={classNames(
                                errors.category ? "border border-red-600" : "border-0",
                                "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            )}
                            placeholder="Category"
                            defaultValue={post?.category || ''}
                        />
                        {errors?.category && <p className="my-2 text-sm text-red-600" id="category-error">
                            {printError(errors.category)}
                        </p>}
                    </div>
                    <div>
                        <label htmlFor="desc" className={"font-semibold text-gray-500"}>Description</label>
                        <textarea
                            rows={3}
                            name="post[desc]"
                            id="desc"
                            // required
                            className={classNames(
                                errors.desc ? "border border-red-600" : "border-0",
                                "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            )}
                            placeholder="Description"
                            defaultValue={post?.desc || ''}
                        />
                        {errors?.desc && <p className="my-2 text-sm text-red-600" id="desc-error">
                            {printError(errors.desc)}
                        </p>}
                    </div>
                    <CoverComponent cover={post?.cover} error={errors?.cover || false}/>
                    <div>
                        <label htmlFor="desc" className={"font-semibold text-gray-500"}>Content</label>
                        <EditorComponent initialValue={post?.content} error={errors?.content}/>
                        {errors?.content && <p className="my-2 text-sm text-red-600" id="content-error">
                            {printError(errors.content)}
                        </p>}
                    </div>
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

function EditorComponent({initialValue, error}) {
    const [value, setValue] = useState(initialValue ?? '');
    useEffect(() => setValue(initialValue ?? ''), [initialValue]);

    return (
        <div
            className={classNames(
                error ? "border border-red-600" : "",
                "mt-2 rounded-xl")}>
            <input type="hidden" name={"post[content]"} defaultValue={value}/>
            <Editor
                apiKey={TINY_API_KEY}
                initialValue={initialValue}
                value={value}
                onEditorChange={(newValue) => setValue(newValue)}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </div>
    );
}

function CoverComponent({cover, error}) {
    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="col-span-full">
            <label htmlFor="cover-photo" className="font-semibold text-gray-500">
                Cover photo
            </label>
            <div
                className={classNames(
                    error ? "border-red-600" : "border-dashed border-gray-900/25 ",
                    "mt-2 flex justify-center rounded-lg border px-6 py-10")}>
                <div className="text-center">
                    {file && <img src={file} className={"h-56 w-auto"}/>}
                    {!file && cover && <img src={imageUrl(cover.medium.url)} className={"h-56 w-auto"}/>}
                    {!file && !cover && <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true"/>}
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                            htmlFor="cover"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                            <span>Upload a file</span>
                            <input id="cover" name="post[cover]" type="file" className="sr-only"
                                   defaultValue={file}
                                   onChange={handleChange}
                            />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
            </div>
            {error && <p className="my-2 text-sm text-red-600" id="cover-error">
                {printError(error)}
            </p>}
        </div>
    )
}