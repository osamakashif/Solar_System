import { NoRingPlanet } from "./template/NoRingPlanet";
import { sizeJupiter, distSunJupiter } from "../values/measurements";
import JupiterSurface from "./surfaces/jupiter.jpg"
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const Jupiter = ({ sunRef }) => {

    const texture = useLoader(TextureLoader, JupiterSurface);

    return (
        <>
            <NoRingPlanet sunRef={sunRef} distanceFromSun={distSunJupiter} radius={sizeJupiter} texture={texture} />
        </>
    )

}