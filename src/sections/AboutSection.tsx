import Squares from "../components/Squares.tsx";

const AboutSection = () => {
    return (
        <section className="h-lvh w-screen relative">
            <Squares
                speed={0.5}
                squareSize={100}
                direction='diagonal' // up, down, left, right, diagonal
                borderColor='#00FFC6'
                hoverFillColor='#9fdfbb'
            />
            <div
                className=" h-full w-full absolute top-0 left-0 z-10 flex flex-col py-40 px-20 gap-10 items-center pointer-events-none">
                <h1 className="customFont uppercase font-zentry text-[#00FFC6] text-3xl md:text-5xl lg:text-[7rem] text-center">About
                    - Ahouba ' 25 –Ultimate Tech Carnival!</h1>
                <div className="w-full h-full flex flex-col lg:flex-row items-center justify-evenly">
                    <img
                        src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/mask.gif"
                        className=" massk w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] object-cover object-center"
                    />
                    <p className="p-10 text-[#00FFC6] text-[1.5vh] lg:text-[2.3vh] text-center max-w-screen-lg w-full ">
                        Get ready for Ahouba25, the electrifying techfest of IIIT Manipur—where innovation meets
                        ingenuity! This isn’t just a festival; it’s a celebration of technology, creativity, and
                        limitless possibilities.
                        With 10+ mind-blowing events, Ahouba25 is a hub for tech enthusiasts, problem-solvers, and
                        visionaries. From cutting-edge AI challenges to robotics face-offs, hackathons, and gaming
                        battles, this is where the future is built.
                        🚀 Code, Create, Compete – Whether you're a programmer, an engineer, or a tech geek, Ahouba25
                        offers the perfect platform to showcase your skills, learn from the best, and push the
                        boundaries of innovation.
                        Join us at IIIT Manipur and be part of a revolution where technology meets passion!
                    </p>
                </div>
            </div>
        </section>
    )
}
export default AboutSection
