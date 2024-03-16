import React, {useEffect, useState} from 'react';
import {API_URL} from "../../constants.js";

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);

    useEffect(() => {
        async function loadPosts() {
            try {
                fetch(`${API_URL}/posts`)
                    .then((response) => response.json())
                    .then((json) => {
                        console.log(json)
                        setPosts(json)
                    });
                // const response = await fetch(`${API_URL}/posts`);
                // if (response.ok) {
                //     const json = await response.json();
                //     setPosts(json);
                // } else {
                //     throw response;
                // }
            } catch (e) {
                setError("An error occurred. Awkward...");
                console.log("An error occurred", e);
            } finally {
                setLoading(false);
            }
        }

        loadPosts();
        // console.log(posts)
    }, []);
    console.log(posts)

    return (
        <div>
            {posts && posts.map((post) => {
                <div key={post.id} className={""}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            })}

        </div>
    )
}

export default PostsList;