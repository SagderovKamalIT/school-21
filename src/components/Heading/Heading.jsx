import React from 'react'
import HeadingStyles from "./Heading.module.scss"

function Heading({ className = "", children }) {
  return (
    <h2 className={`${HeadingStyles['heading-h2']} ${className}`}>
      {children}
    </h2>
  );
}


export default Heading;