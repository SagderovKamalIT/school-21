import React from "react";
import JobPrepStyles from "./JobPrep.module.scss";

import Heading from "../Heading/Heading";
import JobPrepCard from "../JobPrepCard/JobPrepCard";

import { jobPrepData } from "../../data/jobPrep";


function JobPrep() {
  return (

    <section className={JobPrepStyles.jobSection} >

      <div className={`block-wrap ${JobPrepStyles.jobBlock}`} >

        <Heading className={JobPrepStyles.jobPrepHeader}>

          Подготовим к поиску работы сразу после выпуска:
        </Heading>

        <div className={JobPrepStyles.jobBlockContainer} >


        {jobPrepData.map(card => (
          <JobPrepCard
            key={card.id}
            text={card.text}
            image={card.image}
          />

        ))}
        </div>

        



      </div>

    </section>

  )
}

export default JobPrep;