import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {useCloseByClickOutside} from "../../app/hooks.js";
import Loading from "./Loading.jsx";
import {classNames, printError} from "../../app/functions.js";
import axios from "axios";
import {API_URL} from "../../app/constants.js";
import CloseBtn from "./CloseBtn.jsx";
import {CheckIcon} from "@heroicons/react/20/solid/index.js";

export default function ContactForm({isOpen, setIsOpen}) {
    const {t} = useTranslation();
    const {modalRef} = useCloseByClickOutside({isOpen, setIsOpen})
    const [alert, setAlert] = useState(false)

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
                                {t('contact_form.title')}
                            </h3>
                            <CloseBtn setIsOpen={setIsOpen}/>
                        </div>
                        {/* Modal body */}
                        {alert && <AlertComponent/>}
                        {!alert && <FormComponent setAlert={setAlert}/>}
                    </div>
                </div>
            </div>}
        </>
    )
}

function FormComponent({setAlert}) {
    const {t} = useTranslation()
    const [isLoading, setIsLoading] = useState(true)
    const [formData, setFormData] = useState({
            name: '', email: '', text: ''
        }
    )
    const [errors, setErrors] = useState({})

    const onSubmit = (e) => {
        setIsLoading(true)
        e.preventDefault()
        axios.post(`${API_URL}/messages`, formData)
            .then((res) => {
                setErrors({})
                setIsLoading(false)
                setAlert(true)
            }).catch((err) => {
            setErrors(err.response.data)
        })
    }

    useEffect(() => {
        setIsLoading(false)
    }, [isLoading]);

    if (isLoading) return <Loading/>

    return (
        <form
            onSubmit={onSubmit}
            className="p-4 md:p-5"
        >
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
                        name="message[name]"
                        id="name"
                        placeholder="Your name"
                        required
                        className={classNames(
                            errors.name ? "border border-red-600" : "border-0",
                            "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        )}
                        defaultValue={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    {errors?.name && <p className="my-2 text-sm text-red-600" id={"name-error"}>
                        {printError(errors.name)}
                    </p>}
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
                        name="message[email]"
                        id="email"
                        placeholder="Your email"
                        required
                        className={classNames(
                            errors.email ? "border border-red-600" : "border-0",
                            "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        )}
                        defaultValue={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    {errors?.email && <p className="my-2 text-sm text-red-600" id={"email-error"}>
                        {printError(errors.email)}
                    </p>}
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
                        name={"message[text]"}
                        rows={5}
                        placeholder="Write your message here"
                        required
                        className={classNames(
                            errors.text ? "border border-red-600" : "border-0",
                            "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        )}
                        defaultValue={formData.text}
                        onChange={(e) => setFormData({...formData, text: e.target.value})}
                    />
                    {errors?.text && <p className="my-2 text-sm text-red-600" id={"text-error"}>
                        {printError(errors.text)}
                    </p>}
                </div>
            </div>
            <div className="mt-6 flex justify-end">
                <button
                    type="submit"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {t('contact_form.post')}
                </button>
            </div>
        </form>
    )
}

function AlertComponent() {
    const {t} = useTranslation();

    return (
        <div className={"p-10"}>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true"/>
            </div>
            <div className="mt-3 text-center sm:mt-5">
                <p className="text-base font-semibold leading-6 text-gray-900">
                    {t('contact_form.alert.title')}
                </p>
                <div className="mt-2">
                    <p className="text-sm text-gray-500">
                        {t('contact_form.alert.subtitle')}
                    </p>
                </div>
            </div>
        </div>

    )
}

export function ContactFormBtn({setIsOpen}) {
    const {t} = useTranslation();

    return (
        <button
            onClick={() => setIsOpen(true)}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            {t('contact_form.open_form_btn')}
        </button>
    )
}