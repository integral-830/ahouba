import SponsorText from "../components/SponsorText.tsx";
import Sponsors from "../components/Sponsors.tsx";
import {FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";
import SponsorIcon from "../components/SponsorIcon.tsx";

const SponsorSection = () => {

    return (
        <section className="sponsorSection w-screen min-h-[200lvh] relative bg-transparent justify-center items-center">
            <div
                className="w-full h-full relative flex flex-col gap-4 md:px-40 py-12 justify-center items-center bg-[#edff66]">
                <SponsorText/>
                <Sponsors/>
            </div>
            <div className="w-full flex flex-col gap-4 md:px-40 py-12">
                <h1 className="customFont text-[8vh] text-center text-[#edff66] w-full items-start">IIIT
                    MANIPUR</h1>
                <div className="w-full h-[70px] flex flex-row justify-around items-center gap-4 px-16 lg:px-96 py-4">
                    <SponsorIcon>
                        <FaYoutube fill="#edff66" className="h-full w-full" />
                    </SponsorIcon>
                    <SponsorIcon>
                        <FaFacebookF  fill="#edff66" className="h-full w-full" />
                    </SponsorIcon>
                    <SponsorIcon>
                        <FaInstagram fill="#edff66" className="h-full w-full" />
                    </SponsorIcon>
                    <SponsorIcon>
                        <BsTwitterX fill="#edff66" className="h-full w-full" />
                    </SponsorIcon>
                </div>
            </div>
        </section>
    )
}
export default SponsorSection
