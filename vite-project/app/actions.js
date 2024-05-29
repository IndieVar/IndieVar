import {API_URL} from "./constants.js";
import {json, redirect} from "react-router-dom";
import api from "./config/api.jsx";

export const quotesAction = async ({request, params}) => {
    const formData = await request.formData()

    switch (request.method) {
        case 'POST': {
            return await api.post(`${API_URL}/quotes`, formData)
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
           return await api.patch(`${API_URL}/quotes/${params.id}`, formData)
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

            return await api.delete(`${API_URL}/quotes/${params.id}`)
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
            return await api.post(`${API_URL}/posts`, formData)
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
            return await api.patch(`${API_URL}/posts/${params.id}`, formData)
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

            return await api.delete(`${API_URL}/posts/${params.id}`)
                .then(() => json({
                    data: { alert: "Successfully deleted" },
                    redirect: "/admin/posts"
                }))
        }
    }
}

export const usersAction = async ({request}) => {
    const formData = await request.formData()

    switch (request.method) {
        case 'PUT': {
            return await api.put(`${API_URL}/current_user`, formData)
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

export const messagesAction = async ({request, params}) => {

    switch (request.method) {
        case 'DELETE': {
            if (!window.confirm('Are you sure?')) return redirect('/admin/messages')

            return await api.delete(`${API_URL}/messages/${params.id}`)
                .then(() => json({
                    data: { alert: "Successfully deleted" },
                    redirect: "/admin/messages"
                }))
        }
    }
}