import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import App from "./App.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route path="/*" element={<App/>}/>
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    </StrictMode>,
)
