import axios from "axios";
import {API_URL, authHeader} from "./constants.js";
import {json, redirect} from "react-router-dom";

export const quotesAction = async ({request, params}) => {
    const formData = await request.formData()

    switch (request.method) {
        case 'POST': {
            return await axios.post(`${API_URL}/quotes`, formData, authHeader)
                .then(() => json({
                    data: { alert: "Successfully uploaded" },
                    redirect: "/admin/quotes"
                }))
                .catch((err) => json({
                    data: { errors: err.response.data },
                    redirect: "/admin/quotes/new"
                }))
        }
        case 'PATCH': {
           return await axios.patch(`${API_URL}/quotes/${params.id}`, formData, authHeader)
               .then(() => json({
                   data: { alert: "Successfully updated" },
                   redirect: "/admin/quotes"
               }))
               .catch((err) => json({
                   data: { errors: err.response.data },
                   redirect: `/admin/quotes/${params.id}/update`
               }))
        }
        case 'DELETE': {
            if (!window.confirm('Are you sure?')) return redirect('/admin/quotes')

            return await axios.delete(`${API_URL}/quotes/${params.id}`, authHeader)
                .then(() => json({
                    data: { alert: "Successfully deleted" },
                    redirect: "/admin/quotes"
                }))
        }
    }

}

export const postsAction = async ({request, params}) => {
    const formData = await request.formData()

    switch (request.method) {
        case 'POST': {
            return await axios.post(`${API_URL}/posts`, formData, authHeader)
                .then(() => json({
                    data: { alert: "Successfully uploaded" },
                    redirect: "/admin/posts"
                }))
                .catch((err) => json({
                    data: { errors: err.response.data },
                    redirect: "/admin/posts/new"
                }))
        }
        case 'PATCH': {
            return await axios.patch(`${API_URL}/posts/${params.id}`, formData, authHeader)
                .then(() => json({
                    data: { alert: "Successfully updated" },
                    redirect: "/admin/posts"
                }))
                .catch((err) => json({
                    data: { errors: err.response.data },
                    redirect: `/admin/posts/${params.id}/update`
                }))
        }
        case 'DELETE': {
            if (!window.confirm('Are you sure?')) return redirect('/admin/posts')

            return await axios.delete(`${API_URL}/posts/${params.id}`, authHeader)
                .then(() => json({
                    data: { alert: "Successfully deleted" },
                    redirect: "/admin/posts"
                }))
        }
    }

}

export const usersAction = async ({request, params}) => {
    const formData = await request.formData()

    switch (request.method) {
        case 'PUT': {
            return await axios.put(`${API_URL}/current_user/update`, formData, authHeader)
                .then(() => json({
                    data: { alert: "Successfully updated" },
                    redirect: "/admin/profile"
                }))
                .catch((err) => json({
                    data: { errors: err.response.data },
                    redirect: `/admin/profile`
                }))
        }
    }

}