import {motion} from 'framer-motion';
import typo from "../assets/images/typo.svg"

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
                <div className="w-full h-full flex flex-col flex-center bg-[#7000df]">
                    <img className="h-[250px] w-[250px] md:w-[350px] md:h-[350px] hover:scale-105"
                         src={typo} alt="icon"/>
                </div>
            </motion.div>
            <motion.div className="slide-out"
                        initial={{scaleY: 1}}
                        animate={{scaleY: 0}}
                        exit={{scaleY: 0}}
                        transition={{duration: 1.5, ease: [0.22, 1, 0.36, 1]}}
            >
                <div className="w-full h-full flex flex-col flex-center bg-[#7000df]">
                    <img className="h-[250px] w-[250px] md:w-[350px] md:h-[350px]  hover:scale-105"
                         src={typo} alt="icon"/>
                </div>
            </motion.div>

        </>
    )
}
export default Transition
