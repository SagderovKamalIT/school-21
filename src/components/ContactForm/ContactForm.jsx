import React, { useRef, useState } from "react";
import ContactFormStyles from "./ContactForm.module.scss";
import Title from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import { contactFormData } from "../../data/contactForm";

function ContactForm() {
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [agreementChecked, setAgreementChecked] = useState(false); // новое состояние

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreementChecked) {
      alert("Пожалуйста, согласитесь с условиями перед отправкой.");
      return;
    }

    const payload = {
      user: {
        email: email,
        campus_id: 34,
        program_id: 1,
        ya_metrika_id: "49329160",
        order_id: null,
        click_id: null,
        utm: {
          utm_source: null,
          utm_medium: null,
          utm_campaign: null,
          utm_content: null
        }
      },
      roistat_visit: "3292827"
    };

    try {
      const response = await fetch("https://applicant.21-school.ru/api/v3/me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.status === 201) {
        window.location.href = data.confirmation_link;
      } else if (response.status === 200) {
        alert("На эту почту уже регистрировались, проверьте почту.");
      } else if (response.status === 422) {
        alert(`Ошибка: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("Произошла ошибка при отправке формы");
    }
  };

  return (
    <section id="faq" className={ContactFormStyles.contactSection} ref={formRef}>
      <div className="block-wrap">
        <div className={ContactFormStyles.contactContainer}>
          <div className={ContactFormStyles.contactContent}>

            <Title className={ContactFormStyles.contactContainerTitle}>
              {contactFormData.title.map((item, index) => (
                <span
                  key={index}
                  className={
                    item.title === "школы 21" ? ContactFormStyles.highlightText : ContactFormStyles.headingText
                  }
                >
                  {item.text || item.title}{" "}
                </span>
              ))}
            </Title>

            <form className={ContactFormStyles.contactForm} onSubmit={handleSubmit}>
              <input 
                className={ContactFormStyles.contactFormItem}
                type="email"
                placeholder="Ваша почта"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                className={ContactFormStyles.contactFormButton}
                text={contactFormData.buttonText}
              />
            </form>

            <div className={ContactFormStyles.contactFormAgreement}>
              <input 
                type="checkbox" 
                id="agreement" 
                checked={agreementChecked} 
                onChange={(e) => setAgreementChecked(e.target.checked)} 
              />
              <label htmlFor="agreement">{contactFormData.paragraph}</label>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;