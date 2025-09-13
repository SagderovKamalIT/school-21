import React from "react";
import FooterStyles from "./Footer.module.scss";

import rudnLogo from "../../assets/icons/footer/rudn-logo.svg";
import school21Logo from "../../assets/icons/footer/school-21-logo.svg";
import vkLogo from "../../assets/icons/footer/vk-logo.svg";
import telegramLogo from "../../assets/icons/footer/telegram-logo.svg";
import x from "../../assets/icons/footer/x.svg";

const links = [
  { href: "https://21-school.ru/", img: school21Logo, alt: "school21-logo", className: "schoolLogo" },
  { href: "/", img: x, alt: "x", className: "xLogo" },
  { href: "https://www.rudn.ru/", img: rudnLogo, alt: "RUDN Logo", className: "rudnLogo" }
];


const socialLinks = [
  { href: "https://vk.com/coding21", img: vkLogo, alt: "VK Logo" },
  { href: "https://t.me/+MRsv0D63SqZjMjIy", img: telegramLogo, alt: "Telegram Logo" }
];

const text = [
  {
    title: "© Российский университет дружбы народов, 2025."
  },
  {
    href: "https://www.rudn.ru/storage/media/documents/e1bee4fb-c76b-46e2-9a94-4a81c0037db3/HF49MKfGpR7GqAoseQSjFQGbuRuBjWwsLrdCqGax.pdf", title: "Политика обработки персональных данных"
  }
]


function Footer() {
  return (
    <footer >

      <div id="contacts" className={FooterStyles.footerContainer
      } >

        <div className={FooterStyles.footerContent} >


          <div className={FooterStyles.footerLinks}>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FooterStyles.footerLink} ${FooterStyles[link.className]}`}
              >
                <img
                  src={link.img}
                  alt={link.alt}
                  className={`${FooterStyles.footerLinkImg} ${FooterStyles[`${link.className}Img`]}`}
                />
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



        <div className={FooterStyles.footerText}>
          {text.map((item, index) =>
            item.href ? (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FooterStyles.footerTextItem} ${FooterStyles.footerTextLink}`} 
              >
                {item.title}
              </a>
            ) : (
              <span
                key={index}
                className={`${FooterStyles.footerTextItem} ${FooterStyles.footerTextSpan}`} 
              >
                {item.title}
              </span>
            )
          )}
        </div>




      </div>

    </footer>

  )
}

export default Footer;