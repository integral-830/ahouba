import SponsorText from "../components/SponsorText.tsx";
import Sponsors from "../components/Sponsors.tsx";

const SponsorSection = () => {

    return (
        <section className="sponsorSection w-screen min-h-[200lvh] relative bg-transparent justify-center items-center">
            <div
                className="w-full h-full relative flex flex-col gap-4 md:px-40 py-12 justify-center items-center bg-[#8080cb]">
                <SponsorText/>
                <Sponsors/>
            </div>
            <footer className=" rounded-lg shadow-sm dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div
                           className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ahoubaLogo.svg" className="h-16" alt="ahouba logo"/>
                            <span
                                className="self-center font-semibold whitespace-nowrap dark:text-white customFont text-[5vh] text-center text-[#8080cb]">IIIT MANIPUR</span>
                        </div>
                        <ul className="flex flex-wrap items-center mb-6 text-2xl font-medium text-[#8080cb] sm:mb-0 dark:text-gray-400">
                            <li><a href="https://www.instagram.com/ahouba_iiitmanipur?igsh=OHpmZ2twYW55OWxr" target="_blank" className="nav-btn me-4 md:me-6">Instagram</a></li>
                            <li><a href="https://in.linkedin.com/company/ahouba-iiitm" target="_blank" className="nav-btn me-4 md:me-6">Linked In</a></li>
                        </ul>
                    </div>
                    <div className="w-full flex gap-4">
                        <h1 className="text-2xl font-coaster text-[#8080cb] items-start">Contact Us :</h1>
                        <h1 className="text-xl text-[#8080cb] items-start">ayus230102017@iiitmanipur.ac.in</h1>
                    </div>
                    <hr className="my-6 border-[#8080cb] sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <span className="block text-lg text-[#8080cb] sm:text-center dark:text-gray-400">© 2025  <a
                        href="https://flowbite.com/"
                        className="hover:underline"> AHOUBA™ </a>. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </section>
    )
}
export default SponsorSection
