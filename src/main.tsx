import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Navbar from "./components/Navbar.tsx";
import Cursor from "./components/Cursor.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import EventSection from "./sections/EventSection.tsx";
import EventDetails from "./sections/EventDetails.tsx";
import TeamSection from "./sections/TeamSection.tsx";
import DeveloperSection from "./sections/DeveloperSection.tsx";
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Navbar/>
            <Cursor/>
            <Routes>
                <Route path="/ahouba/" element={<App/>}/>
                <Route path="/ahouba/events" element={<EventSection/>}/>
                <Route path="/ahouba/events/:eventName" element={<EventDetails/>}/>
                <Route path="/ahouba/team" element={<TeamSection/>}/>
                <Route path="/ahouba/developer" element={<DeveloperSection/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
