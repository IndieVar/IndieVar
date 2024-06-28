import {Form, useLoaderData} from "react-router-dom";
import {MdPlaylistRemove} from "react-icons/md";
import {useAlert} from "../../../../app/hooks.js";
import PageHeader from "../../../components/user/PageHeader.jsx";
import React from "react";

export default function SingleMessagePage() {
    const message = useLoaderData()
    useAlert()

    return (
        <div className="lg:ml-12 py-3 border-b border-gray-200 bg-white">
            <PageHeader title={message.email}/>
            <div className={'group relative border rounded-lg p-6'}>
                <div className="flex justify-end items-center divide-x">
                    {/*Delete*/}
                    <Form method="delete" action={`/admin/messages/${message.id}/delete`}
                          className={"text-gray-500 hover:text-red-700"}>
                        <button type="submit">
                            <MdPlaylistRemove className={"w-6 h-6 ml-3"}/>
                        </button>
                    </Form>
                </div>
                <div className={"flex-col space-y-6"}>
                    <div className={"flex items-center space-x-3"}>
                        <span className={"text-gray-500 text-sm"}>Name: </span>
                        <p className="text-base text-gray-700">
                            {message.name}
                        </p>
                    </div>
                    <div className={"flex items-center space-x-3"}>
                        <span className={"text-gray-500 text-sm"}>Email: </span>
                        <a href={`mailto:${message.email}`} className="text-base text-gray-700 underline">
                            {message.email}
                        </a>
                    </div>
                    <div className={"flex items-center space-x-3"}>
                        <span className={"text-gray-500 text-sm"}>Text: </span>
                        <p className="text-base text-gray-700">
                            {message.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}