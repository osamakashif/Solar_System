import { Canvas } from '@react-three/fiber'
import React, { Suspense } from "react";
import { OrbitControls, Stars } from '@react-three/drei'
import { SolarSystem } from './system/SolarSystem';

function App() {

  return (
    <Canvas camera={{position: [-30, 350, 300]}}>
      <Suspense fallback={null}>
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={0.4} />
        <directionalLight />
        <OrbitControls minDistance={25} maxDistance={600}/>
        <Stars depth={250} />
        <SolarSystem />
      </Suspense>
    </Canvas>
  );
}

export default App;
