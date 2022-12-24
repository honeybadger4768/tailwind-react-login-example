import React, {InputHTMLAttributes} from "react";


type InputType = InputHTMLAttributes<HTMLInputElement>

export const Input : React.FC<InputType> = (props) => {

    return (
        <input
            className={`w-72 h-14 bg-gray-200 my-2 px-3 outline-none focus:outline-my-green ${props.className}`}
            {...props}
        />
    )
}

Input.defaultProps = {
    minLength: 6,
    maxLength: 100
}
