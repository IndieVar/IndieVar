export const API_URL =
    process.env.NODE_ENV === "test"
        ? "https://jsonplaceholder.typicode.com/"
        : import.meta.env.VITE_API_URL;

export const AUTH_API_URL = "http://127.0.0.1:3000/api/v1/users/tokens"

export const TEST_API_URL = "https://jsonplaceholder.typicode.com";
