import { NoRingPlanet } from "./template/NoRingPlanet";
import { sizeEarth, distSunEarth } from "../values/measurements";
import EarthSurface from "./surfaces/earth.jpg"
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const Earth = ({ sunRef }) => {

    const texture = useLoader(TextureLoader, EarthSurface);

    return (
        <>
            <NoRingPlanet sunRef={sunRef} distanceFromSun={distSunEarth} radius={sizeEarth} texture={texture} />
        </>
    )

}