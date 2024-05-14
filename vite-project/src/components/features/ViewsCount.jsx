import {IoEyeOutline} from "react-icons/io5";
import React from "react";

export default function ViewsCount({count}) {

    return (
        <div className={"absolute bottom-4 inset-x-1/2 w-full flex items-center space-x-2 text-gray-500 text-xs"}>
            <span>{count}</span>
            <IoEyeOutline className={"w-4 h-4"}/>
        </div>
    )
}