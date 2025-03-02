import DisplayGrid from "../components/DisplayGrid.tsx";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import GradientText from "../components/GradientText.tsx";

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
        <section ref={backgroungRef} className="w-screen min-h-lvh flex mt-20 justify-center relative bg-transparent">
            <div ref={gridRef}
                 className="flex w-4/5 h-full relative flex-col items-center justify-center px-10 py-12 md:px-40">
                <GradientText
                    colors={["#172033", "#fff", "#172033", "#fff", "#172033"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="customFont text-[10rem] md:text-[12rem] leading-tight mix-blend-difference w-full justify-center"
                >
                    TOP EVENTS
                </GradientText>
                <DisplayGrid/>
            </div>
        </section>
    )
}
export default DisplaySection
