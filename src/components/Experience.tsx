import {OrbitControls} from "@react-three/drei";
import Model from "./Model.tsx";
import {Suspense} from "react";

const Experience = () => {

    return (
        <>
            <OrbitControls enableZoom={false} autoRotate={true} enableDamping={true} makeDefault/>
            <ambientLight intensity={1}/>
            <directionalLight position={[0, 5, 5]} intensity={20} />
            <Suspense>
                <Model/>
            </Suspense>
        </>
    )
}
export default Experience
