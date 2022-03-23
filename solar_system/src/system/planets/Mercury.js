import { useEffect, useState } from "react";
import { NoRingPlanet } from "./template/NoRingPlanet";

export const Mercury = ({ sunRef }) => {

    const [xDist, setXDist] = useState(4)
    const [yDist, setYDist] = useState(4)
    const [zDist, setZDist] = useState(2)

    useEffect(()=>{
        setXDist(sunRef.current.position.x + 4);
        setYDist(sunRef.current.position.y + 4);
        setZDist(sunRef.current.position.z + 2);
    })

    const distance = [xDist, yDist, zDist];

    return (
        <>
            <NoRingPlanet distanceFromSun={distance} />
        </>
    )

}