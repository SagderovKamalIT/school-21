import React from "react";
import EmployersStyles from "./EmployersSlider.module.scss";
import { employersData } from "../../data/employers";

function EmployersSlider() {
  return (
    <div className={EmployersStyles.sliderWrapper}>
      <div className={EmployersStyles.sliderTrack}>
        {employersData.employers.map((emp) => (
          <div className={EmployersStyles.slide} key={emp.id}>
            <img src={emp.image} alt={`Employer ${emp.id}`} />
          </div>
        ))}
        {/* Дублируем элементы для бесконечного эффекта */}
        {employersData.employers.map((emp) => (
          <div className={EmployersStyles.slide} key={`dup-${emp.id}`}>
            <img src={emp.image} alt={`Employer ${emp.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployersSlider;

