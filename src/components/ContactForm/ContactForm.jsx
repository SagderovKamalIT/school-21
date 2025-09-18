import React, { useRef, useState } from "react";
import ContactFormStyles from "./ContactForm.module.scss";
import Title from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import { contactFormData } from "../../data/contactForm";

function ContactForm() {
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [agreementChecked, setAgreementChecked] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreementChecked) {
      alert("Пожалуйста, согласитесь с условиями перед отправкой.");
      return;
    }

    const savedEmail = localStorage.getItem("registeredEmail");
    if (savedEmail && savedEmail === email) {
      alert("На эту почту уже регистрировались, проверьте почту.");
      return;
    }

    const payload = {
      user: {
        email: email,
        campus_id: 34,
        program_id: 1,
        ya_metrika_id: "49329160",
        order_id: "",
        click_id: "",
        redirect_url: "https://21-school.rudn.ru/",
        utm: {
          utm_source: "",
          utm_medium: "",
          utm_campaign: "",
          utm_content: "",
        },
      },
      roistat_visit: "3292827",
    };

    try {
      const response = await fetch("https://applicant.21-school.ru/api/v3/me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("Payload for API:", JSON.stringify(payload));
      const data = await response.json();
      console.log("API response data:", data);

      if (response.status === 201 && data.user?.confirmation_link) {
        localStorage.setItem("registeredEmail", email);

        const link = data.user.confirmation_link.startsWith("http")
          ? data.user.confirmation_link
          : `https://applicant.21-school.ru${data.user.confirmation_link}`;

        const a = document.createElement("a");
        a.href = link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.click();
      } else if (response.status === 200) {
        alert("На эту почту уже регистрировались, проверьте почту.");
        localStorage.setItem("registeredEmail", email);
      } else if (response.status === 422) {
        const errorMessage = data.error || "";
        if (
          errorMessage.toLowerCase().includes("email") &&
          errorMessage.toLowerCase().includes("already")
        ) {
          alert("На эту почту уже регистрировались, проверьте почту.");
          localStorage.setItem("registeredEmail", email);
        } else {
          alert(`Ошибка: ${errorMessage || "Некорректные данные"}`);
        }
      } else {
        console.error("Неожиданный статус ответа:", response.status, data);
        alert("Произошла ошибка при отправке формы.");
      }
    } catch (err) {
      console.error(err);
      alert("Произошла ошибка при отправке формы.");
    }
  };

  return (
    <section
      id="faq"
      className={ContactFormStyles.contactSection}
      ref={formRef}
    >
      <div className="block-wrap">
        <div className={ContactFormStyles.contactContainer}>
          <div className={ContactFormStyles.contactContent}>
            <Title className={ContactFormStyles.contactContainerTitle}>
              {contactFormData.title.map((item, index) => (
                <span
                  key={index}
                  className={
                    item.title === "школы 21"
                      ? ContactFormStyles.highlightText
                      : ContactFormStyles.headingText
                  }
                >
                  {item.text || item.title}{" "}
                </span>
              ))}
            </Title>

            <form
              className={ContactFormStyles.contactForm}
              onSubmit={handleSubmit}
            >
              <input
                className={ContactFormStyles.contactFormItem}
                type="email"
                placeholder="Корпоративная почта"
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
