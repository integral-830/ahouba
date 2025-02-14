import { Typewriter } from 'react-simple-typewriter'

const typeWriter = () => {
    return (
        <div className='w-full '>
            <h1 className="customFont uppercase font-zentry text-[#DFDFF2] text-4xl md:text-7xl lg:text-[7rem]">
                <span style={{color: '#9fdfbb', fontWeight: 'bold'}}>
                    <Typewriter
                        words={['Code', 'Conquer', 'Celebrate !']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
        </span>
            </h1>
        </div>
    )
}
export default typeWriter
