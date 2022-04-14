# Solar System

## A Solar System 3D model

This web app uses the React Three.js libraries - `react-three/fiber`, `react-three/drei`, and `three`.

These libraries are used to build a 3-D model of the Solar System.

The distances and sizes of the sun and planets aare not exactly relative since they were kept closer to show more easily. However the orbiting speeds are reflective of how fast they would be relative to each other in reality. For simplicity a circular orbit was assumed.

Effectively, this is a model to show use of the React Three.js libraries and not to model the solar system completely accurately.

### Model

The images of the final model are as follows.

Initially:

![InitialImage](./readme_images/1.jpg)

After a while:

![ImageAfterTime](./readme_images/2.jpg)

Rotating and zooming after a while:

![ShiftedImage](./readme_images/shifted.jpg)

## To run the application

### To install

You need to install Node.js on your device if you do not have it already.
You need to have Node and npm working on your device.
The application was developed with node version 16.14.0, and npm version 8.3.1.

Once you have those you can use the steps to run the application.

### Steps to run

1. Clone the repository;
2. Open the terminal in the `solar_system` directory;
3. Run `npm install`;
4. Run `npm start`.

With these steps the application should be running on your device.

## References

### Information of planets

The planet distances from the Sun and their diameters were taken from Wikipedia.

https://en.wikipedia.org/wiki/Solar_System

The time it took for the planets to orbit the Sun were taken from SpacePlace.

https://spaceplace.nasa.gov/years-on-other-planets/en/

### Images used

The images used to wrap around the planets were taken from Solar System Scope.

https://www.solarsystemscope.com/textures/

The images are as follows.

Sun:

![Sun](./src/system/sun/surfaces/sun.jpg)

Mercury:

![Mercury](./src/system/planets/surfaces/mercury.jpg)

Venus:

![Venus](./src/system/planets/surfaces/venus.jpg)

Earth:

![Earth](./src/system/planets/surfaces/earth.jpg)

Mars:

![Mars](./src/system/planets/surfaces/mars.jpg)

Jupiter:

![Jupiter](./src/system/planets/surfaces/jupiter.jpg)

Saturn:

![Saturn](./src/system/planets/surfaces/saturn.jpg)
![SaturnRing](./src/system/planets/surfaces/saturn_ring.png)

Uranus:

![Uranus](./src/system/planets/surfaces/uranus.jpg)

Neptune:

![Neptune](./src/system/planets/surfaces/neptune.jpg)