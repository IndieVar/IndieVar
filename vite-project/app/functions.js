import {useLocation} from "react-router-dom";
import {format} from "date-fns";

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

export function imageUrl(url) {
    if (import.meta.env.DEV) return 'http://127.0.0.1:3000/' + url
    return url
}

export function dateFormat(date) {
    return format(date, 'MMMM do yyyy')
}

export function dateTimeFormat(date) {
    return format(date, 'MMMM do yyyy, h:mm a')
}