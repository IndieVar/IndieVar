import {createContext, useContext, useState} from "react";
import {Outlet, useLoaderData} from "react-router-dom";
import api from "../../app/config/api.jsx";
import {TOKEN_PREFIX} from "../../app/constants.js";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export const currentUserLoader = async () => {
    if (!localStorage.getItem(`${TOKEN_PREFIX}_token`)) return null

    const {data} = await api.get('/current_user')
    return data
}
export const AuthProvider = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem(`${TOKEN_PREFIX}_token`))
    let currentUser = useLoaderData();

    const login = ({token, refresh_token}) => {
        localStorage.setItem(`${TOKEN_PREFIX}_token`, token)
        localStorage.setItem(`${TOKEN_PREFIX}_refresh_token`, refresh_token)
        setIsLoggedIn(true)
    }

    const logout = () => {
        localStorage.removeItem(`${TOKEN_PREFIX}_token`)
        localStorage.removeItem(`${TOKEN_PREFIX}_refresh_token`)
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