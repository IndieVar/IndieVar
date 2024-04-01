import {createContext, useContext, useState} from "react";
import axios from "axios";
import {API_URL} from "../constants.js";
import {Outlet, useLoaderData} from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const currentUserLoader = async ({request, params}) => {
    if (!localStorage.getItem('access_token')) return null

    const {data} = await axios.get(`${API_URL}/current_user`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    });
    return data
}

export const AuthProvider = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('access_token'))
    let currentUser = useLoaderData();

    const login = (res) => {
        localStorage.setItem('access_token', res.data.token)
        localStorage.setItem('refresh_token', res.data.refresh_token)
        setIsLoggedIn(true)
    }

    const logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        currentUser = null
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout, currentUser}}>
            <Outlet/>
        </AuthContext.Provider>
    )
}

export default AuthProvider