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
                        <Route path="/ahouba/*" element={<LandingPage/>}/>
                        <Route path="/ahouba/events" element={<EventPage/>}/>
                        <Route path="/ahouba/events/:eventName" element={<EventDetailsPage/>}/>
                        <Route path="/ahouba/team" element={<TeamPage/>}/>
                        <Route path="/ahouba/developer" element={<DeveloperPage/>}/>
                    </Routes>
                </AnimatePresence>
            </ScrollToTop>
        </>
    )
}

export default App
