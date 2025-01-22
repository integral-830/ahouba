import {useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const HorizontalScroll = () => {
    const stickySection = useRef(null);
    const stickyHeader = useRef<HTMLDivElement | null>(null);
    const stickyHeight = window.innerHeight * 2;

    useGSAP(() => {
        ScrollTrigger.create(
            {
                trigger: stickySection.current,
                start: "top top",
                end: `+=${stickyHeight}px`,
                pin: true,
                pinSpacing: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const maxTranslate = stickyHeader?.current?.clientWidth ? stickyHeader.current.clientWidth - window.innerWidth : 0;
                    const translateX = -progress * maxTranslate;
                    gsap.set(stickyHeader.current,
                        {
                            x: translateX
                        }
                    );
                }
            }
        )
    })

    return (
        <section ref={stickySection} className=" relative min-h-lvh w-screen overflow-hidden">
            <div ref={stickyHeader}
                 className="absolute pl-28 top-0 left-0 w-[800vw] md:w-[400vh] h-full flex items-center justify-center will-change-transform bg-[#DFDFF2]">
                <h1 className="font-exwaye text-[30vh] uppercase font-bold text-black">Develop * Debug * Dominate</h1>
            </div>
        </section>
    )
}
export default HorizontalScroll
