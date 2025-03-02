import { Typewriter } from 'react-simple-typewriter'

const TypeWriter = () => {
    return (
        <div className='w-fit '>
            <h1 className="customFont uppercase font-zentry text-[#00FFC6] text-4xl md:text-7xl lg:text-[9rem]">
                <span style={{color: '#fff', fontWeight: 'bold'}}>
                    <Typewriter
                        words={['2.0']}
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
export default TypeWriter
