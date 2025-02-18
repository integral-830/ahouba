import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import TypeWriter from "./TypeWriter.tsx";
import SplitText from "./SplitText.tsx";

const Hero = () => {

    const t = gsap.timeline()
    useGSAP(() => {
        t.from("#hero-title", {
            y: 100,
            delay: 0.5,
            duration: 1,
            opacity: 0,
            stagger: 0.5,
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
        <>
            <div className="w-full relative h-full flex flex-center">
                <div className="w-[300px] h-[300px] absolute z-[-1] md:w-[500px] md:h-[500px] flex flex-col">
                    <video
                        src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/logoBg.mp4"
                        loop
                        muted
                        autoPlay
                        className="size-full object-cover object-center"
                    />
                </div>
                <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] flex-center">
                    <img className="h-[170px] w-[170px] object-cover hover:scale-105" src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ahoubaLogo.svg" alt="icon"/>
                </div>
            </div>
            <div id="h" className="w-screen absolute h-full flex  flex-col pt-40 p-10 items-center z-10">
                <div className="w-full h-full flex">
                    <div className="w-full h-fit flex items-center">
                        <div className="overflow-hidden h-full">
                            <SplitText
                                text="AHOUBA"
                                className="customFont hero-heading"
                                delay={150}
                                animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
                                animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
                                threshold={0.2}
                                rootMargin="-50px"
                            />
                        </div>
                        <TypeWriter/>
                    </div>
                </div>
                <div className="w-full h-fit px-20 flex flex-col justify-end items-end">
                    <div className="overflow-hidden">
                        <h1 id="hero-title"
                            className="customFont uppercase font-zentry text-[#00FFC6] text-6xl md:text-9xl lg:text-[10rem]">The
                            Dawn</h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 id="hero-title"
                            className="customFont uppercase font-zentry text-[#00FFC6] text-6xl md:text-9xl lg:text-[10rem]">of
                            Innovation</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero
