import { useEffect, useState } from "react";
import { NoRingPlanet } from "./template/NoRingPlanet";

export const Mercury = ({ sunRef }) => {

    return (
        <>
            <NoRingPlanet sunRef={sunRef} distanceFromSun={35} radius={4} />
        </>
    )

}