import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function MagneticEffect({children}) {
    const magnetic = useRef(null);

    useEffect( () => {
        const xTo = gsap.quickTo(magnetic.current, "x", {duration: 0.3, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(magnetic.current, "y", {duration: 0.3, ease: "elastic.out(1, 0.3)"})

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width/1.5)
            const y = clientY - (top + height/1.5)
            xTo(x);
            yTo(y)
        }

        const mouseLeave = (e) => {
            gsap.to(magnetic.current, {x: 0, duration: 0.3})
            gsap.to(magnetic.current, {y: 0, duration: 0.3})
            xTo(0);
            yTo(0)
        }

        magnetic.current.addEventListener("mousemove", mouseMove)
        magnetic.current.addEventListener("mouseleave", mouseLeave)

        return () => {
            magnetic.current.removeEventListener("mousemove", mouseMove)
            magnetic.current.removeEventListener("mouseleave", mouseLeave)
        }
    }, [])

    return (
        React.cloneElement(children, {ref:magnetic})
    )
}