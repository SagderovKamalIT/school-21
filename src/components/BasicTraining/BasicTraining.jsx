import React from "react";
import styles from "./BasicTraining.module.scss";
import Heading from "../Heading/Heading";

export default function TrainingInfo() {
  return (
    <section id="training" className={styles.training}>
      <div className={styles["block-wrap"]}>
        <div className={styles["training__inner"]}>
          <div className={styles["training__container"]}>
            <Heading  className={styles["training__title"]}>
              ОСНОВНОЕ ОБУЧЕНИЕ
            </Heading>

            <span className={styles["training__headline-pill"]}>
              Старт основного обучения <br className={styles["mobile-br"]}/> 21 ноября 2025 года.
            </span>

            <div className={styles["training__important"]}>
              <span className={styles["training__important-badge"]}>
                ВАЖНО!
              </span>

              <p className={styles["training__important-text"]}>
                всем участникам основного обучения в первый день необходимо
                принести заполненные оригиналы документов в кампус.
              </p>
            </div>

            <div className={styles["training__text-container"]}>
              <p className={styles["training__text"]}>
                Документы будут видны после установочной встречи в личном
                кабинете, <br />
                откуда можно будет их скачать по ссылке. <br />
                Записаться на эту встречу можно в личном кабинете.
              </p>

              <span className={styles["training__text-span"]}>
                Следите за анонсами в{" "}
                <a
                  href="https://t.me/c/3023785453/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["training__text-link"]}
                >
                  тг
                </a>{" "}
                и проверяйте рассылку!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
