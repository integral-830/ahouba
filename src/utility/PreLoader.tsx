import Waves from "../components/Waves.tsx";
import {useEffect, useState} from "react";
import CountUp from "../components/CountUp.tsx";
import typo from "../assets/images/typo.svg";

const PreLoader = () => {

    const [currentValue, setCurrentValue] = useState(0);
    const updateCounter = () => {
        if (currentValue === 100) {
            return;
        }
        setCurrentValue(currentValue + Math.floor(Math.random() * 10)+3);
        if (currentValue > 100) {
            setCurrentValue(100);
        }
    }

    useEffect(() => {
        const delay = Math.floor(Math.random() * 200) + 100;
        const timer = setInterval(updateCounter, delay);
        return () => {
            clearTimeout(timer);
        }
    }, [currentValue]);

    return (
        <section className="w-screen h-lvh relative">
            <div className="absolute z-0 top-0 left-0 w-full h-full">
                <Waves
                    lineColor="#00b38b"
                    backgroundColor="rgba(0, 77, 59,1)"
                    waveSpeedX={0.02}
                    waveSpeedY={0.01}
                    waveAmpX={40}
                    waveAmpY={20}
                    friction={0.9}
                    tension={0.01}
                    maxCursorMove={120}
                    xGap={12}
                    yGap={36}
                />
            </div>
            <div className="absolute z-10 top-0 left-0 w-full h-full">
                <div className="relative flex flex-col w-full h-full">
                    <div className="w-full h-full flex flex-center">
                        <img className="h-[250px] w-[300px] md:w-[500px] md:h-[650px] lg:w-full lg:h-full lg:scale-50"
                             src={typo} alt="icon"/>
                    </div>
                    <div className="counter w-full h-fit flex justify-end px-20 lg:py-4">
                        <CountUp
                            from={0}
                            to={currentValue}
                            separator=","
                            direction="up"
                            duration={0.1}
                            className="count-up-text customFont uppercase font-zentry text-[#00FFC6] text-[15vh] lg:text-[20vh]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PreLoader
