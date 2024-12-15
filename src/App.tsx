import './App.css'
import 'lenis/dist/lenis.css'
import Cursor from "./components/Cursor.tsx";
import {useEffect, useRef} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import LandingPage from "./Pages/LandingPage.tsx";
import EventSection from "./sections/EventSection.tsx";
import TeamSection from "./sections/TeamSection.tsx";

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
            <BrowserRouter>
                <Navbar/>
                <Cursor/>
                <Routes>
                        <Route path="/ahouba/" element={<LandingPage/>}/>
                        <Route path="/ahouba/events" element={<EventSection/>}/>
                        <Route path="/ahouba/team" element={<TeamSection/>}/>
                        <Route path="/ahouba/developer" element={<TeamSection/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App
