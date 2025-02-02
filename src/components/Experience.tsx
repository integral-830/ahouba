import {OrbitControls} from "@react-three/drei";
import Model from "./Model.tsx";
import {Suspense} from "react";

const Experience = () => {

    return (
        <>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[0, 0, 5]} intensity={1.5} />
            <Suspense>
                <Model/>
            </Suspense>
        </>
    )
}
export default Experience
