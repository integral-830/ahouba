import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import App from "./App.tsx";
import ScrollToTop from "./utility/ScrollToTop.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ScrollToTop>
                    <Routes>
                        <Route path="/*" element={<App/>}/>
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>,
)
