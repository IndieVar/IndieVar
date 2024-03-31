import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('current_user'))
    let currentUser = JSON.parse(localStorage.getItem('current_user'))

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

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout, currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider