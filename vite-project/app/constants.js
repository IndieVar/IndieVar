export const API_URL = import.meta.env.VITE_API_URL;

export const AUTH_API_URL = API_URL + '/users/tokens';

export const TEST_API_URL = "https://jsonplaceholder.typicode.com";

export const authHeader = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
}