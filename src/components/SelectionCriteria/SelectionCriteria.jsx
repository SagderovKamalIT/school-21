import React from "react";
import SelectionStyles from "./SelectionCriteria.module.scss";
import Heading from "../Heading/Heading";
import { selectionData } from "../../data/selectionCriteria";
import dividerLine from "../../assets/icons/selectionBlockLine.svg";
import { Typewriter } from "react-simple-typewriter";


function SelectionCriteria() {
  return (
    <section className={SelectionStyles.selectionSection}>
      <div className="block-wrap">
        <div className={SelectionStyles.selectionContent}>

          <Heading className={SelectionStyles.selectionHeader}>
            {selectionData.title}
          </Heading>

          <ol className={SelectionStyles.selectionList}>
            {selectionData.list.map((item, idx) => (
              <li key={idx} className={SelectionStyles.selectionlistItem}>
                {item.parts.map((part, i) => (
                  <span
                    style={{ whiteSpace: "pre-line" }}
                    key={i}
                    className={part.style === "bold" ? SelectionStyles.boldText : ""}
                  >
                    {part.text}
                  </span>
                ))}
              </li>
            ))}
          </ol>

          <div className={SelectionStyles.selectionDayItems}>
            {selectionData.days.map((day, idx) => (
              <React.Fragment key={idx}>
                <div className={SelectionStyles.dayItem}>
                  <span className={SelectionStyles.label}>{day.label}</span>
                  <span  className={SelectionStyles.value}>
                    {day.value?.trim() === "появятся позже" ? (
                      <Typewriter
                        words={[day.value.trim()]} 
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}            
                        deleteSpeed={50}           
                        delaySpeed={2000}          
                      />
                    ) : (
                      day.value
                    )}
                  </span>
                </div>

                {idx === 1 && (
                  <img
                    src={dividerLine}
                    alt="divider"
                    className={SelectionStyles.divider}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default SelectionCriteria;
