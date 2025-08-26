import styles from "./Header.module.scss";

import { headerItems } from "../../data/header";

import schoolLogo from "../../assets/images/header/school21_logo.svg";
import rudnLogo from "../../assets/images/header/rudn_logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className="wrap">
        <div className={styles.headerContainer}>
          <div className={styles.headerLink}>
            <a className={styles.headerLinkSber} href="/">
              <img src={schoolLogo} alt="Логотип 'ШКОЛА_21'" />
            </a>
            <a className={styles.headerLinkRudn} href="/">
              <img src={rudnLogo} alt="Логотип 'РУДН'" />
            </a>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {headerItems.map((item, index) => {
                return (
                  <li key={index} className={styles.navItem}>
                    {item.isButton ? (
                      <button className={styles.navButton}>{item.title}</button>
                    ) : (
                      <a href={item.link}>{item.title}</a>
                    )}
                  </li>
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
