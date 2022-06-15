import React, { Suspense, useRef} from 'react';
import { Canvas } from "@react-three/fiber";
import './App.css';

function Model (props) {
  const group = useRef()


  return (
    <group ref={group} {...props} dispose={null}>

    </group>
  )
}


export default function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [-10, 0, -25], fov: 35 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]}>
          <Model />
        </group>
      </Suspense>
    </Canvas>
  );
}


