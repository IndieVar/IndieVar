import axios from "axios";
import {API_URL} from "./constants.js";

const api = axios.create({
    baseURL: API_URL,
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const access_token = localStorage.getItem('access_token');
        if (access_token) {
            config.headers.Authorization = `Bearer ${access_token}`;
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
        // it means the access_token has expired and we need to refresh it
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const old_refresh_token = localStorage.getItem('refresh_token');
                const response = await axios.post(`${API_URL}/users/tokens/refresh`, {}, {
                    headers: {
                        Authorization: `Bearer ${old_refresh_token}`
                    }
                });
                const { token, refresh_token } = response.data;

                localStorage.setItem('access_token', token)
                localStorage.setItem('refresh_token', refresh_token)

                // Retry the original request with the new access_token
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return axios(originalRequest);
            } catch (error) {
                // Handle refresh access_token error or redirect to login
            }
        }

        return Promise.reject(error);
    }
);

export default api;