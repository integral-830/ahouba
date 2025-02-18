import gsap from "gsap";
import {useEffect} from "react";
import cursor from "../assets/images/cursor.png"

const Cursor = () => {
    useEffect(()=>{
        const handleMouseEvent = (event:MouseEvent)=>{
            const {clientX, clientY} = event;
            gsap.to("#cursor",{
                x: clientX - 22/2,
                y: clientY - 22/2,
                duration: 0.5,
                delay: 0,
                ease: "power4.out",
            })
        };
        window.addEventListener("mousemove", handleMouseEvent);
        return ()=>{
            window.removeEventListener("mousemove", handleMouseEvent);
        }
    })
    return (
        <div id="cursor" className="fixed top-0 left-0 h-[40px] w-[40px] pointer-events-none rounded-full z-[100] ">
            <img src={cursor} alt="Cursor" className="h-full w-full" />
        </div>
    )
}
export default Cursor
