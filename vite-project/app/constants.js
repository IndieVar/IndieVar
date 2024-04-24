export const API_URL = import.meta.env.VITE_API_URL;

export const AUTH_API_URL = import.meta.env.AUTH_API_URL;

export const TEST_API_URL = "https://jsonplaceholder.typicode.com";

export const authHeader = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
}