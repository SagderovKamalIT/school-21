import { useEffect, useRef, useState } from "react";
import styles from "./HeaderBurger.module.scss";

export default function HeaderBurger({ items = [] }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!open) return;
      if (
        contentRef.current &&
        btnRef.current &&
        !e.composedPath().includes(contentRef.current) &&
        !e.composedPath().includes(btnRef.current)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  useEffect(() => {
    const body = document.body;
    if (open) body.classList.add("body_fixed");
    else body.classList.remove("body_fixed");
    return () => body.classList.remove("body_fixed");
  }, [open]);

  const handleLink = () => setOpen(false);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        aria-expanded={open}
        aria-controls="burger-menu"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        className={`${styles.burger__btn} ${
          open ? styles["burger-btn__open"] : ""
        }`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles["burger__btn-span"]} />
      </button>

      <div className={`${styles.burger} ${open ? styles["burger__open"] : ""}`}>
        <div
          ref={contentRef}
          className={styles.burger__content}
          id="burger-menu"
        >
          <nav className={styles.burger__nav}>
            <ul className={styles["burger__nav-list"]}>
              {items.map((item, i) => (
                <li key={i} className={styles["burger__nav-item"]}>
                  {item.isButton ? (
                    <button
                      className={styles.navButton}
                      onClick={() => {
                        handleLink();
                        const formSection = document.getElementById("faq");
                        formSection?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {item.title}
                    </button>
                  ) : (
                    <a href={item.link} onClick={handleLink}>
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
