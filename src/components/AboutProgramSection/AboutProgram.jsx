import React from "react";
import AboutProgramStyles from "./AboutProgram.module.scss";

import BlockTitle from "../BlockTitle/BlockTitle";
import Paragraph from "../ParagraphBlock/ParagraphBlock";
import SectionTitle from "../SectionTitle/SectionTitle";

import { aboutProgramTitle } from "../../data/abotProgram";
import { aboutProgramParagraph } from "../../data/abotProgram";
import { aboutProgramBlockTitle } from "../../data/abotProgram";
import { abotProgramSubtitle } from "../../data/abotProgram";

import aboutLine from "../../assets/icons/about-line.svg";

import { motion } from "framer-motion";

function AboutProgram() {
  return (
    <section id="about" className={AboutProgramStyles.about}>
      <div className="block-wrap">
        <div className={AboutProgramStyles.aboutContent}>
          <div
            className={`${AboutProgramStyles.aboutContentText} sectionContainer`}
          >
            <div className={AboutProgramStyles.aboutTitle}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ amount: 0.3 }}
              >
                <SectionTitle className={AboutProgramStyles.sectionTitle}>
                  {aboutProgramTitle.title}
                </SectionTitle>
              </motion.div>

              <Paragraph className={AboutProgramStyles.paragraph}>
                {aboutProgramParagraph.text}
              </Paragraph>
            </div>

            <div className={AboutProgramStyles.sectionBlockTitle}>
              {aboutProgramBlockTitle.map((block, idx) => (
                <BlockTitle
                  className={`${AboutProgramStyles.blockTitle} ${
                    AboutProgramStyles[block.className]
                  }`}
                  key={idx}
                >
                  {block.text}
                </BlockTitle>
              ))}
            </div>

            <p className={AboutProgramStyles.aboutContentSubtitle}>
              {abotProgramSubtitle.text}
            </p>
          </div>

          <div className={AboutProgramStyles.aboutContentImg}></div>
        </div>
      </div>
    </section>
  );
}

export default AboutProgram;
