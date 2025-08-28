import React from "react";
import ParagraphStyles from "./ParagraphBlock.module.scss";

function Paragraph({ className = "", children }) {
  return (
    <p className={`${ParagraphStyles.paragraph} ${className}`}>
       {children}
      </p>
  )
}

export default Paragraph;