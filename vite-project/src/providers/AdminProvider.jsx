import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "./AuthProvider.jsx";

const AdminProvider = () => {
    const {currentUser} = useAuth()

    if (currentUser?.email !== 'aleksvarlaam@gmail.com') {
        return <Navigate to={'/login'} replace/>;
    }

    return <Outlet/>
}

export default AdminProvider;