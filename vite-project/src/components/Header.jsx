import React, {Fragment, useState} from 'react'
import {Dialog, Popover, Transition} from '@headlessui/react'
import {Bars3Icon,} from '@heroicons/react/24/outline'
import {Link, NavLink} from "react-router-dom";
import LocaleSwitcher from "./LocaleSwitcher.jsx";
import {useTranslation} from "react-i18next";
import UserMenu from "./UserMenu.jsx";
import {isActiveLink} from "../../app/functions.js";
import CloseBtn from "./CloseBtn.jsx";
import {publicNavigation} from "../../app/navigations.js";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const {t} = useTranslation()

    return (
        <header className="bg-white fixed top-0 inset-x-0 z-50 border-b">
            {/*Desktop menu*/}
            <nav className="mx-auto flex items-center justify-between p-3 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">IndieVar</span>
                        <img className="h-14 w-auto" src="/Logotype.png" alt="IndieVar Logotype"/>
                    </Link>
                </div>
                <div className="flex lg:hidden space-x-3">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                    <UserMenu/>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    {publicNavigation.map((item) => (
                        <NavLink to={item.href} key={item.name}
                                 className={
                                     isActiveLink(item.href) ? linkClassName.desktop.active : linkClassName.desktop.pending
                                 }
                        >
                            {t(item.name)}
                        </NavLink>
                    ))}
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-3">
                    <LocaleSwitcher/>
                    <UserMenu/>
                </div>
            </nav>
            {/*Hidden menu*/}
            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" onClose={setMobileMenuOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80 z-50"/>
                    </Transition.Child>
                    <div className="fixed inset-0 flex z-50">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel
                                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                <div className="flex items-center justify-between">
                                    <div className="-m-1.5 p-1.5">
                                        <span className="text-xl font-semibold text-gray-800">Menu</span>
                                    </div>
                                    <CloseBtn setIsOpen={setMobileMenuOpen}/>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6">
                                            {publicNavigation.map((item) => (
                                                <NavLink to={item.href} key={item.name}
                                                         onClick={() => setMobileMenuOpen(false)}
                                                         className={
                                                             isActiveLink(item.href) ? linkClassName.mobile.active : linkClassName.mobile.pending
                                                         }
                                                >
                                                    {t(item.name)}
                                                </NavLink>
                                            ))}
                                        </div>
                                        <div className="py-6">
                                            <LocaleSwitcher/>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

        </header>
)
}

const linkClassName = {
    desktop: {
        active: "text-sm font-semibold leading-6 underline underline-offset-2 text-gray-900",
            pending
    :
        "text-sm font-semibold leading-6 text-gray-500 hover:text-gray-900"
    }
,
    mobile: {
        active: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-gray-50",
            pending
    :
        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-500 hover:text-gray-900 hover:bg-gray-50"
    }
}