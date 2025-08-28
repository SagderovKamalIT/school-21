import React from "react";
import SectionTitleStyles from "./SectionTtitle.module.scss";

function SectionTitle({ className = "", children }) {
  return (
    <h2 className={`${SectionTitleStyles.sectionTitle} ${className}`}>
        {children}
    </h2>
  );
}

export default SectionTitle;