import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import bgVideo from "../assets/videos/bgVideo.mp4"

function HeroSection() {

    return (
        <section className="relative h-dvh w-screen bg-[#DFDFF2]">
            <div className=" h-dvh w-screen absolute">
                <video src={bgVideo} autoPlay loop muted className="h-dvh w-screen object-cover"/>
            </div>
            <div className="absolute flex flex-col h-dvh w-screen overflow-hidden">
                <Navbar/>
                <Hero/>
            </div>
        </section>
    )
}

export default HeroSection