import { useRef } from "react"
import { Mercury } from "./planets/Mercury";
import { Venus } from "./planets/Venus";
// import { Planet } from "./planets/Planet";
import { Sun } from "./sun/Sun";

export const SolarSystem = () => {
    const sunRef = useRef();
    return (
        <>
            <Sun sunRef={sunRef} />
            <Mercury sunRef={sunRef}/>
            <Venus sunRef={sunRef} />
        </>
    )
}