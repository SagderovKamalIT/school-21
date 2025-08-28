import react from "react";
import BlockTitleStyles from "./BlockTitle.module.scss";

function BlockTitle({ className = "", children }) {
  return (
    <h2 className={`${BlockTitleStyles.BlockTitle} ${className}`} >
      {children}
    </h2>
  )
}

export default BlockTitle;