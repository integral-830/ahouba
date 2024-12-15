
const Button:React.FC<{ icon?: React.ReactNode; title: string }> = ({ icon, title  }) => {
    return (
        <div onClick={() => alert("Ayush")}
             className="group flex gap-4 items-center relative overflow-hidden px-8 py-3 rounded-full w-fit h-fit border-[#8585C6] border text-3xl after:absolute after:w-full after:h-full after:bg-[#a8a8d7] after:left-0 after:-bottom-full after:rounded-full hover:after:bottom-0 hover:after:rounded hover:after:transition-all hover:after:ease-out hover:after:duration-200">
            <h2 className=" no-underline relative z-10 font-Roobert group-hover:text-black group-hover:no-underline group-hover:cursor-pointer">
                {title}
            </h2>
            {icon}
        </div>
    )
}
export default Button
