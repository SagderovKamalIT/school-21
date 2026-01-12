import React from "react";
import AboutSchoolStyles from "./AboutSchool.module.scss";
import Heading from "../Heading/Heading";
import { aboutSchoolData } from "../../data/aboutSchool";
import { Typewriter } from "react-simple-typewriter";

import Cluster from "../../assets/images/aboutSchool/cluster1.jpg";
import Coworking from "../../assets/images/aboutSchool/coworking.jpg";
import LectureHall from "../../assets/images/aboutSchool/lecture-hall.jpg";

function AboutSchool() {
  return (
    <section id="campus">
      <div className="block-wrap">
        <div className={AboutSchoolStyles.aboutContainer}>
          <Heading className={AboutSchoolStyles.aboutContainerHeader}>
            <span>
              {aboutSchoolData.title}{" "}
              <Typewriter
                words={["/* О ШКОЛE */"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </Heading>

          <div className={AboutSchoolStyles.aboutContent}>
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
                <img className={AboutSchoolStyles.aboutContentImageCluster} src={Cluster} alt="Cluster" />
              </div>
            </div>

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
