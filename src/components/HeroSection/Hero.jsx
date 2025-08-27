import React from "react";
import HeroStyles from "./Hero.module.scss";
import canvasStyles from "./HeroCanvas.module.scss";
// import { useGLTF } from "@react-three/drei";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef } from "react";
// import { OrbitControls } from "@react-three/drei";

import { heroesTitle } from "../../data/heroes";
import { heroesText } from "../../data/heroes";
import { heroesBtn } from "../../data/heroes";

import robotHand from "../../assets/images/hero/robot-hand.png";
import humanHand from "../../assets/images/hero/human-hand.png";
import textTitle from "../../assets/images/hero/ШКОЛА.png";
import heroLine from "../../assets/icons/hero-line.svg";

/* 
// ВРЕМЕННО ОТКЛЮЧЕНО: Куб + сцена
export function Cube() {
  const { scene } = useGLTF("/models/cube.glb");
  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.01; // вращение вокруг Y
    }
  });

  return (
    <group ref={cubeRef} position={[0, 1.2, -5]}>
      <primitive object={scene} scale={1} position={[-0.5, -0.5, -0.5]} />
    </group>
  );
}
*/

function Hero() {
  return (
    <section
      className={HeroStyles.hero}
      style={{
        "--hand-img": `url(${humanHand})`,
        "--robot-img": `url(${robotHand})`,
      }}
    >
      <div className="wrap">
        <div className={HeroStyles.heroContainer}>
          <img
            className={HeroStyles.heroContainerImg}
            src={textTitle}
            alt="Заголовок 'ШКОЛА'"
          />

          {/* 
          <div className={canvasStyles.canvasWrapper}>
            <Canvas camera={{ position: [0, 1, 10], fov: 50 }} className={canvasStyles.canvas}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} />
              <Cube />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
          */}

          <div className={HeroStyles.heroText}>
            <h1>
              {heroesTitle.lines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < heroesTitle.lines.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <div className={HeroStyles.heroApply}>
              <img src={heroLine} alt="Иконка 'стрелка на право'" />

              <span>{heroesText.title}</span>

              <button className={HeroStyles.heroApplyBtn}>
                {heroesBtn.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
