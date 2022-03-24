import { NoRingPlanet } from "./template/NoRingPlanet";
import { sizeMercury, distSunMercury } from "../values/measurements";

export const Mercury = ({ sunRef }) => {

    return (
        <>
            <NoRingPlanet sunRef={sunRef} distanceFromSun={distSunMercury} radius={sizeMercury} />
        </>
    )

}