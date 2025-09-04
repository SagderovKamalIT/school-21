import React from "react";
import admissionStyles from "./AdmissionSection.module.scss";
import { section } from "framer-motion/client";
import { admissionData } from "../../data/admission";

import Title from "../SectionTitle/SectionTitle";

function Admission() {
   const rows = [];
  for (let i = 0; i < admissionData.length; i += 2) {
    rows.push(admissionData.slice(i, i + 2));
  }

  return (
    <section className={admissionStyles.admission}>
      <div className="block-wrap">
        <div className={admissionStyles.admissionContent}>
          <Title>// Как поступить:</Title>

       <div className={admissionStyles.admissionContainer}>
  {rows.map((row, rowIndex) => (
    <ul
      key={rowIndex}
      className={`${admissionStyles.row} ${admissionStyles[`row${rowIndex + 1}`]}`}
    >
      {row.map((item) => (
        <li
          key={item.id}
          className={`${admissionStyles.admissionContainerCard} ${
            item.className ? admissionStyles[item.className] : ""
          }`}
        >
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.extraText && (
            <p className={admissionStyles.extraText}>{item.extraText}</p>
          )}
        </li>
      ))}
    </ul>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}

export default Admission;
