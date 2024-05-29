import {useAuth} from "../../../providers/AuthProvider.jsx";
import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {Form, useLocation} from "react-router-dom";
import {useAlert} from "../../../../app/hooks.js";
import Loading from "../../../components/elements/Loading.jsx";
import {classNames, printError} from "../../../../app/functions.js";
import UploadImage from "../../../components/forms/UploadImage.jsx";

export default function ProfilePage() {
    const {currentUser} = useAuth()

    const {t} = useTranslation('admin')
    const [isLoading, setIsLoading] = useState(true)
    const {state} = useLocation()
    const errors = state?.errors || false
    useAlert()

    useEffect(() => {
        setIsLoading(false)
    }, [state]);

    if (isLoading) return <Loading/>

    return (
        <div className="lg:ml-12 py-3 border-b border-gray-200 bg-white">
            <div className="mb-8 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="min-w-0 flex-1">
                    <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        {t('profile.title')}
                    </h1>
                </div>
            </div>
            <div>
                <Form method={"put"}
                      action={"/admin/profile"}
                      encType={"multipart/form-data"}
                      onSubmit={() => setIsLoading(true)}
                >
                    <UploadImage
                        label={"Avatar"}
                        inputName={"user[avatar]"}
                        image={currentUser?.avatar}
                        error={errors?.avatar}/>
                    <TextContent user={currentUser} errors={errors} />
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
    )
}


function TextContent({user, errors}) {

    return (
        <div className={"mt-6 space-y-6"}>
            <div>
                <label htmlFor="name" className={"font-semibold text-gray-500"}>Name</label>
                <input
                    name={"user[name]"}
                    id={"name"}
                    // required
                    className={classNames(
                        errors.name ? "border border-red-600" : "border-0",
                        "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    )}
                    placeholder="Name"
                    defaultValue={user.name}
                />
                {errors.name && <p className="my-2 text-sm text-red-600" id={"name-error"}>
                    {printError(errors.name)}
                </p>}
            </div>
            <div>
                <label htmlFor="email" className={"font-semibold text-gray-500"}>Email</label>
                <input
                    name={"user[email]"}
                    id={"email"}
                    // required
                    className={classNames(
                        errors.email ? "border border-red-600" : "border-0",
                        "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    )}
                    placeholder="Email"
                    defaultValue={user.email}
                />
                {errors.email && <p className="my-2 text-sm text-red-600" id={"email-error"}>
                    {printError(errors.email)}
                </p>}
            </div>
            <div>
                <label htmlFor="password" className={"font-semibold text-gray-500"}>New password</label>
                <input
                    name={"user[password]"}
                    id={"password"}
                    // required
                    className={classNames(
                        errors.password ? "border border-red-600" : "border-0",
                        "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    )}
                    placeholder="New password"
                    defaultValue={''}
                />
                {errors.password && <p className="my-2 text-sm text-red-600" id={"password-error"}>
                    {printError(errors.password)}
                </p>}
            </div>
            <div>
                <label htmlFor="password_confirmation" className={"font-semibold text-gray-500"}>Password
                    confirmation</label>
                <input
                    name={"user[password_confirmation]"}
                    id={"password_confirmation"}
                    // required
                    className={classNames(
                        errors.password_confirmation ? "border border-red-600" : "border-0",
                        "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    )}
                    placeholder="Password confirmation"
                    defaultValue={''}
                />
                {errors.password_confirmation &&
                    <p className="my-2 text-sm text-red-600" id={"password_confirmation-error"}>
                        {printError(errors.password_confirmation)}
                    </p>}
            </div>
            <div>
                <label htmlFor="current_password" className={"font-semibold text-gray-500"}>Current password</label>
                <input
                    name={"user[current_password]"}
                    id={"current_password"}
                    // required
                    className={classNames(
                        errors.current_password ? "border border-red-600" : "border-0",
                        "mb-2 mt-1 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    )}
                    placeholder="Current password"
                    defaultValue={''}
                />
                {errors.current_password && <p className="my-2 text-sm text-red-600" id={"current_password-error"}>
                    {printError(errors.current_password)}
                </p>}
            </div>
        </div>
    )
}