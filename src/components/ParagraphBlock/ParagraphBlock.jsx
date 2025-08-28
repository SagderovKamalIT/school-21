import React from "react";
import ParagraphStyles from "./ParagraphBlock.module.scss";

function Paragraph({ className = "", children }) {
  return (
    <p className={`${ParagraphStyles.ParagraphStyles} ${className}`}>
       {children}
      </p>
  )
}

export default Paragraph;