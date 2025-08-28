import React from "react";
import TrainingCardStyles from "./TrainingTasksCard.module.scss";

import BlockTitle from "../BlockTitle/BlockTitle";
import Paragraph from "../ParagraphBlock/ParagraphBlock";
import SectionTitle from "../SectionTitle/SectionTitle";

import { trainingTasksData } from "../../data/trainingTasks";


function TrainingTasksCard({ id, title, paragraphs, details, highlights, skills , slogan, sloganTitle, sloganParagraph}) {
  const cardClass =
    id === "ai-engineer" ? TrainingCardStyles.cardAI :
    id === "digital-managers" ? TrainingCardStyles.cardDigital :
    TrainingCardStyles.card;

  return (
    <article className={`${TrainingCardStyles.card} ${cardClass}`}>
       <header className={TrainingCardStyles.header}>
          <span className={TrainingCardStyles.badge}>{title}</span>
        </header>

        <div className={TrainingCardStyles.trainingContainer} >

       <div className={TrainingCardStyles.trainingContentImg} >

      <div className={TrainingCardStyles.trainingContent}>
      
        <div className={TrainingCardStyles.body}>
          {paragraphs.map(item => (
            <Paragraph key={item.id} className={TrainingCardStyles.trainingParagraph}>
              {item.text}
            </Paragraph>
          ))}
        </div>
        <div className={TrainingCardStyles.details}>
          {details.map(detail => (
            <div key={detail.id} className={TrainingCardStyles.detailGroup}>
              {detail.texts.map((line, i) => (
                <p key={i} className={TrainingCardStyles.detailText}>{line}</p>
              ))}
            </div>
          ))}
        </div>
        {highlights.length > 0 && (
          <div className={TrainingCardStyles.highlights}>
            {highlights.map(h => <span key={h.id}>{h.text}</span>)}
          </div>
        )}
        <div className={TrainingCardStyles.skills}>
          {skills.map(skill => (
            <span key={skill.id} className={TrainingCardStyles.skill}>{skill.text}</span>
          ))}
        </div>
      </div>
       </div>

        <div className={TrainingCardStyles.sloganBlock}>

        
        <h3 className={TrainingCardStyles.slogan}>{slogan}</h3>


        <div className={TrainingCardStyles.sloganBlockText} >

        <h4 className={TrainingCardStyles.sloganTitle}>{sloganTitle}</h4>
        <Paragraph className={TrainingCardStyles.sloganParagraph}>{sloganParagraph}</Paragraph>
          </div>
      </div>
        </div>
      

    </article>
  );
}

export default TrainingTasksCard;

