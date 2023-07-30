/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, PerspectiveCamera, Preload, RenderTexture, Text, useTexture } from "@react-three/drei";
import CanvasLoader from "../common/Loader";

const Rectangle = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  const meshRef = useRef();

  // ambil props.link agar bisa di klik
  const link = props.link;

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} ref={meshRef} onClick={handleClick}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#fff8eb" flatShading />
        <RenderTexture attachArray="map" />
        <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} scale={1} map={decal} flatShading />
        <Decal position={[0, 0, -1]} rotation={[0, 0, 0]} scale={1} map={decal} flatShading />
        <Decal position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1} map={decal} flatShading />
        <Decal position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1} map={decal} flatShading />
        <Decal position={[1, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={1} map={decal} flatShading />
        <Decal position={[-1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={1} map={decal} flatShading />
      </mesh>
    </Float>
  );
};

const RectangleCanvas = ({ icon, link }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
        <Rectangle imgUrl={icon} link={link} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RectangleCanvas;
