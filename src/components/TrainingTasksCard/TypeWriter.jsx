import React from "react";
import { Typewriter } from "react-simple-typewriter";
import TrainingCardStyles from "./TrainingCard.module.scss";

export default function TypingText({ text }) {
  return (
    <p className={TrainingCardStyles.detailText}>
      <Typewriter
        words={[text]}
        loop={1}              
        cursor
        cursorStyle="|"
        typeSpeed={60}      
        deleteSpeed={50}     
        delaySpeed={2000}    
      />
    </p>
  );
}
