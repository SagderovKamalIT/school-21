import React from "react";
import TrainingStyles from "./TrainingTasks.module.scss";

import Heading from "../Heading/Heading";
import TrainingTasksCard from "../TrainingTasksCard/TrainingTasksCard";

import { trainingTasksData } from "../../data/trainingTasks";







function TrainingTasks() {
  return (
    <section id="tracks" className={TrainingStyles.trainingTasks}>
      <div className={`block-wrap ${TrainingStyles.trainingBlock}`} >

        <Heading className={TrainingStyles.trainingTasksHeader}>
          /* Треки обучения */
        </Heading>

        <div className={TrainingStyles.cards} >

          {trainingTasksData.map(card => (
            <TrainingTasksCard
              key={card.id}
              id={card.id}
              title={card.title}
              paragraphs={card.paragraphs}
              details={card.details}
              highlights={card.highlights}
              skills={card.skills}
              slogan={card.slogan}
              sloganTitle={card.sloganTitle}
              sloganParagraph={card.sloganParagraph}
              sloganButton={card.sloganButton}
            />
          ))}


        </div>

      </div>

    </section>
  )
}

export default TrainingTasks;