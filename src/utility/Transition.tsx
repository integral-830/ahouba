import {motion} from 'framer-motion';
import SplitText from "../components/SplitText.tsx";

const Transition = (Children: any) => {
    return () => (
        <>
            <Children/>
            <motion.div className="slide-in"
                        initial={{scaleY: 0}}
                        animate={{scaleY: 0}}
                        exit={{scaleY: 1}}
                        transition={{duration: 1.5, ease: [0.22, 1, 0.36, 1]}}
            >
                <div className="w-full h-full flex flex-col flex-center gap-10 bg-[#008063]">
                    <img className="h-[150px] w-[150px] md:w-[200px] md:h-[200px] object-cover hover:scale-105"
                         src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ahoubaLogo.svg" alt="icon"/>
                    <SplitText
                        text="AHOUBA"
                        className="customFont hero-heading"
                        delay={150}
                        animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
                        animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
                        threshold={0.2}
                        rootMargin="-50px"
                    />
                </div>
            </motion.div>
            <motion.div className="slide-out"
                        initial={{scaleY: 1}}
                        animate={{scaleY: 0}}
                        exit={{scaleY: 0}}
                        transition={{duration: 1.5, ease: [0.22, 1, 0.36, 1]}}
            >
                <div className="w-full h-full flex flex-col flex-center gap-10 bg-[#008063]">
                    <img className="h-[150px] w-[150px] md:w-[200px] md:h-[200px] object-cover hover:scale-105"
                         src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ahoubaLogo.svg" alt="icon"/>
                    <h1 id="hero-title" className="customFont hero-heading">AHOUBA</h1>
                </div>
            </motion.div>

        </>
    )
}
export default Transition
