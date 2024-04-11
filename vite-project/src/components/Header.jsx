import {useState} from 'react'
import {Dialog, Popover} from '@headlessui/react'
import {Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'
import {Link, NavLink} from "react-router-dom";
import HandleLoginBtn from "./HandleLoginBtn.jsx";
import LocaleSwitcher from "../i18n/LocaleSwitcher.jsx";

const navigations = [
    {name: 'Home', href: '/'},
    {name: 'Posts', href: '/posts'},
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <DesktopVersion mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
            <MobileVersion mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
        </header>
    )
}

const DesktopVersion = ({mobileMenuOpen, setMobileMenuOpen, loginBtn}) => (
    <nav className="mx-auto flex items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">IndieVar</span>
                <img className="h-14 w-auto" src="/Logotype.png" alt="IndieVar Logotype"/>
            </Link>
        </div>
        <div className="flex lg:hidden">
            <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
            >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
            </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
            {navigations.map((item) => (
                <NavLink to={item.href} key={item.name}
                         className={({isActive, isPending}) =>
                             isPending ? linkClassName.desktop.pending : isActive ? linkClassName.desktop.active : linkClassName.desktop.pending
                         }
                >
                    {item.name}
                </NavLink>
            ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-3">
            <LocaleSwitcher/>
            <HandleLoginBtn type={"desktop"}/>
        </div>
    </nav>
)

const MobileVersion = ({mobileMenuOpen, setMobileMenuOpen}) => (
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10"/>
        <Dialog.Panel
            className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
                <Link to={"/"} className="-m-1.5 p-1.5">
                    <span className="sr-only">IndieVar</span>
                    <img
                        className="h-14 w-auto"
                        src="/Logotype.png"
                        alt="IndieVar Logotype"
                    />
                </Link>
                <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                </button>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                        {navigations.map((item) => (
                            <NavLink to={item.href} key={item.name}
                                     className={({isActive, isPending}) =>
                                         isPending ? linkClassName.mobile.pending : isActive ? linkClassName.mobile.active : linkClassName.mobile.pending
                                     }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                    <div className="py-6">
                        <LocaleSwitcher/>
                        <HandleLoginBtn type={"mobile"}/>
                    </div>
                </div>
            </div>
        </Dialog.Panel>
    </Dialog>
)

const linkClassName = {
    desktop: {
        active: "text-sm font-semibold leading-6 underline underline-offset-2 text-gray-900",
        pending: "text-sm font-semibold leading-6 text-gray-500 hover:text-gray-900"
    },
    mobile: {
        active: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-gray-50",
        pending: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-500 hover:text-gray-900 hover:bg-gray-50"
    }
}