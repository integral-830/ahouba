import Hero from "../components/Hero.tsx";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

function HeroSection() {

    const videoRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(()=>{
        gsap.set(videoRef.current, {
            clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
            borderRadius: "10% 10% 40% 10%",
        });
        gsap.from(videoRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "2% 2% 2% 2%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        })
    })

    return (
        <section className="relative h-lvh w-screen ">

            <div ref={containerRef} className="absolute w-full h-full flex items-center justify-center">
                <div ref={videoRef}
                    className="absolute flex items-center justify-center h-[80vh] w-[90vw] border-2 rounded-3xl border-[#DFDFF2] overflow-hidden [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent animate-border">
                    <video
                        src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/bgVideo2.mp4"
                        autoPlay
                        muted
                        loop
                        className="object-cover w-full h-full "
                    />
                </div>
            </div>
            <div className="absolute flex flex-col h-lvh w-screen overflow-hidden">
                <Hero/>
            </div>
        </section>
    )
}

export default HeroSection