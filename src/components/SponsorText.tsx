import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const SponsorText = () => {
    const sText = document.querySelectorAll("#sText")
    sText.forEach(sentence => {
        let clutter = ""
        const sentenceText = sentence.textContent;
        const splittedText = sentenceText?.split("")
        splittedText?.forEach(word => {
            clutter += `<span>${word}</span>`
        })
        sentence.innerHTML = clutter
        console.log(sentence)
    })
    useGSAP(() => {
        gsap.to("#sT h1 span", {
            color: "black",
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#sT",
                start: "top center",
                end: "bottom center",
                scrub: 2,
            }
        })
    })

    return (
        <div id="sT" className="w-full py-24 px-12 lg:container lg:px-96 lg:justify-center flex flex-col items-center">
            <h1 id="sText"
                className="special-font text-[10vh] leading-tight text-center text-[#98a051] w-full items-start">SPONSORS</h1>
            <div className="w-full h-[2px] bg-black my-20"></div>
            <h1 id="sText"
                className="py-2 text-[#98a051] text-[2vh] lg:text-[4vh] leading-tight text-center lg:leading-relaxed font-coaster w-full items-start">On
                behalf of the entire team at AHOUBA,</h1>
            <h1 id="sText"
                className="py-2 text-[#98a051] text-[2vh] lg:text-[4vh] leading-tight text-center lg:leading-relaxed font-coaster w-full items-start">we
                would like to express our sincere appreciation for</h1>
            <h1 id="sText"
                className="py-2 text-[#98a051] text-[2vh] lg:text-[4vh] leading-tight text-center lg:leading-relaxed font-coaster w-full items-start">generous
                your support. Your sponsorship has </h1>
            <h1 id="sText"
                className="py-2 text-[#98a051] text-[2vh] lg:text-[4vh] leading-tight text-center lg:leading-relaxed font-coaster w-full items-start">played
                a crucial
                role in the success of this event,</h1>
            <h1 id="sText"
                className="py-2 text-[#98a051] text-[2vh] lg:text-[4vh] leading-tight text-center lg:leading-relaxed font-coaster w-full items-start">and
                we
                are deeply grateful for your partnership.</h1>
            <h1 id="sText"
                className="py-2 text-[#98a051] font-bold text-[2vh] lg:text-[4vh] leading-tight text-center lg:leading-relaxed font-coaster w-full items-start">The
                Ahouba Tech Fest Team</h1>
            <div className="w-full h-[2px] bg-black my-20"></div>
        </div>
    )
}
export default SponsorText
