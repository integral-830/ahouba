import {Link} from "react-router-dom";
import React from "react";

const EventCardButton:React.FC<{ icon?: React.ReactNode; title: string; link:string }> = ({ icon, title, link  }) => {
    return (
        <Link to={link} className="group flex gap-4 items-center relative overflow-hidden px-8 py-3 rounded-full w-fit h-fit border-2 text-3xl after:absolute after:w-full after:h-full after:bg-[#DFDFF2] after:left-0 after:-bottom-full after:rounded-full hover:after:bottom-0 hover:after:rounded hover:after:transition-all hover:after:ease-out hover:after:duration-200 [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent animate-border">
            <div className=" no-underline relative z-10 font-Roobert text-[#fee8e6] group-hover:text-black group-hover:no-underline group-hover:cursor-pointer">
                {title}
            </div>
            {icon}
        </Link>
    )
}
export default EventCardButton
