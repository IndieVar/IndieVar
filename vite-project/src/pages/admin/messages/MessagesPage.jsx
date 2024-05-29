import {API_URL} from "../../../../app/constants.js";
import {Form, NavLink, useLoaderData} from "react-router-dom";
import api from "../../../../app/config/api.jsx";
import {MdPlaylistRemove} from "react-icons/md";
import {LuMailOpen} from "react-icons/lu";
import {IoMailUnreadOutline} from "react-icons/io5";

export const messagesLoader = async () => {
    const {data} = await api.get(`${API_URL}/messages`);
    return data
}

export default function MessagesPage() {
    const messages = useLoaderData()

    return (
        <>
            <div className="lg:ml-12 py-3 border-b border-gray-200 bg-white">
                <div className="mb-8 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="min-w-0 flex-1">
                        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            {"All messages"}
                        </h1>
                    </div>
                </div>
                <div
                    className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                    {messages.map((message) => (
                        <MessageComponent key={message.id} message={message}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export function MessageComponent({message}) {

    if (!message) return

    return (
        <div className={'group relative bg-white p-6'}>
            <div className=" flex justify-end items-center divide-x">
                {/*Open*/}
                <NavLink to={`/admin/messages/${message.id}`} className={"text-gray-500 hover:text-blue-700"}>
                    {message.viewed === false
                        ? <IoMailUnreadOutline className={"w-6 h-6 mx-3 text-blue-700"}/>
                        : <LuMailOpen className={"w-5 h-5 mx-3"}/>}
                </NavLink>
                {/*Delete*/}
                <Form method="delete" action={`/admin/messages/${message.id}/delete`}
                      className={"text-gray-500 hover:text-red-700"}>
                    <button type="submit">
                        <MdPlaylistRemove className={"w-6 h-6 ml-3"}/>
                    </button>
                </Form>
            </div>
            <div className={"flex-col space-y-3"}>
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
                <NavLink to={`/admin/messages/${message.id}`} className={"flex items-center space-x-3"}>
                    <span className={"text-gray-500 text-sm"}>Text: </span>
                    <p className="text-base text-gray-700">
                        {message.text}
                    </p>
                </NavLink>
            </div>
        </div>
    )
}



