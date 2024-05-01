import axios from "axios";
import {API_URL, authHeader} from "./constants.js";
import {json, redirect} from "react-router-dom";

export const quotesAction = async ({request, params}) => {
    const formData = await request.formData()
    const data = {
        ru: formData.get('ru'),
        en: formData.get('en')
    }

    switch (request.method) {
        case 'POST': {
            return await axios.post(`${API_URL}/quotes`, data, authHeader)
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
           return await axios.patch(`${API_URL}/quotes/${params.id}`, data, authHeader)
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