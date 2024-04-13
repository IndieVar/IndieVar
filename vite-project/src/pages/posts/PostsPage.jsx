import axios from "axios";
import {API_URL, TEST_API_URL} from "../../config/constants.jsx";
import {useLoaderData} from "react-router-dom";
import React from "react";
import PostsList from "../../features/posts/PostsList.jsx";

export const postsLoader = async ({request, params}) => {
    const {data} = await axios.get(`${TEST_API_URL}/posts`);
    return data
}

const PostsPage = () => {
    const posts = useLoaderData();

    return (
        <div>
            <PostsList posts={posts}/>
        </div>
    )
}
export default PostsPage;