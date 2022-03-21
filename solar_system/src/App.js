import { Canvas } from '@react-three/fiber'
import React, { Suspense } from "react";
import { OrbitControls, Stars } from '@react-three/drei'

function App() {

  return (
    <Canvas>
      <Suspense fallback={null}>
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={0.4} />
        <directionalLight />
        <OrbitControls />
        <Stars />
      </Suspense>
    </Canvas>
  );
}

export default App;
