import './App.css'
import 'lenis/dist/lenis.css'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar.tsx";
import Cursor from "./components/Cursor.tsx";
import {Route, Routes} from "react-router";
import EventSection from "./sections/EventSection.tsx";
import EventDetails from "./sections/EventDetails.tsx";
import TeamSection from "./sections/TeamSection.tsx";
import DeveloperSection from "./sections/DeveloperSection.tsx";
import {useLocation} from "react-router-dom";
import LandingSection from "./sections/LandingSection.tsx";
import {AnimatePresence} from "framer-motion";
import ScrollToTop from "./components/ScrollToTop.tsx";

gsap.registerPlugin(ScrollTrigger)

function App() {
    const location = useLocation();

    return (
        <>
            <Navbar/>
            <Cursor/>
            <ScrollToTop>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/ahouba/*" element={<LandingSection/>}/>
                        <Route path="/ahouba/events" element={<EventSection/>}/>
                        <Route path="/ahouba/events/:eventName" element={<EventDetails/>}/>
                        <Route path="/ahouba/team" element={<TeamSection/>}/>
                        <Route path="/ahouba/developer" element={<DeveloperSection/>}/>
                    </Routes>
                </AnimatePresence>
            </ScrollToTop>
        </>
    )
}

export default App
