import {createContext, useContext, useState} from "react";
import axios from "axios";
import {AUTH_API_URL} from "../constants.js";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('current_user'))

    const login = (res) => {
        localStorage.setItem('access_token', res.data.token)
        localStorage.setItem('refresh_token', res.data.refresh_token)
        localStorage.setItem('current_user', JSON.stringify(res.data.resource_owner))
        setIsLoggedIn(true)
    }

    const logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('current_user')
        setIsLoggedIn(false)
    }


    const refreshToken = () => {
        axios.post(`${AUTH_API_URL}/refresh`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('refresh_token')}`,
            },
        }).then((res) => {
            console.log(res)
        })
    }

    const tokenInfo = () => {
        axios.get(`${AUTH_API_URL}/info`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        }).then((res) => {
            return res.data
        })
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider