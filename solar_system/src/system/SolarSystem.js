import { useRef } from "react"
import { Mercury } from "./planets/Mercury";
// import { Planet } from "./planets/Planet";
import { Sun } from "./sun/Sun";

export const SolarSystem = () => {
    const sunRef = useRef();
    return (
        <>
            <Sun sunRef={sunRef} />
            <Mercury sunRef={sunRef}/>
        </>
    )
}