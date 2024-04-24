import axios from "axios";
import {API_URL, authHeader} from "./constants.js";
import {redirect} from "react-router-dom";

export const quotesAction = async ({request, params}) => {
    const formData = await request.formData()
    const newQuote = {
        ru: formData.get('ru'),
        en: formData.get('en')
    }

    switch (request.method) {
        case 'POST': {
            await axios.post(`${API_URL}/quotes`, newQuote, authHeader)
            return redirect('/admin/quotes')
        }
        case 'DELETE': {
            await axios.delete(`${API_URL}/quotes/${params.id}`, authHeader)
            return redirect('/admin/quotes')
        }
    }

}