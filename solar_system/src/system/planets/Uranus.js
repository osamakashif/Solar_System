import { NoRingPlanet } from "./template/NoRingPlanet";
import { sizeUranus, distSunUranus } from "../values/measurements";
import UranusSurface from "./surfaces/uranus.jpg"
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const Uranus = ({ sunRef }) => {

    const texture = useLoader(TextureLoader, UranusSurface);

    return (
        <>
            <NoRingPlanet sunRef={sunRef} distanceFromSun={distSunUranus} radius={sizeUranus} texture={texture} />
        </>
    )

}