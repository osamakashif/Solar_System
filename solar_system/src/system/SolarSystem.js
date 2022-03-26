import { useRef } from "react"
import { Earth } from "./planets/Earth";
import { Jupiter } from "./planets/Jupiter";
import { Mars } from "./planets/Mars";
import { Mercury } from "./planets/Mercury";
import { Neptune } from "./planets/Neptune";
import { Saturn } from "./planets/Saturn";
import { Uranus } from "./planets/Uranus";
import { Venus } from "./planets/Venus";
import { Sun } from "./sun/Sun";

export const SolarSystem = () => {
    const sunRef = useRef();
    return (
        <>
            <Sun sunRef={sunRef} />
            <Mercury sunRef={sunRef}/>
            <Venus sunRef={sunRef} />
            <Earth sunRef={sunRef} />
            <Mars sunRef={sunRef} />
            <Jupiter sunRef={sunRef} />
            <Saturn sunRef={sunRef} />
            <Uranus sunRef={sunRef} />
            <Neptune sunRef={sunRef} />
        </>
    )
}