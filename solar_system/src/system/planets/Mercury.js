import { NoRingPlanet } from "./template/NoRingPlanet";

export const Mercury = ({ sunRef }) => {
    let x_distance = 0;
    let y_distance = 0;
    let z_distance = 0;
    if (sunRef == null) {
        x_distance = sunRef.current.position.x + 5;
        y_distance = sunRef.current.position.y + 5;
        z_distance = sunRef.current.position.z + 0;
    } else {
        x_distance = 4;
        y_distance = 4;
        z_distance = 2;
    }
    const distance = [x_distance, y_distance, z_distance];

    //useState

    //Put code inside useEffect

    return (
        <>
            <NoRingPlanet distanceFromSun={distance} />
        </>
    )

}