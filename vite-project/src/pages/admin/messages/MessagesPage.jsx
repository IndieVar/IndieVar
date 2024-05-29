import axios from "axios";
import {API_URL} from "../../../../app/constants.js";
import {useLoaderData} from "react-router-dom";

export const messagesLoader = async () => {
    const {data} = await axios.get(`${API_URL}/messages`);
    return data
}

const MessagesPage = () => {
    const messages = useLoaderData()
    console.log(messages)

    return (
        <>
            <h1 className="text-3xl font-bold underline">Admin Dashboard</h1>
            <ul>
                <li>Id: {currentUser.id}</li>
                <li>Email: {currentUser.email}</li>
                <li>Role: {currentUser.role}</li>
            </ul>
        </>
    )
}
export default MessagesPage;