import React from "react";
import FooterStyles from "./Footer.module.scss";

import rudnLogo from "../../assets/icons/footer/rudn-logo.svg";
import school21Logo from "../../assets/icons/footer/school-21-logo.svg";
import vkLogo from "../../assets/icons/footer/vk-logo.svg";
import telegramLogo from "../../assets/icons/footer/telegram-logo.svg";

const links = [
  { href: "https://21-school.ru/", img: school21Logo, alt: "school21-logo" },
  { href: "https://www.rudn.ru/", img: rudnLogo, alt: "RUDN Logo" }
];

const socialLinks = [
  { href: "https://vk.com", img: vkLogo, alt: "VK Logo" },
  { href: "https://t.me", img: telegramLogo, alt: "Telegram Logo" }
];


function Footer() {
  return (
    <footer >

      <div className={FooterStyles.footerContainer
      } >

        <div className={FooterStyles.footerContent} >


          <div className={FooterStyles.footerLinks}>
            {links.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                <img src={link.img} alt={link.alt} />
              </a>
            ))}
          </div>

          <div className={FooterStyles.footerSocialLinks}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link.img} alt={link.alt} />
              </a>
            ))}
          </div>
        </div>

      </div>

    </footer>

  )
}

export default Footer;