import React from "react";
import JobCardsStyle from "./JobPrepCard.module.scss";

import BlockTitle from "../BlockTitle/BlockTitle";
import SectionTitle from "../SectionTitle/SectionTitle";

import { jobPrepData } from "../../data/jobPrep";

function JobPrepCard({text, image}) {

  return (

   <div className={JobCardsStyle.card}>
      <div className={JobCardsStyle.cardContainer}>
        <p  style={{ whiteSpace: "pre-line" }} className={JobCardsStyle.cardText}>{text}</p>
        
        <div className={JobCardsStyle.imageWrapper}>

         

          <img src={image} alt={text} className={JobCardsStyle.cardImage} />
     
        </div>
        
      </div>
    </div>

  )

}

export default JobPrepCard;