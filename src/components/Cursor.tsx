import gsap from "gsap";
import {useEffect} from "react";

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
        <div id="cursor" className="fixed top-0 left-0 h-[30px] w-[30px] mix-blend-difference pointer-events-none border-4 border-[#DFDFF2] rounded-full z-50 "></div>
    )
}
export default Cursor
