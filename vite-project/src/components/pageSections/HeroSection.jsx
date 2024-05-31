import {useState} from "react";
import axios from "axios";
import {API_URL} from "../../../app/constants.js";
import {useTranslation} from "react-i18next";
import {FaBattleNet} from "react-icons/fa";
import {Link} from "react-router-dom";
import ContactForm, {ContactFormBtn} from "../forms/ContactForm.jsx";

export default function HeroSection({quote}) {
    const [isOpenContactForm, setIsOpenContactForm] = useState(false)
    const {t} = useTranslation();
    const [window, setWindow] = useState('quote')
    const windowClass = (active) => (
        active
            ? "border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white"
            : "border-r border-gray-600/10 px-4 py-2 cursor-pointer hover:text-white"
    )


    return (
        <>
            <ContactForm isOpen={isOpenContactForm} setIsOpen={setIsOpenContactForm}/>
            <div className="bg-white">
                <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                    <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 ">
                        <div className="px-6 lg:px-0 lg:pt-4">
                            <div className="mx-auto max-w-2xl">
                                <div className="max-w-lg">
                                    <FaBattleNet className={"h-11 w-11"}/>

                                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                        {t('hero.title')}
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                        {t('hero.subtitle')}
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <ContactFormBtn setIsOpen={setIsOpenContactForm}/>
                                        <Link to={"https://github.com/IndieVar/IndieVar"} target={'_blank'}
                                              className="font-semibold leading-6 text-gray-700 hover:text-gray-900 hover:underline"
                                        >
                                            View on GitHub <span aria-hidden="true">→</span>
                                        </Link>
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
                                    <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0 overflow-x-scroll sm:overflow-hidden">
                                        <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                                            <div className="w-screen overflow-x-scroll sm:overflow-hidden rounded-tl-xl bg-gray-900">
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
                                                            QuotesController.rb
                                                        </div>
                                                    </div>
                                                </div>
                                                {window === 'quote' &&
                                                    <QuoteComponent quote={quote}/>}
                                                {window === 'controller' && <ControllerComponent quote={quote}/>}
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
        </>
    )
}

function QuoteComponent({quote}) {
    const {i18n, t} = useTranslation();
    const quoteHandler = () => {
        axios.put(`${API_URL}/quotes/${quote.id}/update_views`, {})
        return alert(quote[i18n.language])
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
                      button <span className={'text-white'}>onClick={"{() => alert(quote)}"}</span>
                      </span>&gt;
                      {"\n"}
                      {"\t"}{"\t"}{"\t"}{"\t"}<span
                      className="text-gray-400 group-hover:text-blue-500">{t("hero.show_quote")}</span>
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

function ControllerComponent() {

    return (
        <div className="px-6 pb-14 pt-6">
            <x-placeholder message="Your code example">
            <pre
                className="text-[0.8125rem] leading-6 text-gray-300"
                style={{tabSize: 2}}
            >
              <code>
                  <span className={"text-yellow-600"}>class </span>
                  <span className={"text-gray-100"}>Api</span><span className={"text-gray-300"}>::</span>
                  <span className={"text-gray-100"}>V1</span><span className={"text-gray-300"}>::</span>
                  <span className="text-orange-300">QuotesController</span>
                  <span className={"text-gray-300"}> &lt; </span>
                  <span className={"text-gray-100"}>ApplicationController</span>
                  {"\n"}
                  {"\n"}
                  {"\t"}
                  {/*Show*/}
                  <span className="text-yellow-600">def <span className="text-orange-300">get_random_quote</span></span>
                  {"\n"}
                  {"\t"}
                  {"\t"}
                  <span>@quote</span><span className={"text-gray-300"}> = </span>
                  <span className={"text-white"}>Quote</span>
                  <span className={"text-gray-300"}>.order(
                      <span className={"text-lime-600"}>"RANDOM()"</span>
                      ).limit(
                      <span className="text-indigo-300">1</span>
                      ).first</span>
                  {"\n"}
                  {"\n"}
                  {"\t"}
                  {"\t"}
                  <span className={"text-orange-400"}>render</span>
                  <span className="text-indigo-300"> json: </span>
                  <span>@quote</span>
                  {"\n"}
                  {"\t"}
                  <span className={"text-yellow-600"}>end</span>
                  {"\n"}
                  {"\n"}
                  <span className={"text-yellow-600"}>end</span>
              </code>
            </pre>
            </x-placeholder>
        </div>
    )
}