import axios from "axios";
import {API_URL} from "./constants.js";
import api from "./config/api.jsx";

export const homeLoader = async () => {
    const {data} = await axios.get(`${API_URL}/home`);
    return data
}

export const publicPostsLoader = async () => {
    const {data} = await axios.get(`${API_URL}/public_posts`);
    return data
}

export const postsLoader = async () => {
    const {data} = await api.get(`${API_URL}/posts`);
    return data
}

export const singlePostLoader = async ({params}) => {
    const {data} = await axios.get(`${API_URL}/posts/${params.id}`);
    return data
}

export const messagesLoader = async () => {
    const {data} = await api.get(`${API_URL}/messages`);
    return data
}

export const singleMessageLoader = async ({params}) => {
    const {data} = await api.get(`${API_URL}/messages/${params.id}`);
    return data
}

export const quotesLoader = async () => {
    const {data} = await api.get(`${API_URL}/quotes`);
    return data
}

export const singleQuoteLoader = async ({params}) => {
    const {data} = await api.get(`${API_URL}/quotes/${params.id}`);
    return data
}