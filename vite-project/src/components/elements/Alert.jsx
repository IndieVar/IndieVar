import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Alert() {
    const {pathname, state} = useLocation();
    const navigate = useNavigate();
    const [alert, setAlert] = useState()

    useEffect(() => {
        setAlert(state?.alert)
    }, [state]);

    if (!alert) return

    const closeAlert = () => {
        setAlert(null)
        navigate(pathname, {state: null, replace: true})
    }

    return (
        <div className="fixed top-24 right-4 z-30 rounded-md bg-green-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">{alert}</p>
                </div>
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button
                            onClick={() => closeAlert()}
                            type="button"
                            className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                        >
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
