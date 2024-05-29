import {HomeIcon} from "@heroicons/react/24/outline/index.js";
import {TbBlockquote} from "react-icons/tb";
import {BsChatQuote} from "react-icons/bs";
import {FaUserCog} from "react-icons/fa";
import {VscFeedback} from "react-icons/vsc";

export const publicNavigation = [
    {name: 'header.navigation.home', href: '/'},
    {name: 'header.navigation.blog', href: '/posts'},
]

export const adminNavigation = [
    {name: 'dashboard', href: '/admin/dashboard', icon: HomeIcon},
    {name: 'messages', href: '/admin/messages', icon: VscFeedback},
    {name: 'posts', href: '/admin/posts', icon: TbBlockquote},
    {name: 'quotes', href: '/admin/quotes', icon: BsChatQuote},
    {name: 'profile', href: '/admin/profile', icon: FaUserCog},
]

export const userNavigation = [
    {name: 'dashboard', href: '/admin/dashboard', icon: HomeIcon},
    {name: 'messages', href: '/admin/messages', icon: VscFeedback},
    {name: 'profile', href: '/admin/profile', icon: FaUserCog},
]