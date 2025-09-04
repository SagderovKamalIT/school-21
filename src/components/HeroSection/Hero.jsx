import React from "react";
import HeroStyles from "./Hero.module.scss";
import Button from "../Button/Button";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { useRef } from "react";
// import { Mesh } from "three";

import LottieExample from "../../components/HeroCube/Cube";


import { heroesTitle } from "../../data/heroes";
import { heroesText } from "../../data/heroes";
import { heroesBtn } from "../../data/heroes";

import robotHand from "../../assets/images/hero/robot-hand.png";
import humanHand from "../../assets/images/hero/human-hand.png";
import textTitle from "../../assets/images/hero/ШКОЛА.png";
import heroLine from "../../assets/icons/hero-line.svg";
import SectionTitle from "../SectionTitle/SectionTitle";



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

          <LottieExample />
        
  {/* Тут 3d куб  */}

  {/* <Canvas
    camera={{ position: [5, 0, 5], fov: 75 }}
    style={{
      position: "absolute",  
      top: 0,
      left: 0,
      width: "80%",
      height: "80%",
      zIndex: 1,             
      pointerEvents: "none",
    }}
  >
    <ambientLight intensity={0.5} />
    <directionalLight position={[2, 17, 89]} />
    <Cube />
    <OrbitControls enableZoom={false} enablePan={false} />
  </Canvas> */}


          <div className={HeroStyles.heroText}>

            <SectionTitle>
              {heroesTitle.lines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < heroesTitle.lines.length - 1 && <br />}
                </span>
              ))}
            </SectionTitle>

  
     

            <div className={HeroStyles.heroApply}>
              <img src={heroLine} alt="Иконка 'стрелка на право'" />

              <span>{heroesText.title}</span>

                <Button className={HeroStyles.heroApplyBtn} text={heroesBtn.title} />

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
