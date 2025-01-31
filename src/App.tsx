import './App.css'
import 'lenis/dist/lenis.css'
import {useEffect, useRef} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import HeroSection from "./sections/HeroSection.tsx";
import MarqueeSection from "./sections/MarqueeSection.tsx";
import HorizontalScroll from "./sections/HorizontalScroll.tsx";
import DisplaySection from "./sections/DisplaySection.tsx";
import SponsorSection from "./sections/SponsorSection.tsx";

gsap.registerPlugin(ScrollTrigger)

function App() {
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
            <MarqueeSection text={"AHOUBA"} speed={100}/>
            <HorizontalScroll/>
            <DisplaySection/>
            <SponsorSection/>
        </div>

    )
}

export default App
