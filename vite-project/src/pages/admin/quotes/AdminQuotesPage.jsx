import {API_URL} from "../../../../app/constants.js";
import {Form, NavLink, useLoaderData} from "react-router-dom";
import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {MdOutlineEditNote, MdPlaylistRemove} from "react-icons/md";
import {IoEyeOutline} from "react-icons/io5";
import {useAlert} from "../../../../app/hooks.js";
import api from "../../../../app/config/api.jsx";
import {supportedLngs} from "../../../../app/i18n/config.js";
import PageHeader from "../../../components/user/PageHeader.jsx";

export const quotesLoader = async () => {
    const {data} = await api.get(`${API_URL}/quotes`);
    return data
}

export default function AdminQuotesPage() {
    const quotes = useLoaderData()
    const {i18n, t} = useTranslation('admin')

    return (
        <div className="lg:ml-12 py-3 border-b border-gray-200 bg-white">
            <PageHeader title={t('quotes.all_quotes')} path={'/admin/quotes/new'} pathTitle={t('quotes.new_quote')}/>
            <div
                className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                {quotes.map((quote) => (
                    <QuoteComponent key={quote.id} quote={quote} locale={i18n.language}/>
                ))}
            </div>
        </div>
    )
}

export function QuoteComponent({quote, locale}) {
    const [lang, setLang] = useState()
    useAlert()

    if (!quote) return

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
                {/*Edit*/}
                <NavLink to={`/admin/quotes/${quote.id}/update`} className={"text-gray-500 hover:text-blue-700"}>
                    <MdOutlineEditNote className={"w-6 h-6 mx-3"}/>
                </NavLink>
                {/*Delete*/}
                <Form method="delete" action={`/admin/quotes/${quote.id}/delete`}
                      className={"text-gray-500 hover:text-red-700 flex items-center"}>
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



