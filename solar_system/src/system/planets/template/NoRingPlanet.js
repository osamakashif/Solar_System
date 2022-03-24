import { useFrame } from "@react-three/fiber";
import { useRef } from "react"

export const NoRingPlanet = ({sunRef, distanceFromSun, radius=10, texture}) => {
    
    const planetRef = useRef();

    useFrame(({clock})=>{
        const time = clock.getElapsedTime();
        let theta = (time)*Math.PI/3;
        planetRef.current.rotation.y = planetRef.current.rotation.y+0.002
        planetRef.current.position.x = sunRef.current.position.x + (distanceFromSun*(Math.sin(theta)));
        planetRef.current.position.y = sunRef.current.position.y + -(distanceFromSun*(Math.cos(theta)));
        planetRef.current.position.z = sunRef.current.position.z + (distanceFromSun*(Math.cos(theta)));
    })

    const MeshToRender =() => {
        if (texture == null) {
            return (
                <meshPhongMaterial color="red" />
            );
        } else {
            return (
                <meshBasicMaterial attach="material" map={texture} />
            );
        }
    }

    return (
        <mesh ref={planetRef} position={distanceFromSun} >
            <sphereBufferGeometry args={[radius]}/>
            <MeshToRender />
        </mesh>
    )
}