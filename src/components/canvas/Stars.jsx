/* eslint-disable react/no-unknown-property */
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const whiteRef = useRef();
  const redRef = useRef();

  const [whiteSphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
  const [redSphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    whiteRef.current.rotation.x -= delta / 10;
    whiteRef.current.rotation.y -= delta / 15;

    redRef.current.rotation.x -= delta / 30;
    redRef.current.rotation.y -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      {/* White Stars */}
      <Points ref={whiteRef} positions={whiteSphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="white" size={0.002} sizeAttenuation depthWrite={false} />
      </Points>

      {/* Red Stars */}
      <Points ref={redRef} positions={redSphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="red" size={0.0015} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
