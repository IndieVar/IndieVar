import {createContext, useContext, useState} from "react";
import {Outlet, useLoaderData} from "react-router-dom";
import api from "../../app/config/api.jsx";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export const currentUserLoader = async ({request, params}) => {
    if (!localStorage.getItem('token')) return null

    const {data} = await api.get('/current_user')
    return data
}
export const AuthProvider = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'))
    let currentUser = useLoaderData();

    const login = ({token, refresh_token}) => {
        localStorage.setItem('token', token)
        localStorage.setItem('refresh_token', refresh_token)
        setIsLoggedIn(true)
    }

    const logout = () => {
        localStorage.removeItem('token')
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