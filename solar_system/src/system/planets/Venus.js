import { NoRingPlanet } from "./template/NoRingPlanet";
import { sizeVenus, distSunVenus } from "../values/measurements";

export const Venus = ({ sunRef }) => {

    return (
        <>
            <NoRingPlanet sunRef={sunRef} distanceFromSun={distSunVenus} radius={sizeVenus} />
            {console.log(distSunVenus)}
            {console.log(sizeVenus)}
        </>
    )

}