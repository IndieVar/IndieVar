import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {useAuth} from "../providers/AuthProvider.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {AUTH_API_URL} from "../config/constants.jsx";
import {BellIcon} from "@heroicons/react/24/outline/index.js";
import {classNames} from "../config/functions.js";

const userNavigation = [
    {name: 'Dashboard', href: '/admin/dashboard'},
]

export default function UserMenu() {
    const {isLoggedIn, logout} = useAuth();
    if (!isLoggedIn) return

    const navigate = useNavigate();
    const navItemClassName = 'block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-100 w-full text-start'

    const logoutHandler = () => {
        axios.post(`${AUTH_API_URL}/revoke`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        }).then(() => {
            logout()
            return navigate('/')
        })
    }


    return (
        <div className="flex items-center gap-x-4 lg:gap-x-6">
            <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true"/>
            </button>
            <Menu as="div" className="relative">
                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="h-8 w-8 rounded-full bg-gray-50"
                        src="https://scontent.fhfa1-1.fna.fbcdn.net/v/t39.30808-6/432159240_1613594752510741_1851465287878911651_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mPXjmiarIu8Ab4F99RR&_nc_ht=scontent.fhfa1-1.fna&oh=00_AfAOPXDZ8ToupjhbqCYkaRWo3HpgzcF11TxRw1d4H0jvwQ&oe=662C45D4"
                        alt=""
                    />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                                {({active}) => (
                                    <>
                                        <a
                                            href={item.href}
                                            className={classNames(
                                                active ? 'bg-gray-50' : '',
                                                navItemClassName
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                        <hr/>
                                        <button
                                            className={navItemClassName}
                                            onClick={() => logoutHandler()}
                                        >
                                            Sign Out
                                        </button>
                                    </>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}