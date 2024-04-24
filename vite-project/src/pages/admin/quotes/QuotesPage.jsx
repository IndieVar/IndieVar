import axios from "axios";
import {API_URL} from "../../../../app/constants.js";
import {NavLink, useLoaderData} from "react-router-dom";
import {useTranslation} from "react-i18next";
import QuoteComponent from "./QuoteComponent.jsx";
import React from "react";

export const quotesLoader = async ({request, params}) => {
    const {data} = await axios.get(`${API_URL}/quotes`);
    return data
}

export default function QuotesPage() {
    const quotes = useLoaderData()
    const {i18n} = useTranslation()

    return (
        <div className="lg:ml-12 py-3 border-b border-gray-200 bg-white">
            <div className="mb-8 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="min-w-0 flex-1">
                    <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Quotes
                    </h1>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink
                        to={'/admin/quotes/new'}
                        type="button"
                        className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create new quote
                    </NavLink>
                </div>
            </div>
            <div
                className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                {quotes.map((quote) => (
                    <QuoteComponent key={quote.id} quote={quote} locale={i18n.language}/>
                ))}
            </div>
        </div>
    )
}



