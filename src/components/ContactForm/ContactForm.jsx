import React from "react";
import ContactFormStyles from "./ContactForm.module.scss";
import Title from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import { contactFormData } from "../../data/contactForm";

function ContactForm() {
  return (
    <section className={ContactFormStyles.contactSection}>
      <div className="block-wrap">
        <div className={ContactFormStyles.contactContainer}>
          <div className={ContactFormStyles.contactContent} >

          <Title className={ContactFormStyles.contactContainerTitle}>
            {contactFormData.title.map((item, index) => {
              if (item.text) {
                return (
                  <span key={index} className={ContactFormStyles.headingText}>
                    {item.text}{" "}
                  </span>
                );
              }

              if (item.title === "школы 21") {
                return (
                  <span key={index} className={ContactFormStyles.highlightText}>
                    {item.title}{" "}
                  </span>
                );
              }

              return (
                <span key={index} className={ContactFormStyles.headingText}>
                  {item.title}{" "}
                </span>
              );
            })}
          </Title>

            <form className={ContactFormStyles.contactForm} >

          

              <input 
                className={ContactFormStyles.contactFormItem}
                type="tel"
                placeholder="Ваш телефон"
                name="phone"
                required
              />
          
            <Button className={ContactFormStyles.contactFormButton} text={contactFormData.buttonText}>
            
            </Button>
            </form>

  
            <div className={ContactFormStyles.contactFormAgreement}>
        <input type="checkbox" id="agreement" required />
        <label htmlFor="agreement">
          {contactFormData.paragraph}
        </label>
      </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default ContactForm;
