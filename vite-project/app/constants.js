export const API_URL = import.meta.env.VITE_API_URL;

export const AUTH_API_URL = API_URL + '/users/tokens';

export const authHeader = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
}

export const TINY_API_KEY = import.meta.env.VITE_TINY_API_KEY;