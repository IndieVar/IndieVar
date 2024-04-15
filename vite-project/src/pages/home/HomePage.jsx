import HeroComponent from "./HeroComponent.jsx";
import {API_URL} from "../../config/constants.jsx";
import axios from "axios";
import {useLoaderData} from "react-router-dom";

export const quoteLoader = async ({request, params}) => {
    const {data} = await axios.get(`${API_URL}/quotes/1`);
    return data
}
export default function HomePage() {
    const quote = useLoaderData()

    return (
        <>
            <HeroComponent quote={quote}/>
        </>
    )
}
