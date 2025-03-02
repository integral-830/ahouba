import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import TypeWriter from "./TypeWriter.tsx";
import GradientText from "./GradientText.tsx";

const Hero = () => {

    const t = gsap.timeline()

    useGSAP(() => {
        t.from("#hero-title", {
            y: 100,
            delay: 0.5,
            duration: 1,
            opacity: 0,
            stagger: 0.5
        })
        t.to("#hero-title", {
            scale: 0.7,
            scrollTrigger: {
                trigger: "#h",
                start: "top top",
                end: "bottom top",
                scrub: 0.5,
            }
        })
    }, [])

    return (
        <div id="h" className="w-screen absolute h-full flex  flex-col pt-40 p-10 items-center z-10">
            <div className="w-full h-full flex">
                <div className="w-full h-fit flex items-center">
                    <div className="overflow-hidden h-full">
                        <GradientText
                            id="hero-title"
                            colors={["#B86174", "#fff", "#172033", "#fff", "#172033"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="custom-class customFont hero-heading mr-20"
                        >
                            AHOUBA
                        </GradientText>
                    </div>
                    <TypeWriter/>
                </div>
            </div>
            <div className="w-full h-fit px-20 flex flex-col justify-end items-end">
                <div className="overflow-hidden">
                    <GradientText
                        id="hero-title"
                        colors={["#172033", "#B86174", "#172033", "#fff", "#172033"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="customFont uppercase font-zentry text-6xl md:text-9xl lg:text-[10rem]"
                    >
                        The Dawn
                    </GradientText>
                </div>
                <div className="overflow-hidden">
                    <GradientText
                        id="hero-title"
                        colors={["#172033", "#fff", "#172033", "#fff", "#172033"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="customFont uppercase font-zentry text-6xl md:text-9xl lg:text-[10rem]"
                    >
                        of Innovation
                    </GradientText>
                </div>
            </div>
        </div>
    )
}
export default Hero
