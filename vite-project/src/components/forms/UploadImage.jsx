import React, {useState} from "react";
import {classNames, imageUrl, printError} from "../../../app/functions.js";
import {PhotoIcon} from "@heroicons/react/20/solid/index.js";
import {XMarkIcon} from "@heroicons/react/24/outline/index.js";

export default function UploadImage({label, inputName, image, error}) {
    const [file, setFile] = useState();

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="col-span-full py-6">
            <label htmlFor="image-photo"
                   className="font-semibold text-gray-500 text-center text-xl">{label}</label>
            <div
                className={classNames(
                    error && !file ? "border-red-600" : "border-dashed border-gray-300/25 ",
                    "mt-2 flex justify-center rounded-lg border px-6 py-10")}>
                <label
                    htmlFor="image"
                    className="relative cursor-pointer rounded-md p-2 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-1 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                    {file && <div className={"relative"}>
                        <button type="button"
                                className="absolute top-0 right-0 text-gray-400 bg-red-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 w-6 h-6 ms-auto inline-flex justify-center items-center"
                                onClick={() => setFile(undefined)}>
                            <span className="sr-only">Remove file</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true"/>
                        </button>
                        <img src={file} className={"h-56 w-auto"}/>
                    </div>}
                    {!file && image && image?.url !== null &&
                        <img src={imageUrl(image?.medium?.url)} className={"h-56 w-auto"}/>}
                    {!file && (!image || image?.url === null) &&
                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true"/>}
                    <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                        <span className={"rounded-md bg-white px-2 py-1 mb-2"}>Upload a file</span>
                        <input id="image" name={inputName} type="file" className="sr-only"
                               defaultValue={file}
                               onChange={handleChange}
                        />
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </label>
            </div>
            {error && !file && <p className="my-2 text-sm text-red-600" id="image-error">
                {printError(error)}
            </p>}
        </div>
    )
}