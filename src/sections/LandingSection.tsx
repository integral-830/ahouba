import HeroSection from "./HeroSection.tsx";
import AboutSection from "./AboutSection.tsx";
import DisplaySection from "./DisplaySection.tsx";
import Gallery from "./Gallery.tsx";
import SponsorSection from "./SponsorSection.tsx";
import {useEffect, useRef} from "react";
import Lenis from "lenis";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import Transition from "../utility/Transition.tsx";

const LandingSection = () => {
    const containerRef = useRef(null)
    useEffect(() => {
        const lenis = new Lenis();
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        function updateTime(time: number) {
            lenis.raf(time);
            requestAnimationFrame(updateTime)
        }

        requestAnimationFrame(updateTime);
    })

    return (
        <div ref={containerRef} className="App w-screen min-h-lvh relative">
            <HeroSection/>
            <AboutSection/>
            <DisplaySection/>
            <Gallery/>
            <SponsorSection/>
        </div>
    )
}
export default Transition(LandingSection)
