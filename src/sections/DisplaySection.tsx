import Marquee from "../components/Marquee.tsx";
import DisplayGrid from "../components/DisplayGrid.tsx";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DisplaySection = () => {
    const marqueeRef = useRef(null);
    const backgroungRef = useRef(null);
    const gridRef = useRef(null);
    useGSAP(() => {
        gsap.to(backgroungRef.current, {
            backgroundColor: "#000000",
            scrollTrigger: {
                trigger: marqueeRef.current,
                start: "120 top",
                end: "bottom bottom",
                scrub: 1,
            }
        })
        gsap.to(gridRef.current, {
            width: "100%",
            duration: 2,
            scrollTrigger: {
                trigger: gridRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
            }
        })
    })
    return (
        <section ref={backgroungRef} className="w-screen min-h-lvh flex justify-center relative bg-[#DFDFF2]">
            <div ref={gridRef}
                 className="flex w-4/5 h-full relative flex-col items-center justify-center px-10 py-12 md:px-40">
                <div ref={marqueeRef} className="py-4">
                    <Marquee text={"innovation"} speed={260}/>
                </div>
                <h1 className="special-font text-[10rem] md:text-[12rem] leading-tight mix-blend-difference text-[#DFDFF2] w-full items-start">TOP EVENTS</h1>
                <DisplayGrid/>
            </div>
        </section>
    )
}
export default DisplaySection
