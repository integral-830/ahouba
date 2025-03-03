import Particles from "../utility/Particles.tsx";
import PixelTransition from "../components/PixelTransition.tsx";
import Transition from "../utility/Transition.tsx";
import GradientText from "../components/GradientText.tsx";

const DeveloperPage = () => {
    return (
        <div className=" relative h-lvh w-screen overflow-hidden p-10 pt-36">
            <Particles
                particleColors={['#ffffff', '#7000df', '#d9b3ff', '#5a00b3']}
                particleCount={500}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
            <div className="w-full h-full flex flex-col items-center">
                <GradientText
                    id="hero-title"
                    colors={["#172033", "#fff", "#172033", "#fff", "#172033"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="font-coaster text-[5rem] lg:text-[10rem]"
                >
                    Developer:--
                </GradientText>
                <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center">
                    <div className="w-[200px] h-[200px] m-10">
                        <PixelTransition
                            firstContent={
                                <img
                                    src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/integral.png"
                                    alt="default pixel transition content, a cat!"
                                    style={{width: "100%", height: "100%", objectFit: "cover"}}
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
                                    <GradientText
                                        id="hero-title"
                                        colors={["#172033", "#fff", "#172033", "#fff", "#172033"]}
                                        animationSpeed={3}
                                        showBorder={false}
                                        className="customFont uppercase font-zentry text-[#DFDFF2] text-7xl justify-center"
                                    >
                                        Integral
                                    </GradientText>
                                </div>
                            }
                            gridSize={12}
                            pixelColor='#7000df'
                            animationStepDuration={0.4}
                            className="custom-pixel-card"
                        />
                    </div>
                    <div className="w-full lg:w-fit h-full flex items-center">
                        <div className=" h-1/3 w-full flex justify-end">
                            <div
                                className="font-coaster text-[5rem] md:text-[15rem] text-[#DFDFF2] flex items-end h-full text-end">
                                <sub>08</sub>
                            </div>
                            <div
                                className="font-coaster text-[10rem] md:text-[35rem] text-[#DFDFF2] flex items-center h-full">∫
                            </div>
                            <div
                                className="font-coaster text-[5rem] md:text-[15rem] text-[#DFDFF2] flex items-start h-full">
                                <sup>30</sup>
                            </div>
                        </div>
                        <GradientText
                            id="hero-title"
                            colors={["#172033", "#fff", "#172033", "#fff", "#172033"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="customFont text-[6rem] md:text-[10vh]"
                        >
                            integral
                        </GradientText>
                        <div>
                            <GradientText
                                id="hero-title"
                                colors={["#172033", "#fff", "#172033", "#fff", "#172033"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="font-coaster text-[2rem] md:text-[3rem] text-[#DFDFF2] flex p-4"
                            >
                                dx
                            </GradientText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Transition(DeveloperPage)
