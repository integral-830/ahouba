import Deer from "../assets/images/navDeer.svg"
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useWindowScroll} from "react-use";
import gsap from "gsap";
import {IoMenu} from "react-icons/io5";


interface MenuItem {
    title: string;
    link: string;
}

function Navbar() {
    const navRef = useRef<HTMLDivElement | null>(null);
    const {y: yScroll} = useWindowScroll();
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [isNavVisible, setNavVisible] = useState(true);

    useEffect(() => {
        if (!navRef.current) return;
        if (yScroll === 0) {
            setNavVisible(true);
            navRef.current.classList.remove("nav-bg");
        } else if (yScroll > lastScrollPosition) {
            setNavVisible(false);
            navRef.current.classList.add("nav-bg");
        } else if (yScroll < lastScrollPosition) {
            setNavVisible(true);
            navRef.current.classList.add("nav-bg");
        }
        setLastScrollPosition(yScroll);
    }, [yScroll, lastScrollPosition]);

    useEffect(() => {
        gsap.to(navRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 0.7 : 0,
            duration: 0.5,
        });
    }, [isNavVisible]);

    const menuItems: Array<MenuItem> = [
        {title: "Home", link: "/ahouba/"},
        {title: "Events", link: "/ahouba/events"},
        {title: "Team", link: "/ahouba/team"},
        {title: "Developer", link: "/ahouba/developer"},
    ]

    return (
        <div ref={navRef} className="fixed top-0 left-0 z-30 w-full flex items-center justify-between align-middle px-7">
            <img className="h-[70px] w-[70px] hover:scale-125 transition-all ease-in duration-300" src={Deer}
                 alt="icon"/>
            <IoMenu className="h-[35px] w-[40px] stroke-[#DFDFF2] mx-3 md:hidden"/>
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
