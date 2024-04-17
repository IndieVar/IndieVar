import {useState} from "react";
import axios from "axios";
import {API_URL} from "../../config/constants.jsx";
import {useTranslation} from "react-i18next";

export default function HeroComponent({quote}) {
    const {i18n, t} = useTranslation();
    const [window, setWindow] = useState('quote')
    const windowClass = (active) => (
        active
            ? "border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white"
            : "border-r border-gray-600/10 px-4 py-2 cursor-pointer hover:text-white"
    )


    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 ">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">
                                <img
                                    className="h-11"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt="Your Company"
                                />

                                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Веб-разработка на Ruby on Rails & React.js
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Привет 👋🏻 Меня зовут Александр и я независимый Fullstack разработчик, готовый
                                    оказать тебе свои услуги 👨🏻‍💻
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href="#"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Консультация
                                    </a>
                                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                        View on GitHub <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
                            aria-hidden="true"
                        />
                        <div className="shadow-lg md:rounded-3xl">
                            <div
                                className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                                <div
                                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                                    aria-hidden="true"
                                />
                                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                                    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                                <div
                                                    className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                                    <div
                                                        className={windowClass(window === 'quote')}
                                                        onClick={() => setWindow('quote')}
                                                    >
                                                        QuoteComponent.jsx
                                                    </div>
                                                    <div
                                                        className={windowClass(window === 'controller')}
                                                        onClick={() => setWindow('controller')}
                                                    >
                                                        App.jsx
                                                    </div>
                                                </div>
                                            </div>
                                            {window === 'quote' && <QuoteComponent quote={quote} locale={i18n.language}/>}
                                        </div>
                                    </div>
                                    <div
                                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"/>
            </div>
        </div>
    )
}

function QuoteComponent({quote, locale}) {
    const quoteHandler = () => {
        axios.put(`${API_URL}/quotes/${quote.id}`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return alert(quote[locale])
    }
    return (
        <div className="px-6 pb-14 pt-6">
            <x-placeholder message="Your code example">
            <pre
                className="text-[0.8125rem] leading-6 text-gray-300"
                style={{tabSize: 2}}
            >
              <code>
                import {"{"} <span className="text-[#7dd3fc]">Success</span> {"}"} from{" "}
                  <span className="text-emerald-300">'experience'</span>
                  {"\n"}
                  {"\n"}
                  <span className="text-indigo-400">function QuoteComponent</span>({"{quote}"}) {"{"}
                  {"\n"}
                  {"\n"}
                  {"\t"}return ({"\n"}
                  {"\t"}{"\t"}&lt;<span className="text-indigo-400">div</span>&gt;{"\t"}{"\t"}
                  <div
                      className={"cursor-pointer group"}
                      onClick={() => quoteHandler()}>
                      {"\t"}{"\t"}{"\t"}&lt;<span className="text-indigo-400">
                      button <span className={'text-white'}>onClick={"{"}() => alert(quote){"}"}</span>
                      </span>&gt;
                      {"\n"}
                      {"\t"}{"\t"}{"\t"}{"\t"}<span
                      className="text-gray-400 group-hover:text-blue-500">Показать цитату</span>
                      {"\n"}
                      {"\t"}{"\t"}{"\t"}&lt;/<span className="text-indigo-400">button</span>&gt;
                  </div>
                  {"\t"}{"\t"}&lt;/<span className="text-indigo-400">div</span>&gt;{"\n"}
                  {"\t"}){"\n"}
                  {"}"}
              </code>
            </pre>
            </x-placeholder>
        </div>
    )
}