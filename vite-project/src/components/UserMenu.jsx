import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {useAuth} from "../providers/AuthProvider.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import {AUTH_API_URL, authHeader} from "../../app/constants.js";
import {BellIcon} from "@heroicons/react/24/outline/index.js";
import {avatarUrl, classNames} from "../../app/functions.js";
import {useTranslation} from "react-i18next";

const userNavigation = [
    {name: 'dashboard', href: '/admin/dashboard'},
    {name: 'profile', href: '/admin/profile'},
]

export default function UserMenu() {
    const {isLoggedIn, currentUser, logout} = useAuth();
    if (!isLoggedIn) return

    const {t} = useTranslation('admin')
    const navigate = useNavigate();
    const navItemClassName = 'block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-100 w-full text-start'

    const logoutHandler = () => {
        axios.post(`${AUTH_API_URL}/revoke`, authHeader).then(() => {
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
                        className="h-8 w-8 object-cover rounded-full bg-gray-50"
                        src={avatarUrl(currentUser?.avatar.thumb.url)}
                        alt="User avatar"
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
                                        <NavLink
                                            to={item.href}
                                            className={classNames(
                                                active ? 'bg-gray-50' : '',
                                                navItemClassName
                                            )}
                                        >
                                            {t('navigations.' + item.name)}
                                        </NavLink>
                                )}
                            </Menu.Item>
                        ))}
                            <hr/>
                            <button
                                className={navItemClassName}
                                onClick={() => logoutHandler()}
                            >
                                {t('navigations.sign_out')}
                            </button>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}