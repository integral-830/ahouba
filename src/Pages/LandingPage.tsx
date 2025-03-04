import HeroSection from "../sections/HeroSection.tsx";
import DisplaySection from "../sections/DisplaySection.tsx";
import Gallery from "../sections/Gallery.tsx";
import SponsorSection from "../sections/SponsorSection.tsx";
import {useEffect, useRef} from "react";
import Lenis from "lenis";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import Transition from "../utility/Transition.tsx";
import Particles from "../utility/Particles.tsx";
import Highlights from "../sections/Highlights.tsx";

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
        <section ref={containerRef} className="App w-screen min-h-lvh relative">
            <Particles
                particleColors={['#ffffff', '#7000df','#d9b3ff','#5a00b3']}
                particleCount={500}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
            <div className="absolute">
                <HeroSection/>
                <DisplaySection/>
                <Highlights/>
                <Gallery/>
                <SponsorSection/>
            </div>
        </section>
    )
}
export default Transition(LandingPage)
