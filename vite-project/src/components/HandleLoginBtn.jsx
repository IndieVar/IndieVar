import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../providers/AuthProvider.jsx";
import {AUTH_API_URL} from "../config/constants.jsx";

const HandleLoginBtn = ({type}) => {
    const {isLoggedIn, logout} = useAuth();
    const navigate = useNavigate();
    const logoutHandler = () => {
        axios.post(`${AUTH_API_URL}/revoke`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        }).then(() => {
            logout()
            navigate('/')
        })
    }
    const className = type === "desktop"
        ? "text-sm font-semibold leading-6 text-gray-500 hover:text-gray-900"
        : "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-500 hover:text-gray-900 hover:bg-gray-50"

    if (!isLoggedIn) {
        return <Link to="/login" className={className}>
            Log in <span aria-hidden="true">&rarr;</span>
        </Link>
    }

    return (
        <button
            className={className}
            onClick={() => logoutHandler()}
        >
            Sign Out
        </button>
    )
}

export default HandleLoginBtn;