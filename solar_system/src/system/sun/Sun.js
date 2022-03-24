import { useFrame, useLoader } from "@react-three/fiber";
import {TextureLoader} from "three"
import SunSurface from "./surfaces/sun.jpg"
import { sizeSun } from "../values/measurements";

export const Sun = ({sunRef, radius=sizeSun}) => {
    const texture = useLoader(TextureLoader, SunSurface);
    useFrame(()=>{
        sunRef.current.rotation.y = sunRef.current.rotation.y+0.002
    })
    return (
        <mesh ref={sunRef} position={[0, 0, 0]}>
            <sphereBufferGeometry args={[radius]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    )
}