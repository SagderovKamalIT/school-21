import React from "react";
import HeroStyles from "./Hero.module.scss";
import Button from "../Button/Button";

import LottieExample from "../../components/HeroCube/Cube";

import { heroesTitle } from "../../data/heroes";
import { heroesText } from "../../data/heroes";
import { heroesBtn } from "../../data/heroes";

import robotHand from "../../assets/images/hero/robot-hand.png";
import robotHandMobile from "../../assets/images/hero/robot-hand-mobile.png";
import humanHand from "../../assets/images/hero/human-hand.png";
import humanHandTablet from "../../assets/images/hero/human-hand-tablet.png";
import humanHandMobile from "../../assets/images/hero/human-hand-mobile.png";
import textTitle from "../../assets/images/hero/ШКОЛА.png";
import heroLine from "../../assets/icons/hero-line.svg";
import heroLineMobile from "../../assets/icons/hero-line-mobile.svg";
import SectionTitle from "../SectionTitle/SectionTitle";

function Hero() {
  return (
    <section
      className={HeroStyles.hero}
      style={{
        "--hand-img": `url(${humanHand})`,
        "--hand-img-tablet": `url(${humanHandTablet})`,
        "--hand-img-mobile": `url(${humanHandMobile})`,
        "--robot-img": `url(${robotHand})`,
        "--robot-img-mobile": `url(${robotHandMobile})`,
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
              <picture>
                <source media="(max-width: 490px)" srcSet={heroLineMobile} />
                <img src={heroLine} alt="Иконка 'стрелка на право'" />
              </picture>

              <span>{heroesText.title}</span>

              <Button
                className={HeroStyles.heroApplyBtn}
                text={heroesBtn.title}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
