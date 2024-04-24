import {MdOutlineEditNote, MdPlaylistRemove} from "react-icons/md";
import React, {useEffect, useState} from "react";
import {IoEyeOutline} from "react-icons/io5";
import axios from "axios";
import {API_URL} from "../../../../app/constants.js";
import {Form, NavLink, redirect} from "react-router-dom";

export const quoteAction = async ({request, params}) => {
    const formData = await request.formData()
    const newQuote = {
        ru: formData.get('ru'),
        en: formData.get('en')
    }

    switch (request.method) {
        case 'POST': {
            await axios.post(`${API_URL}/quotes`, newQuote, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => console.log(res))
            return redirect('/admin/quotes')
        }
        case 'DELETE': {
            await axios.delete(`${API_URL}/quotes/${params.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            return redirect('/admin/quotes')
        }
    }

}

export default function QuoteComponent({quote, locale}) {
    const [lang, setLang] = useState()

    useEffect(() => {
        setLang(locale)
    }, [locale]);

    return (
        <div className={'group relative bg-white p-6'}>
            <div className="pb-6 flex justify-end items-center divide-x">
                {/*Lang*/}
                <button onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
                        className={"mr-3 text-gray-500 hover:text-gray-700 hover:underline"}>
                    {lang === 'ru' ? 'En' : 'Ru'}
                </button>
                {/*Edit*/}
                <button className={"text-gray-500 hover:text-blue-700"}>
                    <MdOutlineEditNote className={"w-6 h-6 mx-3"}/>
                </button>
                {/*Delete*/}
                <Form method="delete" action={`/admin/quotes/${quote.id}`}
                      className={"text-gray-500 hover:text-red-700"}>
                    <button type="submit">
                        <MdPlaylistRemove className={"w-6 h-6 ml-3"}/>
                    </button>
                </Form>
            </div>
            <p className="pb-6 text-base text-gray-500 group-hover:text-gray-700">
            {quote[lang]}
            </p>
            <div className={"absolute bottom-4 inset-x-1/2 w-full flex items-center space-x-2 text-gray-500 text-xs"}>
                <span>{quote.views}</span>
                <IoEyeOutline className={"w-4 h-4"}/>
            </div>
        </div>
    )
}


export function CreateQuote() {
    const [isError, setIsError] = useState(false)


    return (
        <div className="lg:ml-12 py-3 border-b border-gray-200 bg-white">
            <div className="mb-8 md:flex md:items-center md:justify-between">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Create new quote
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
            <Form method={"post"}
                  action={"/admin/quotes/new"}
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
                    />
                    <label htmlFor="en" className={"font-semibold text-gray-500"}>English</label>
                    <textarea
                        rows={3}
                        name="en"
                        id="en"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Add your English text..."
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