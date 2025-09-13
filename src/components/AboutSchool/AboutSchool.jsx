import React from "react";
import AboutSchoolStyles from "./AboutSchool.module.scss";
import Heading from "../Heading/Heading";
import { aboutSchoolData } from "../../data/aboutSchool";

import Cluster from "../../assets/images/aboutSchool/cluster.png";
import Coworking from "../../assets/images/aboutSchool/coworking.png";
import LectureHall from "../../assets/images/aboutSchool/lecture-hall.png";

function AboutSchool() {
  return (
    <section id="campus">
      <div className="block-wrap">
        <div className={AboutSchoolStyles.aboutContainer}>
          <Heading className={AboutSchoolStyles.aboutContainerHeader}>
            {aboutSchoolData.title}
          </Heading>

          <div className={AboutSchoolStyles.aboutContent}>
            {/* Левая часть */}
            <div className={AboutSchoolStyles.aboutContentLeft}>
              <div className={AboutSchoolStyles.aboutContentInfo}>
                <div className={AboutSchoolStyles.aboutContentList}>
                  <ul className={AboutSchoolStyles.aboutContentList1}>
                    {aboutSchoolData.list.slice(0, 3).map((item, index) => (
                      <li key={index}>{item.text}</li>
                    ))}
                  </ul>

                  <ul className={AboutSchoolStyles.aboutContentList2}>
                    {aboutSchoolData.list.slice(3, 4).map((item, index) => (
                      <li key={index}>{item.text}</li>
                    ))}
                  </ul>

                  <ul className={AboutSchoolStyles.aboutContentList3}>
                    {aboutSchoolData.list.slice(4, 6).map((item, index) => (
                      <li key={index}>{item.text}</li>
                    ))}
                  </ul>

                  <ul className={AboutSchoolStyles.aboutContentList4}>
                    {aboutSchoolData.list.slice(6, 7).map((item, index) => (
                      <li key={index}>{item.text}</li>
                    ))}
                  </ul>
                </div>

                {/* Блок с адресом */}
                <div className={AboutSchoolStyles.aboutContentAddress}>
                  {aboutSchoolData.address.map((item, index) =>
                    item.link ? (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p key={index}>{item.text}</p>
                    )
                  )}
                </div>
              </div>

              <div className={AboutSchoolStyles.aboutContentImage}>
                <img src={Cluster} alt="Cluster" />
              </div>
            </div>

            {/* Правая часть */}
            <div className={AboutSchoolStyles.aboutContentRight}>
              <div className={AboutSchoolStyles.aboutImageCoworking}></div>

              <div className={AboutSchoolStyles.aboutImageHall}>
                <img src={LectureHall} alt="LectureHall" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSchool;
