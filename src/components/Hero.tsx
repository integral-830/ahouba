import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Hero = () => {

    const t = gsap.timeline(
    )
    useGSAP(() => {
        t.from("#hero-title", {
            y: 100,
            delay: 0.5,
            duration: 1,
            opacity: 0,
            stagger: 0.5,
        })
        t.to("#hero-title",{
            scale: 0.7,
            scrollTrigger:{
                trigger:"#h",
                start:"top top",
                end:"bottom top",
                scrub:0.5,
            }
        })
    }, [])
    return (
        <div id="h" className="w-screen h-full flex  flex-col pt-40 p-10">
            <div className="w-full h-full flex flex-col">
                <div className="overflow-hidden h-full">
                    <h1 id="hero-title" className="customFont hero-heading">AHOUBA</h1>
                </div>
            </div>
            <div className="w-full h-full px-20 py-60 flex flex-col">
                    LOGO
            </div>
            <div className="w-full h-full px-20 flex flex-col justify-end items-end">
                <div className="overflow-hidden">
                    <h1 id="hero-title" className="customFont uppercase font-zentry text-[#DFDFF2] text-6xl md:text-9xl lg:text-[10rem]">The
                        Dawn</h1>
                </div>
                <div className="overflow-hidden">
                    <h1 id="hero-title" className="customFont uppercase font-zentry text-[#DFDFF2] text-6xl md:text-9xl lg:text-[10rem]">of
                        Innovation</h1>
                </div>
            </div>
        </div>

    )
}
export default Hero
