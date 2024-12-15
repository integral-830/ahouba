import Deer from "../assets/images/navDeer.svg"
import {TbLayoutGrid} from "react-icons/tb";
import {Link} from "react-router-dom";


interface MenuItem {
    title: string;
    link: string;
}

function Navbar() {

    const menuItems: Array<MenuItem> = [
        {title: "Home", link: "/ahouba/"},
        {title: "Events", link: "/ahouba/events"},
        {title: "Team", link: "/ahouba/team"},
        {title: "Developer", link: "/ahouba/developer"},
    ]

    return (
        <div className="absolute top-0 left-0 z-30 flex items-center justify-between align-middle px-7 lg:px-40 w-screen">
            <img className="h-[70px] w-[70px] hover:scale-125 transition-all ease-in duration-300" src={Deer}
                 alt="icon"/>
            <TbLayoutGrid className="h-[35px] w-[35px] stroke-[#DFDFF2] mx-3 md:hidden"/>
            <div className="hidden md:flex w-full items-center justify-end gap-6">
                {
                    menuItems.map(((menuItem, index) => (
                        <div key={index} className="group relative overflow-hidden px-8 py-3 rounded-full border-[#DFDFF2] border text-3xl after:absolute after:w-full after:h-full after:bg-[#DFDFF2] after:left-0 after:-bottom-full after:rounded-full hover:after:bottom-0 hover:after:rounded hover:after:transition-all hover:after:ease-out hover:after:duration-200">
                            <Link to={menuItem.link} className="w-full h-full no-underline relative z-10 text-[#DFDFF2] group-hover:text-[#A8A8D7] group-hover:no-underline group-hover:cursor-pointer">
                                {menuItem.title}
                            </Link>
                        </div>
                    )))
                }
            </div>
        </div>
    )
}

export default Navbar
