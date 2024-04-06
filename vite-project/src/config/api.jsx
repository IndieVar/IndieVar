import axios from "axios";
import {API_URL} from "./constants.jsx";
import {redirect} from "react-router-dom";

const api = axios.create({
    baseURL: API_URL,
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const response = await axios.post(`${API_URL}/users/tokens/refresh`, {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('refresh_token')}`
                    }
                });
                const {token, refresh_token} = response.data;

                localStorage.setItem('token', token)
                localStorage.setItem('refresh_token', refresh_token)

                // Retry the original request with the new token
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return axios(originalRequest);
            } catch (error) {
                // Handle refresh token error or redirect to login
                return redirect("/login");
            }
        }

        return Promise.reject(error);
    }
);

export default api;