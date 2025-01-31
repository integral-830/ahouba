import ParticlesComponent from "../components/Particle.tsx";

const DeveloperSection = () => {
    return (
        <div className=" relative h-lvh w-screen overflow-hidden p-10 pt-36">
            <ParticlesComponent id="particles" />
            <div className="w-full h-full flex flex-col items-center">
                <h1 className="font-coaster text-[5rem] lg:text-[10rem] text-[#dfdff2] w-full">Developer:--</h1>
                <div className="w-full h-full flex items-center">
                    <div className=" h-1/3 w-full flex justify-end">
                        <div
                            className="font-coaster text-[5rem] md:text-[15rem] text-[#dfdff2] flex items-end h-full text-end">
                            <sub>08</sub></div>
                        <div
                            className="font-coaster text-[10rem] md:text-[35rem] text-[#dfdff2] flex items-center h-full">∫
                        </div>
                        <div
                            className="font-coaster text-[5rem] md:text-[15rem] text-[#dfdff2] flex items-start h-full">
                            <sup>30</sup></div>
                    </div>
                    <h1 className="customFont text-[6rem] md:text-[10vh] text-[#dfdff2]">integral</h1>
                    <div
                        className="font-coaster text-[2rem] md:text-[3rem] text-[#dfdff2] flex p-4">dx
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeveloperSection
