import {useActionData, useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";

export const useAlert = () => {
    const actionData = useActionData();
    const navigate = useNavigate();


    useEffect(() => {
        if (actionData) {
            const {data, redirect} = actionData;
            navigate(redirect, {state: data, replace: true});
        }
    }, [actionData, navigate]);
}

export const useCloseByClickOutside = ({isOpen, setIsOpen}) => {
    const modalRef = useRef();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return {modalRef}
}