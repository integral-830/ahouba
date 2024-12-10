import SponsorText from "../components/SponsorText.tsx";
import Sponsors from "../components/Sponsors.tsx";
import {FaFacebook, FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";

const SponsorSection = () => {

    return (
        <section className="sponsorSection w-screen min-h-[200dvh] relative bg-black">
            <div
                className="w-screen h-full relative flex flex-col gap-4 md:px-40 py-12 justify-center items-center bg-[#edff66] rounded-b-[50px]">
                <SponsorText/>
                <Sponsors/>
            </div>
            <div className="w-full flex flex-col gap-4 md:px-40 py-12">
                <h1 className="special-font text-[8vh] text-center text-[#edff66] w-full items-start">IIIT
                    MANIPUR</h1>
                <div className="w-full h-[70px] flex flex-row justify-around items-center gap-4 px-16 lg:px-96 py-4">
                    <div className="w-[50px] h-[50px] border-[#edff66] border-2 p-4 items-center rounded-full">
                        <FaYoutube fill="#edff66" className="h-full w-full" />
                    </div>
                    <div className="w-[50px] h-[50px] border-[#edff66] border-2 p-4 items-center rounded-full">
                        <FaFacebookF  fill="#edff66" className="h-full w-full" />
                    </div>
                    <div className="w-[50px] h-[50px] border-[#edff66] border-2 p-4 items-center rounded-full">
                        <FaInstagram fill="#edff66" className="h-full w-full" />
                    </div>
                    <div className="w-[50px] h-[50px] border-[#edff66] border-2 p-4 items-center rounded-full">
                        <BsTwitterX fill="#edff66" className="h-full w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SponsorSection
