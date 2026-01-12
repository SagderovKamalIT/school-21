import styles from "./Header.module.scss";
import { motion } from "framer-motion";

import { headerItems } from "../../data/header";

import schoolLogo from "../../assets/images/header/school21_logo.svg";
import rudnLogo from "../../assets/images/header/rudn_logo.svg";
import x from "../../assets/images/header/x.svg";

import HeaderBurger from "../HeaderBurger/HeaderBurger";

function Header() {
  return (
    <header className={styles.header}>
      <div className="header-wrap">
        <div className={styles.headerContainer}>
          <div className={styles.headerLink}>
            <a
              className={styles.headerLinkSber}
              href="https://21-school.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={schoolLogo} alt="Логотип 'ШКОЛА_21'" />
            </a>

            <a className={styles.imageX} href="">
              <img className={styles.imageX} src={x} alt="x" />
            </a>

            <a
              className={styles.headerLinkRudn}
              href="https://www.rudn.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={rudnLogo} alt="Логотип 'РУДН'" />
            </a>
          </div>

          <HeaderBurger items={headerItems} />

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {headerItems.map((item, index) => {
                return (
                  <motion.li
                    key={index}
                    className={styles.navItem}
                    whileHover={{
                      scale: 1,
                      color: "#A0E720",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.isButton ? (
                      <motion.button
                        className={styles.navButton}
                        whileHover={{
                          backgroundColor: "#A0E720",
                          color: "#fff",
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => {
                          const formSection = document.getElementById("faq");
                          formSection?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {item.title}
                      </motion.button>
                    ) : (
                      <motion.a
                        data-title={item.title}
                        href={item.link}
                        target={item.external ? "_blank" : "_self"}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        whileHover={{ scale: 1.05, color: "#A0E720" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.1 }}
                      >
                        {item.title}
                      </motion.a>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
