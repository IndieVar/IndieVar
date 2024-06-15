import {NavLink} from "react-router-dom";
import BackBtn from "./BackBtn.jsx";
import React from "react";

export default function PageHeader({title, path = undefined, pathTitle = undefined}) {

    return (
        <div className="mb-8 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="min-w-0 flex-1">
                <h1 className="text-2xl font-bold leading-7 text-gray-700 sm:truncate sm:text-3xl sm:tracking-tight">
                    {title}
                </h1>
            </div>
            <div
                className="sm:mb-8 flex flex-wrap items-center justify-between sm:flex-nowrap space-x-3 rtl:space-x-reverse">
                {path && <div className="ml-4 flex items-center">
                    <NavLink
                        to={path}
                        className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {pathTitle}
                    </NavLink>
                </div>}
                <BackBtn/>
            </div>
        </div>
    )
}