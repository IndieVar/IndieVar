import {useActionData, useNavigate} from "react-router-dom";
import {useEffect} from "react";

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