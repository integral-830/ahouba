import './App.css'
import 'lenis/dist/lenis.css'
import HeroSection from "./sections/HeroSection.tsx";
import Cursor from "./components/Cursor.tsx";
import {useEffect, useRef} from "react";
import Lenis from "lenis";
import MarqueeSection from "./sections/MarqueeSection.tsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import HorizontalScroll from "./sections/HorizontalScroll.tsx";
import EventSection from "./sections/EventSection.tsx";
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

        function updateTime(time: any) {
            lenis.raf(time);
            requestAnimationFrame(updateTime)
        }

        requestAnimationFrame(updateTime);
    })
    return (

        <div className="App w-screen min-h-lvh relative" ref={containerRef}>
                <HeroSection/>
                <MarqueeSection text={"AHOUBA"}/>
                <HorizontalScroll/>
                <EventSection/>
                <SponsorSection/>
                <Cursor/>
        </div>
    )
}

export default App
