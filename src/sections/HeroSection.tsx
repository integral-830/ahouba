import Hero from "../components/Hero.tsx";
import ParticlesComponent from "../components/Particle.tsx";

function HeroSection() {

    return (
        <section className="relative h-lvh w-screen ">
            <div className=" h-lvh w-screen absolute">
                <ParticlesComponent id="particles" />
            </div>
            <div className="absolute flex flex-col h-lvh w-screen overflow-hidden">
                <Hero/>
            </div>
        </section>
    )
}

export default HeroSection