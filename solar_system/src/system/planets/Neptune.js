import { NoRingPlanet } from "./template/NoRingPlanet";
import { sizeNeptune, distSunNeptune } from "../values/measurements";
import NeptuneSurface from "./surfaces/neptune.jpg"
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const Neptune = ({ sunRef }) => {

    const texture = useLoader(TextureLoader, NeptuneSurface);

    return (
        <>
            <NoRingPlanet sunRef={sunRef} distanceFromSun={distSunNeptune} radius={sizeNeptune} texture={texture} />
        </>
    )

}