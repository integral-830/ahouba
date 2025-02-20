import HeroSection from "../sections/HeroSection.tsx";
import AboutSection from "../sections/AboutSection.tsx";
import DisplaySection from "../sections/DisplaySection.tsx";
import Gallery from "../sections/Gallery.tsx";
import SponsorSection from "../sections/SponsorSection.tsx";
import {useEffect, useRef} from "react";
import Lenis from "lenis";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import Transition from "../utility/Transition.tsx";

const LandingPage = () => {
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
export default Transition(LandingPage)
