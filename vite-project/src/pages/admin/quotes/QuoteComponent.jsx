import {MdOutlineEditNote, MdPlaylistRemove} from "react-icons/md";
import {useEffect, useState} from "react";
import {IoEyeOutline} from "react-icons/io5";

export default function QuoteComponent({quote, locale}) {
    const [lang, setLang] = useState()

    useEffect(() => {
        setLang(locale)
    }, [locale]);

    return (
        <div className={'group relative bg-white p-6'}>
            <div className="pb-6 flex justify-end items-center divide-x">
                <button onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
                        className={"mr-3 text-gray-500 hover:text-gray-700 hover:underline"}>
                    {lang === 'ru' ? 'En' : 'Ru'}
                </button>
                <button className={"text-gray-500 hover:text-blue-700"}>
                    <MdOutlineEditNote className={"w-6 h-6 mx-3"}/>
                </button>
                <button className={"text-gray-500 hover:text-red-700"}>
                    <MdPlaylistRemove className={"w-6 h-6 ml-3"}/>
                </button>
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
