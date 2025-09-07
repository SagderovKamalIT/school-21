import React from "react";
import EmployersStyles from "./Employers.module.scss";
import Button from "../Button/Button";
import EmployersSlider from "../EmployersSlider/EmployersSlider";

import { employersData } from "../../data/employers";
import { wrap } from "framer-motion";

function Employers() {
  return (
    <section className={EmployersStyles.employersSection}>
      <div className={`employers-wrap ${EmployersStyles.employersWrap}`}>
        <p className={EmployersStyles.title}>{employersData.title}</p>

        <EmployersSlider employers={employersData.employers} />

        <Button
          className={EmployersStyles.employersButton}
          text={employersData.buttonText}
          onClick={() => {
            const formSection = document.getElementById("faq");
            formSection?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </section>
  );
}
export default Employers;
