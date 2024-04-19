
import HeroComponent from "./HeroComponent.jsx";
import {API_URL} from "../../config/constants.jsx";
import axios from "axios";
import {useLoaderData} from "react-router-dom";
import TechnologyComponent from "./TechnologyComponent.jsx";
import BlogComponent from "./BlogComponent.jsx";

export const quoteLoader = async ({request, params}) => {
    const {data} = await axios.get(`${API_URL}/quotes/1`);
    return data
}

export default function HomePage() {
    const quote = useLoaderData()

    return (
        <>
            <HeroComponent quote={quote}/>
            <TechnologyComponent/>
            <BlogComponent/>
        </>
    )
}
