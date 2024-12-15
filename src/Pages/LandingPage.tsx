import DisplaySection from "../sections/DisplaySection.tsx";
import SponsorSection from "../sections/SponsorSection.tsx";
import HorizontalScroll from "../sections/HorizontalScroll.tsx";
import HeroSection from "../sections/HeroSection.tsx";
import MarqueeSection from "../sections/MarqueeSection.tsx";

const LandingPage = () => {
    return (
        <div className="App w-screen min-h-lvh relative">
            <HeroSection/>
            <MarqueeSection text={"AHOUBA"}/>
            <HorizontalScroll/>
            <DisplaySection/>
            <SponsorSection/>
        </div>
    )
}
export default LandingPage
