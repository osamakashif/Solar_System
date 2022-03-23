import { Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react"

export const NoRingPlanet = ({distanceFromSun, texture}) => {
    const planetRef = useRef();
    useFrame(({clock})=>{
        const time = clock.getElapsedTime();
        planetRef.current.rotation.y = planetRef.current.rotation.y+0.002
        planetRef.current.position.y = distanceFromSun[1]*Math.sin(time);
        planetRef.current.position.x = distanceFromSun[0]*Math.cos(time);
        planetRef.current.position.z = distanceFromSun[2]*Math.cos(time);
    })
    return (
        <mesh ref={planetRef} position={distanceFromSun} >
            <sphereBufferGeometry />
            <meshPhongMaterial color="red" />
            {/* <meshBasicMaterial attach="material" map={texture} /> */}
            {/* {console.log(planetRef)} */}
        </mesh>
    )
}