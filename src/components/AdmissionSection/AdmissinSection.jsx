import React from "react";
import { motion } from "framer-motion";
import admissionStyles from "./AdmissionSection.module.scss";
import { admissionData } from "../../data/admission";

import Title from "../SectionTitle/SectionTitle";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Admission() {
  const rows = [];
  for (let i = 0; i < admissionData.length; i += 2) {
    rows.push(admissionData.slice(i, i + 2));
  }

  return (
    <motion.section
      id="apply"
      className={admissionStyles.admission}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="block-wrap">
        <div className={admissionStyles.admissionContent}>
          <Title>// Как поступить:</Title>

          <motion.div
            className={admissionStyles.admissionContainer}
            variants={containerVariants}
          >
            {rows.map((row, rowIndex) => (
              <motion.ul
                key={rowIndex}
                className={`${admissionStyles.row} ${
                  admissionStyles[`row${rowIndex + 1}`]
                }`}
                variants={containerVariants}
              >
                {row.map((item, itemIndex) => (
                  <motion.li
                    key={item.id}
                    className={`
                      ${admissionStyles.admissionContainerCard} 
                      ${item.className ? admissionStyles[item.className] : ""} 
                      ${admissionStyles[`card-${rowIndex + 1}-${itemIndex + 1}`]}
                    `}
                    variants={cardVariants}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>

                    {item.extraText && (
                      <p className={admissionStyles.extraText}>
                        {item.extraText}
                      </p>
                    )}

                    {rowIndex === 0 && itemIndex === 0 && (
                      <a
                        href="https://applicant.21-school.ru/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={admissionStyles.admissionButton}
                      >
                        Регистрация
                      </a>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Admission;
