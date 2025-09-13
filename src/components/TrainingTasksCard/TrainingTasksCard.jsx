import React from "react";
import TrainingCardStyles from "./TrainingTasksCard.module.scss";

import BlockTitle from "../BlockTitle/BlockTitle";
import Paragraph from "../ParagraphBlock/ParagraphBlock";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";

import { trainingTasksData } from "../../data/trainingTasks";

import arrowLeft from "../../assets/images/trainingTasks/arrow-left.svg";
import arrowLeftTablet from "../../assets/images/trainingTasks/arrow-left-tablet.svg";
import arrowLeftMobile from "../../assets/images/trainingTasks/arrow-left-mobile.svg";
import arrowRight from "../../assets/images/trainingTasks/arrow-right.svg";
import arrowRightTablet from "../../assets/images/trainingTasks/arrow-right-tablet.svg";
import arrowRightMobile from "../../assets/images/trainingTasks/arrow-right-mobile.svg";


function TrainingTasksCard({
  id,
  title,
  paragraphs,
  details,
  highlights,
  skills,
  slogan,
  sloganTitle,
  sloganParagraph,
  sloganButton,
}) {
  const cardClass =
    id === "ai-engineer"
      ? TrainingCardStyles.cardAI
      : id === "digital-managers"
        ? TrainingCardStyles.cardDigital
        : TrainingCardStyles.card;

  return (
    <article className={`${TrainingCardStyles.card} ${cardClass}`}>
      <header className={TrainingCardStyles.header}>
        <span className={TrainingCardStyles.badge}>{title}</span>
      </header>

      <div className={TrainingCardStyles.trainingContainer}>
        <div className={TrainingCardStyles.trainingContentImg}>
          <div className={TrainingCardStyles.trainingContent}>
            <div className={TrainingCardStyles.body}>
              {paragraphs.map((item) => (
                <Paragraph
                  key={item.id}
                  className={TrainingCardStyles.trainingParagraph}
                >
                  {item.text}
                </Paragraph>
              ))}
            </div>
            <div className={TrainingCardStyles.details}>
              {details.map((detail) => (
                <div key={detail.id} className={TrainingCardStyles.detailGroup}>
                  {detail.texts.map((line, i) => (
                    <p key={i} className={TrainingCardStyles.detailText}>
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            {highlights.length > 0 && (
              <div className={TrainingCardStyles.highlights}>
                {highlights.map((h) => (
                  <span key={h.id}>{h.text}</span>
                ))}
              </div>
            )}
            <div className={TrainingCardStyles.skills}>
              {skills.map((skill) => (
                <span key={skill.id} className={TrainingCardStyles.skill}>
                  {skill.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={TrainingCardStyles.sloganBlock}>
          <h3 style={{ whiteSpace: "pre-line" }} className={TrainingCardStyles.slogan}>{slogan}</h3>

          <div className={TrainingCardStyles.sloganBlockText}>
            <h4 className={TrainingCardStyles.sloganTitle}>{sloganTitle}</h4>
            <Paragraph className={TrainingCardStyles.sloganParagraph}>
              {sloganParagraph}
            </Paragraph>
          </div>
        </div>

        <div className={TrainingCardStyles.buttonContainer}>
          <picture className={TrainingCardStyles.buttonContainerArrow}>
            <source media="(max-width: 490px)" srcSet={arrowLeftMobile} />
            <source media="(max-width: 1024px)" srcSet={arrowLeftTablet} />
            <img src={arrowLeft} alt="arrowLeft" />
          </picture>
          <Button
            className={TrainingCardStyles.sloganButton}
            text={sloganButton}

            onClick={() => {
              const formSection = document.getElementById("faq");
              formSection?.scrollIntoView({ behavior: "smooth" });
            }}

          ></Button>

          <picture className={TrainingCardStyles.buttonContainerArrow}>
            <source media="(max-width: 490px)" srcSet={arrowRightMobile} />
            <source media="(max-width: 1024px)" srcSet={arrowRightTablet} />
            <img src={arrowRight} alt="arrowRight" />
          </picture>
        </div>
      </div>
    </article>
  );
}

export default TrainingTasksCard;
