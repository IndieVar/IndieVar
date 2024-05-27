import React, {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {
    Bars3Icon,
    HomeIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {classNames, isActiveLink} from "../../../app/functions.js";
import {TbBlockquote} from "react-icons/tb";
import {Navigate, NavLink, Outlet} from "react-router-dom";
import {useAuth} from "../../providers/AuthProvider.jsx";
import {BsChatQuote} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import {FaUserCog} from "react-icons/fa";
import CloseBtn from "../../components/CloseBtn.jsx";

const navigation = [
    {name: 'dashboard', href: '/admin/dashboard', icon: HomeIcon},
    {name: 'posts', href: '/admin/posts', icon: TbBlockquote},
    {name: 'quotes', href: '/admin/quotes', icon: BsChatQuote},
    {name: 'profile', href: '/admin/profile', icon: FaUserCog},
]

export default function AdminLayout() {
    const {currentUser} = useAuth()
    if (currentUser?.role !== 'admin') return <Navigate to={'/login'} replace/>;

    const {t} = useTranslation('admin')
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div className={"min-h-screen"}>
                <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} t={t}/>
                {/* Static sidebar for desktop */}
                <StaticSideBar t={t}/>

                <main className="p-6 pl-12 relative">
                    <button type="button"
                            className="fixed left-0 inset-y-1/2 p-2.5 text-gray-700 lg:hidden"
                            onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                    <Outlet/>
                </main>
            </div>
        </>
    )
}

const SideBar = ({sidebarOpen, setSidebarOpen, t}) => {
    return (
        <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-900/80"/>
                </Transition.Child>

                <div className="fixed inset-0 flex">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 -m-2.5">
                                    <CloseBtn setIsOpen={setSidebarOpen}/>
                                </div>
                            </Transition.Child>

                            <div
                                className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                                <nav className="flex flex-1 flex-col mt-10">
                                    <ul role="list" className="-mx-2 flex-1 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <NavLink
                                                    to={item.href}
                                                    onClick={() => setSidebarOpen(false)}
                                                    className={classNames(
                                                        isActiveLink(item.href)
                                                            ? 'bg-gray-800 text-white'
                                                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true"/>
                                                    {t('navigations.' + item.name)}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

const StaticSideBar = ({t}) => {
    return (
        <div
            className="hidden mt-20 lg:fixed lg:inset-y-0 lg:left-0 lg:z-20 lg:block lg:w-20 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4">
            <nav className="mt-8">
                <ul role="list" className="flex flex-col items-center space-y-1">
                    {navigation.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={classNames(
                                    isActiveLink(item.href)
                                        ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold'
                                )}
                            >
                                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true"/>
                                <span className="sr-only">{t('navigations.' + item.name)}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}