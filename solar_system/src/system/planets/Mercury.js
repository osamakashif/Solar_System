import { NoRingPlanet } from "./template/NoRingPlanet";
import { sizeMercury, distSunMercury } from "../values/measurements";
import MercurySurface from "./surfaces/mercury.jpg"
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const Mercury = ({ sunRef }) => {
    
    const texture = useLoader(TextureLoader, MercurySurface);

    return (
        <>
            <NoRingPlanet sunRef={sunRef} distanceFromSun={distSunMercury} radius={sizeMercury} texture={texture} />
        </>
    )

}