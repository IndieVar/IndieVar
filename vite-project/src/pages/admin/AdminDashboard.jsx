import {useAuth} from "../../providers/AuthProvider.jsx";

const AdminDashboard = () => {
    const {currentUser} = useAuth()

    return (
        <>
            <h1 className="text-3xl font-bold underline">Admin Dashboard</h1>
            <ul>
                <li>Id: {currentUser.id}</li>
                <li>Email: {currentUser.email}</li>
                <li>Role: {currentUser.role}</li>
            </ul>
        </>
    )
}
export default AdminDashboard;