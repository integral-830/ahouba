import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect} from "react";

const Model = () => {
    const model = useGLTF("https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/spacecraft.glb")
    const animations = useAnimations(model.animations, model.scene)
    useEffect(() => {
        const action = animations.actions.Hover
        action?.play()
    })
    return (
        <primitive object={model.scene} scale={0.30}/>
    )
}
export default Model
