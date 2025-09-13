import React from "react";
import ParagraphStyles from "./ParagraphBlock.module.scss";

function Paragraph({ className = "", style={}, children }) {
  return (
    <p className={`${ParagraphStyles.paragraph} ${className}`} style={style}>
       {children}
      </p>
  )
}

export default Paragraph;