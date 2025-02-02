import {useGLTF} from "@react-three/drei";

const Model = () => {
    const model = useGLTF("./meetman.glb")
    return (
        <primitive object={model.scene} scale={2}/>
    )
}
export default Model
