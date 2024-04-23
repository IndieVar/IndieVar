import {Form, redirect} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../../app/constants.js";

export const postActions = async ({request, params}) => {
    switch (request.method) {
        case 'POST': {
            const formData = await request.formData();

            const newPost = {
                title: formData.get('title'),
                body: formData.get('content'),
            }

            await axios.post(`${API_URL}/posts`, newPost)
            return redirect('/posts')
        }
        case 'PUT': {
            console.log('Logic to update post here')
        }
        case 'DELETE': {
            console.log('Logic to delete post here')
        }
    }
}

export default function PostForm() {
    return (
        <Form
            method={'post'}
            action={`/posts/new`}
        >
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">New Post</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        This information will be displayed publicly so be careful what you share.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">#</span>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        autoComplete="title"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="indiDev"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="content" className="block text-sm font-medium leading-6 text-gray-900">
                                Content
                            </label>
                            <div className="mt-2">
                <textarea
                    id="content"
                    name="content"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write your content here.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </Form>
    )
}
