import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";

function HeroSection() {

    return (
        <section className="relative h-lvh w-screen bg-[#DFDFF2]">
            <div className=" h-lvh w-screen absolute">
                <video src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/bgVideo.mp4" autoPlay loop muted className="h-lvh w-screen object-cover"/>
            </div>
            <div className="absolute flex flex-col h-lvh w-screen overflow-hidden">
                <Navbar/>
                <Hero/>
            </div>
        </section>
    )
}

export default HeroSection