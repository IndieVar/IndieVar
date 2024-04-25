import {useLocation} from "react-router-dom";

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function isActiveLink(href) {
    const location = useLocation()
    if (location.pathname === href) return true
    if (href !== '/') return location.pathname.includes(href)
}

export function capitalized(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1))
}

export function printError(error) {
    return capitalized(error.filter(Boolean).join('; '))
}