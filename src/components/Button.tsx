import React from 'react'

interface ButtonProps {
    title: string;
    link: string;
}

const Button = (props: ButtonProps) => {
    const {title, link} = props;
    return (
        <div onClick={() => alert("Ayush")}
            className=" relative overflow-hidden px-8 py-3 rounded-full border-black border text-3xl after:absolute after:w-full after:h-full after:bg-gray-600 after:left-0 after:-bottom-full after:rounded-full hover:after:bottom-0 hover:after:rounded hover:after:transition-all hover:after:ease-out hover:after:duration-200">
            <a href={link}
               className=" no-underline relative z-10 text-black group-hover:text-white group-hover:no-underline group-hover:cursor-pointer">
                {title}
            </a>
        </div>
    )
}
export default Button
