import DisplayGrid from "../components/DisplayGrid.tsx";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DisplaySection = () => {
    const backgroungRef = useRef(null);
    const gridRef = useRef(null);
    useGSAP(() => {
        gsap.to(gridRef.current, {
            width: "100%",
            duration: 2,
            scrollTrigger: {
                trigger: gridRef.current,
                start: "top center",
                end: "bottom top",
                scrub: 0.5,
            }
        })
    })
    return (
        <section ref={backgroungRef} className="w-screen min-h-lvh flex justify-center relative bg-transparent">
            <div ref={gridRef}
                 className="flex w-4/5 h-full relative flex-col items-center justify-center px-10 py-12 md:px-40">
                <h1 className="customFont text-[10rem] md:text-[12rem] leading-tight mix-blend-difference text-[#00FFC6] w-full items-start">TOP EVENTS</h1>
                <DisplayGrid/>
            </div>
        </section>
    )
}
export default DisplaySection
