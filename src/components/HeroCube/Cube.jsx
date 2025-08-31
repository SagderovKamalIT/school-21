import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// если модель в public/models — подключаем так:
import cubeModel from "../../assets/models/cube.glb";

export default function Cube(props) {
  const { scene } = useGLTF(cubeModel); 
  const ref = useRef();

  // вращаем модель вокруг своей оси (как красный куб)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01; // вращение по X
      ref.current.rotation.y += 0.01; // вращение по Y
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1}
      position={[2, -1, 0]} // оставляем в центре сцены
      {...props}
    />
  );
}
