import {Form, NavLink, useLoaderData, useLocation} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../../../app/constants.js";
import {classNames, printError} from "../../../../app/functions.js";
import {useAlert} from "../../../../app/hooks.js";
import {useEffect, useState} from "react";
import Loading from "../../../components/Loading.jsx";

export const quoteLoader = async ({params}) => {
    const {data} = await axios.get(`${API_URL}/quotes/${params.id}`);
    return data
}

export function QuoteForm() {
    const [isLoading, setIsLoading] = useState(true)
    const quote = useLoaderData()
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
            <Form method={quote ? 'patch' : 'post'}
                  action={`/admin/quotes/${quote ? quote.id + '/update' : 'new'}`}
            >
                <div className={"space-y-6"}>
                    <div>
                        <label htmlFor="ru" className={"font-semibold text-gray-500"}>Russian</label>
                        <textarea
                            rows={3}
                            name="quote[ru]"
                            id="ru"
                            // required
                            className={classNames(
                                errors.ru ? "border border-red-600" : "border-0",
                                "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            )}
                            placeholder="Add your Russian text..."
                            defaultValue={quote?.ru || ''}
                        />
                        {errors?.ru && <p className="my-2 text-sm text-red-600" id="email-error">
                            {printError(errors.ru)}
                        </p>}
                    </div>
                    <div>
                        <label htmlFor="en" className={"font-semibold text-gray-500"}>English</label>
                        <textarea
                            rows={3}
                            name="quote[en]"
                            id="en"
                            // required
                            className={classNames(
                                errors.en ? "border border-red-600" : "border-0",
                                "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            )}
                            placeholder="Add your English text..."
                            defaultValue={quote?.en || ''}
                        />
                        {errors?.en && <p className="my-2 text-sm text-red-600" id="email-error">
                            {printError(errors.en)}
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