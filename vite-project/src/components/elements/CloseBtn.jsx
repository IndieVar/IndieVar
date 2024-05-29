import {XMarkIcon} from "@heroicons/react/24/outline/index.js";
import React from "react";

export default function CloseBtn({setIsOpen}) {

    return (
        <button type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setIsOpen(false)}>
            <span className="sr-only">Close window</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
        </button>
    )
}