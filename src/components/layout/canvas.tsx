/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable @shopify/jsx-no-hardcoded-content */
import * as THREE from 'three';

import {Canvas, useFrame} from '@react-three/fiber';
import {Preload} from '@react-three/drei';
import useStore from '@/helpers/store';
import React, {Suspense, useEffect, useRef} from 'react';

const LCanvas = ({children}) => {
  const dom = useStore(state => state.dom);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{position: [0, 0, 10], fov: 22}}
      mode="concurrent"
      onCreated={state => state.events.connect(dom.current)}
      style={{
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        position: 'fixed',
      }}
    >
      <Suspense fallback={null}>
        {children}
        <Rig />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default LCanvas;

function Rig({v = new THREE.Vector3()}) {
  return useFrame(state => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05,
    );
  });
}
