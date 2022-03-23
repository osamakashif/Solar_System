import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import {TextureLoader} from "three"
import SunSurface from "./surfaces/sun.jpg"

export const Sun = ({sunRef}) => {
    const texture = useLoader(TextureLoader, SunSurface);
    useFrame(()=>{
        sunRef.current.rotation.y = sunRef.current.rotation.y+0.002
    })
    return (
        <mesh ref={sunRef} position={[0, 0, 0]}>
            <sphereBufferGeometry />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    )
}