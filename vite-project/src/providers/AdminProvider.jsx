import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "./AuthProvider.jsx";
import AdminLayout from "../pages/admin/AdminLayout.jsx";

const AdminProvider = () => {
    const {currentUser} = useAuth()

    if (currentUser?.role !== 'admin') {
        return <Navigate to={'/login'} replace/>;
    }

    return (
        <>
            <AdminLayout>
                <Outlet/>
            </AdminLayout>
        </>
    )
}

export default AdminProvider;