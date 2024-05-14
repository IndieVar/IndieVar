import HeroComponent from "./HeroComponent.jsx";
import {API_URL} from "../../../app/constants.js";
import axios from "axios";
import {useLoaderData} from "react-router-dom";
import TechnologyComponent from "./TechnologyComponent.jsx";
import BlogComponent from "./BlogComponent.jsx";

export const homeLoader = async () => {
    const {data} = await axios.get(`${API_URL}/home`);
    return data
}

export default function HomePage() {
    const data = useLoaderData()

    return (
        <>
            <HeroComponent quote={data.quote}/>
            <TechnologyComponent/>
            <BlogComponent posts={JSON.parse(data.posts)}/>
        </>
    )
}
