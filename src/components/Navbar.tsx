import Deer from "../assets/images/navDeer.svg"
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useWindowScroll} from "react-use";
import gsap from "gsap";
import {IoCloseSharp, IoMenu} from "react-icons/io5";


interface MenuItem {
    title: string;
    link: string;
}

function Navbar() {
    const navRef = useRef<HTMLDivElement | null>(null);
    const {y: yScroll} = useWindowScroll();
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [isNavVisible, setNavVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!navRef.current) return;
        if (yScroll === 0) {
            setNavVisible(true);
            navRef.current.classList.remove("nav-bg");
        } else if (yScroll > lastScrollPosition) {
            setNavVisible(false);
            navRef.current.classList.add("nav-bg");
            setIsOpen(false)
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

    useEffect(() => {
        if (!navRef.current) return;
        if (isOpen) {
            gsap.to(navRef.current, {
                height: "100%",
                duration: 0.7,
            })
            navRef.current.classList.add("nav-full");
            navRef.current.classList.add("flex-col");
        } else {
            gsap.to(navRef.current, {
                height: "80",
                duration: 0.3,
            })
            navRef.current.classList.remove("nav-full");
            navRef.current.classList.remove("flex-col");
        }
    }, [isOpen]);

    const menuItems: Array<MenuItem> = [
        {title: "Home", link: "/ahouba/"},
        {title: "Events", link: "/ahouba/events"},
        {title: "Team", link: "/ahouba/team"},
        {title: "Developer", link: "/ahouba/developer"},
    ]

    return (
        <div ref={navRef}
             className="fixed top-0 left-0 z-30 w-full flex items-center justify-between align-middle px-7">
            <div className="w-full flex items-center justify-between">
                <img className="h-[70px] w-[70px] hover:scale-125 transition-all ease-in duration-300" src={Deer}
                     alt="icon"/>
                <div className="h-[35px] w-[40px] relative mx-3 md:hidden">
                    {!isOpen ?
                        <IoMenu onClick={() => setIsOpen((open) => !open)}
                                className="stroke-[#DFDFF2] h-full w-full"/> :
                        <IoCloseSharp onClick={() => setIsOpen((open) => !open)}
                                      className="fill-[#DFDFF2] h-full w-full"/>
                    }
                </div>
            </div>
            {isOpen && (
                <div className="w-full h-full flex flex-col gap-10">
                    {
                        menuItems.map(((menuItem, index) => (
                            <Link to={menuItem.link} key={index} onClick={() => setIsOpen((open) => !open)}
                                  className="group relative overflow-hidden px-8 py-3 text-3xl active:bg-[#DFDFF2] rounded-full after:absolute after:w-full after:h-full after:bg-[#DFDFF2] after:left-0 after:-bottom-full after:rounded-full hover:after:bottom-0 hover:after:transition-all hover:after:ease-out hover:after:duration-200">
                                <div
                                    className="w-fit h-full no-underline relative z-10 text-[#DFDFF2] group-hover:text-[#A8A8D7] group-hover:no-underline group-hover:cursor-pointer">
                                    {menuItem.title}
                                </div>
                            </Link>
                        )))
                    }
                </div>
            )}
            <div className="hidden md:flex w-full items-center justify-end gap-6">
                {!isOpen && (

                    menuItems.map(((menuItem, index) => (
                        <Link to={menuItem.link} key={index}
                              className="group relative overflow-hidden px-8 py-3 rounded-full border-[#DFDFF2] border text-3xl after:absolute after:w-full after:h-full after:bg-[#DFDFF2] after:left-0 after:-bottom-full after:rounded-full hover:after:bottom-0 hover:after:rounded hover:after:transition-all hover:after:ease-out hover:after:duration-200">
                            <div
                                className="w-full h-full no-underline relative z-10 text-[#DFDFF2] group-hover:text-[#A8A8D7] group-hover:no-underline group-hover:cursor-pointer">
                                {menuItem.title}
                            </div>
                        </Link>
                    )))
                )}
            </div>
        </div>
    )
}

export default Navbar
