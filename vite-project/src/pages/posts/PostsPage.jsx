import axios from "axios";
import {API_URL} from "../../../app/constants.js";
import {useLoaderData} from "react-router-dom";
import PostCard from "../../features/PostCard.jsx";

export const postsLoader = async () => {
    const {data} = await axios.get(`${API_URL}/posts`);
    return data
}

export default function PostsPage() {
    const posts = useLoaderData();

    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Learn how to grow your business with our expert advice.
                </p>
            </div>
            <div
                className="overflow-hidden mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-2xl gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
}

