import React, {useState} from "react"
import axios from "axios";
import {AUTH_API_URL} from "../../../app/constants.js";
import {Navigate} from "react-router-dom";
import {useAuth} from "../../providers/AuthProvider.jsx";

const roleRedirect = {
    user: '/',
    moderator: '/',
    admin: '/admin/dashboard'
}

export default function LoginPage() {
    const {login, currentUser} = useAuth()
    if (currentUser) return <Navigate to={roleRedirect[currentUser.role]} replace/>;

    const [formData, setFormData] = React.useState({email: '', password: ''})
    const [isError, setIsError] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post(`${AUTH_API_URL}/sign_in`, formData)
            .then((res) => {
                if (res.status === 200) {
                    login(res.data)
                    location.reload()
                }
            }).catch((error) => {
            setIsError(true)
        })
    }

    const inputBorderColor = isError ? 'ring-red-300 ' : 'ring-gray-300 '
    const loginFailedMessage = (
        <p className={'text-red-700 text-center text lg -my-3 '}>
            Wrong email or password!
        </p>
    )

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-32 w-auto"
                        src="/Logotype.png"
                        alt="IndieVar Logotype"
                    />
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to Admin
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={onSubmit}>
                        {isError && loginFailedMessage}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className={inputBorderColor + " block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className={inputBorderColor + " block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
