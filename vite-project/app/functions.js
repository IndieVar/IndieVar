import {useLocation} from "react-router-dom";

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function isActiveLink(href) {
    const location = useLocation()
    if (location.pathname === href) return true
    if (href !== '/') return location.pathname.includes(href)
}