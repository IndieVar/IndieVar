import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "./AuthProvider.jsx";

const AdminProvider = () => {
    const {currentUser} = useAuth()

    if (currentUser?.role !== 'admin') {
        return <Navigate to={'/login'} replace/>;
    }

    return <Outlet/>
}

export default AdminProvider;