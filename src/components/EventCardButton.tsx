import {Link} from "react-router-dom";

const EventCardButton:React.FC<{ icon?: React.ReactNode; title: string; link:string }> = ({ icon, title, link  }) => {
    return (
        <Link to={link} className="group flex gap-4 items-center relative overflow-hidden px-8 py-3 rounded-full w-fit h-fit border-[#dfdff2] border text-3xl after:absolute after:w-full after:h-full after:bg-[#dfdff2] after:left-0 after:-bottom-full after:rounded-full hover:after:bottom-0 hover:after:rounded hover:after:transition-all hover:after:ease-out hover:after:duration-200">
            <div className=" no-underline relative z-10 font-Roobert text-white group-hover:text-black group-hover:no-underline group-hover:cursor-pointer">
                {title}
            </div>
            {icon}
        </Link>
    )
}
export default EventCardButton
