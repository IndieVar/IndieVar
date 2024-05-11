import {useEffect, useState} from "react";
import {classNames, printError} from "../../../app/functions.js";
import {Editor} from "@tinymce/tinymce-react";
import {TINY_API_KEY} from "../../../app/constants.js";

export default function EditorComponent({inputName, initialValue, error}) {
    const [value, setValue] = useState(initialValue ?? '');
    useEffect(() => setValue(initialValue ?? ''), [initialValue]);

    return (
        <div>
            <label htmlFor="content" className={"font-semibold text-gray-500"}>Content</label>
            <div
                className={classNames(
                    error ? "border border-red-600" : "",
                    "mt-2 rounded-xl")}>
                <input type="hidden" name={inputName} defaultValue={value}/>
                <Editor
                    apiKey={TINY_API_KEY}
                    initialValue={initialValue}
                    value={value}
                    onEditorChange={(newValue) => setValue(newValue)}
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
            </div>
            {error && <p className="my-2 text-sm text-red-600" id="content-error">
                {printError(error)}
            </p>}
        </div>

    );
}
