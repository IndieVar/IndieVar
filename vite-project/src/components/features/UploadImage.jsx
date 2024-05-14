import {useState} from "react";
import {classNames, imageUrl, printError} from "../../../app/functions.js";
import {PhotoIcon} from "@heroicons/react/20/solid/index.js";

export default function UploadImage({inputName, image, error}) {
    const [file, setFile] = useState();

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="col-span-full py-6">
            <label htmlFor="image-photo" className="font-semibold text-gray-500">
                Cover photo
            </label>
            <div
                className={classNames(
                    error && !file ? "border-red-600" : "border-dashed border-gray-900/25 ",
                    "mt-2 flex justify-center rounded-lg border px-6 py-10")}>
                <div className="text-center">
                    {file &&
                        <img src={file} className={"h-56 w-auto"}/>}
                    {!file && image && image?.url !== null &&
                        <img src={imageUrl(image?.medium?.url)} className={"h-56 w-auto"}/>}
                    {!file && (!image || image?.url === null) &&
                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true"/>}
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                            htmlFor="image"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                            <span>Upload a file</span>
                            <input id="image" name={inputName} type="file" className="sr-only"
                                   defaultValue={file}
                                   onChange={handleChange}
                            />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
            </div>
            {error && !file && <p className="my-2 text-sm text-red-600" id="image-error">
                {printError(error)}
            </p>}
        </div>
    )
}