/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../common/Loader";

const Lingkaran = (props) => {
  const [decal] = useTexture([props.frontImgUrl, props.backImgUrl]);

  const meshRef = useRef();

  const handleClick = () => {
    if (props.link) {
      window.open(props.link, "_blank");
    }
  };

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow scale={2.75} ref={meshRef} onClick={handleClick}>
        <circleGeometry args={[1, 32]} />
        <meshStandardMaterial color="#fff8eb" flatShading />
        <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} scale={1} map={decal[0]} flatShading /> {/* Gambar depan */}
        <Decal position={[0, 0, -1]} rotation={[0, Math.PI, 0]} scale={1} map={decal[1]} flatShading /> {/* Gambar belakang */}
        {/* pencahayaan */}
        <hemisphereLight intensity={3} groundColor="#f3f3f3" />
      </mesh>
    </Float>
  );
};

const LingkaranCanvas = ({ frontIcon, backIcon, link }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
        <Lingkaran frontImgUrl="/D.jpg" backImgUrl="/D.jpg" link={link} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default LingkaranCanvas;
