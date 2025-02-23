import './App.css'
import 'lenis/dist/lenis.css'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar.tsx";
import Cursor from "./components/Cursor.tsx";
import {Route, Routes} from "react-router";
import EventPage from "./Pages/EventPage.tsx";
import EventDetailsPage from "./Pages/EventDetailsPage.tsx";
import TeamPage from "./Pages/TeamPage.tsx";
import DeveloperPage from "./Pages/DeveloperPage.tsx";
import {useLocation} from "react-router-dom";
import LandingPage from "./Pages/LandingPage.tsx";
import {AnimatePresence} from "framer-motion";
import ScrollToTop from "./utility/ScrollToTop.tsx";
import SponsorPage from "./Pages/SponsorPage.tsx";
import PreLoader from "./utility/PreLoader.tsx";
import {useGSAP} from "@gsap/react";
import {useEffect, useRef, useState} from "react";

gsap.registerPlugin(ScrollTrigger)

function App() {

    const location = useLocation();
    const loaderRef = useRef(null)
    const [boolean, setBoolean] = useState(true);
    const updateCounter = () => {
        setBoolean(false);
    }

    useEffect(() => {
        const timer = setInterval(updateCounter, 5000);
        return () => {
            clearTimeout(timer);
        }
    });

    useGSAP(() => {
        gsap.to(loaderRef.current, {
            y: -100,
            delay: 5,
            duration: 1,
            opacity: 0,
        })
    })

    return (
        <>
            <Navbar/>
            <Cursor/>
            {boolean ? (
                <div ref={loaderRef} className="loader absolute z-[500] h-full w-full">
                    <PreLoader/>
                </div>
            ) : (
                <ScrollToTop>
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/ahouba/*" element={<LandingPage/>}/>
                            <Route path="/ahouba/events" element={<EventPage/>}/>
                            <Route path="/ahouba/events/:eventName" element={<EventDetailsPage/>}/>
                            <Route path="/ahouba/team" element={<TeamPage/>}/>
                            <Route path="/ahouba/sponsor" element={<SponsorPage/>}/>
                            <Route path="/ahouba/developer" element={<DeveloperPage/>}/>
                        </Routes>
                    </AnimatePresence>
                </ScrollToTop>
            )}


        </>
    )
}

export default App
