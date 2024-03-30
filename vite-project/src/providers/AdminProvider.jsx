import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "./AuthProvider.jsx";

const AdminProvider = () => {
    const {isLoggedIn, logout} = useAuth()

    if (!isLoggedIn) {
        return <Navigate to={'/login'} replace />;
    }

    return <Outlet/>
}

export default AdminProvider;