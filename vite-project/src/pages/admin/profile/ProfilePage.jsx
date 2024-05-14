import {useAuth} from "../../../providers/AuthProvider.jsx";

export default function ProfilePage() {
    const {currentUser} = useAuth()

    return (
        <>
            <h1 className="text-3xl font-bold underline">Admin Profile</h1>
            <ul>
                <li>Id: {currentUser.id}</li>
                <li>Name: {currentUser.fullname}</li>
                <li>Email: {currentUser.email}</li>
                <li>Role: {currentUser.role}</li>
            </ul>
        </>
    )
}