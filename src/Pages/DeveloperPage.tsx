import ParticlesComponent from "../components/Particle.tsx";
import PixelTransition from "../components/PixelTransition.tsx";
import Transition from "../utility/Transition.tsx";

const DeveloperPage = () => {
    return (
        <div className=" relative h-lvh w-screen overflow-hidden p-10 pt-36">
            <ParticlesComponent id="particles" />
            <div className="w-full h-full flex flex-col items-center">
                <h1 className="font-coaster text-[5rem] lg:text-[10rem] text-[#00FFC6] w-full">Developer:--</h1>
                <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center">
                    <div className="w-[200px] h-[200px] m-10">
                        <PixelTransition
                            firstContent={
                                <img
                                    src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/integral.png"
                                    alt="default pixel transition content, a cat!"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            }
                            secondContent={
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "grid",
                                        placeItems: "center",
                                        backgroundColor: "#000"
                                    }}
                                >
                                    <h1 id="hero-title"
                                        className="customFont uppercase font-zentry text-[#00FFC6] text-7xl">Integral</h1>
                                </div>
                            }
                            gridSize={12}
                            pixelColor='#00FFC6'
                            animationStepDuration={0.4}
                            className="custom-pixel-card"
                        />
                    </div>
                    <div className="w-full lg:w-fit h-full flex items-center">
                        <div className=" h-1/3 w-full flex justify-end">
                            <div
                                className="font-coaster text-[5rem] md:text-[15rem] text-[#00FFC6] flex items-end h-full text-end">
                                <sub>08</sub></div>
                            <div
                                className="font-coaster text-[10rem] md:text-[35rem] text-[#00FFC6] flex items-center h-full">∫
                            </div>
                            <div
                                className="font-coaster text-[5rem] md:text-[15rem] text-[#00FFC6] flex items-start h-full">
                                <sup>30</sup></div>
                        </div>
                        <h1 className="customFont text-[6rem] md:text-[10vh] text-[#00FFC6]">integral</h1>
                        <div
                            className="font-coaster text-[2rem] md:text-[3rem] text-[#00FFC6] flex p-4">dx
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Transition(DeveloperPage)
