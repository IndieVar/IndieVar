import {createContext, useContext, useState} from "react";
import {Outlet, useLoaderData} from "react-router-dom";
import api from "../../app/config/api.jsx";
import {APP_NAME} from "../../app/constants.js";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export const currentUserLoader = async () => {
    if (!localStorage.getItem(`${APP_NAME}_token`)) return null

    const {data} = await api.get('/current_user')
    return data
}
export const AuthProvider = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem(`${APP_NAME}_token`))
    let currentUser = useLoaderData();

    const login = ({token, refresh_token}) => {
        localStorage.setItem(`${APP_NAME}_token`, token)
        localStorage.setItem(`${APP_NAME}_refresh_token`, refresh_token)
        setIsLoggedIn(true)
    }

    const logout = () => {
        localStorage.removeItem(`${APP_NAME}_token`)
        localStorage.removeItem(`${APP_NAME}_refresh_token`)
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