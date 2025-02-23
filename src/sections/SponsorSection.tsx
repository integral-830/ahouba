import SponsorText from "../components/SponsorText.tsx";
import Sponsors from "../components/Sponsors.tsx";
import {FaInstagram, FaLinkedin} from "react-icons/fa";
import SponsorIcon from "../components/SponsorIcon.tsx";

const SponsorSection = () => {

    return (
        <section className="sponsorSection w-screen min-h-[200lvh] relative bg-transparent justify-center items-center">
            <div
                className="w-full h-full relative flex flex-col gap-4 md:px-40 py-12 justify-center items-center bg-[#00FFC6]">
                <SponsorText/>
                <Sponsors/>
            </div>
            <div className="w-full flex flex-col gap-4 md:px-40 py-12">
                <h1 className="customFont text-[8vh] text-center text-[#00FFC6] w-full items-start">IIIT
                    MANIPUR</h1>
                <div
                    className="w-full h-[70px] flex flex-col lg:flex-row justify-around items-center gap-4 px-16 lg:px-96 py-4">
                    <div className="w-full flex flex-col flex-center gap-4">
                        <h1 className="text-3xl font-coaster text-[#00ffc6] items-start">Contact Us :</h1>
                        <h1 className="text-3xl text-[#00ffc6] items-start">xyz@iiitmanipur.ac.in</h1>
                    </div>
                    <div className="w-full flex flex-center">
                        <SponsorIcon url="https://www.google.com/">
                            <FaInstagram fill="#00FFC6" className="h-full w-full"/>
                        </SponsorIcon>
                        <SponsorIcon url="https://www.google.com/">
                            <FaLinkedin fill="#00FFC6" className="h-full w-full"/>
                        </SponsorIcon>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SponsorSection
