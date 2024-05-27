import {XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {useTranslation} from "react-i18next";
import {Form} from "react-router-dom";
import {useEffect, useRef} from "react";
import {useCloseByClickOutside} from "../../app/hooks.js";

export default function ContactForm({isOpen, setIsOpen}) {
    const {t} = useTranslation("admin")

    const {modalRef} = useCloseByClickOutside({isOpen, setIsOpen})

    return (
        <>
            {isOpen && <div
                className="fixed inset-0 z-50 w-full h-full bg-gray-900/80 flex justify-center items-center"
            >
                <div className="relative p-4 w-full max-w-md max-h-full" ref={modalRef}>
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div
                            className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Contact form
                            </h3>

                                <button type="button"
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={() => setIsOpen(false)}>
                                    <span className="sr-only">Close sidebar</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                </button>
                        </div>
                        {/* Modal body */}
                        <Form className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Write your message here"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <button
                                    type="submit"
                                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {t('post')}
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>}
        </>

    )
}

export function ContactFormBtn({setIsOpen}) {
    const {t} = useTranslation();

    return (
        <button
            onClick={() => setIsOpen(true)}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            {t('hero.consultation')}
        </button>
    )
}