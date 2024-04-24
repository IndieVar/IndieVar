import React, {useState} from "react";
import {Form, NavLink, useLoaderData} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../../../app/constants.js";

export const quoteLoader = async ({request, params}) => {
    const {data} = await axios.get(`${API_URL}/quotes/${params.id}`);
    return data
}

export function QuoteForm() {
    const quote = useLoaderData()
    const formMethod = quote ? 'patch' : 'post'
    const formAction = `/admin/quotes/${quote ? quote.id + '/update' : 'new'}`
    const [isError, setIsError] = useState(false)

    return (
        <div className="lg:ml-12 py-3 border-b border-gray-200 bg-white">
            <div className="mb-8 md:flex md:items-center md:justify-between">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        {quote ? 'Edit quote' : 'Create new quote'}
                    </h2>
                </div>
                <div className="mt-4 flex md:ml-4 md:mt-0">
                    <NavLink
                        to={"/admin/quotes"}
                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        Back
                    </NavLink>
                </div>
            </div>
            <Form method={formMethod}
                  action={formAction}
            >
                <div>
                    <label htmlFor="ru" className={"font-semibold text-gray-500"}>Russian</label>
                    <textarea
                        rows={3}
                        name="ru"
                        id="ru"
                        required
                        className="mb-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Add your Russian text..."
                        defaultValue={quote?.ru || ''}
                    />
                    <label htmlFor="en" className={"font-semibold text-gray-500"}>English</label>
                    <textarea
                        rows={3}
                        name="en"
                        id="en"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Add your English text..."
                        defaultValue={quote?.en || ''}
                    />
                </div>
                <div className="mt-2 flex justify-end">
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