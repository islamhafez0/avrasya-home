import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Header = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const currentLanguage = i18n.language;

  const switchLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, []);
  const ContactUsText = t("header.contactButton");

  const handleCloseMenu = () => {
    setMobileMenu(false);
  };

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.header
      ref={headerRef}
      initial="hidden"
      animate={headerInView ? "visible" : "hidden"}
      variants={container}
      className="py-5 md:pt-12 px-5 md:px-[54px] bg-[#F5F5F5] md:bg-white flex items-center justify-between main-container"
    >
      <a href="#">
        <img
          src="/assets/logo.png"
          alt={currentLanguage === "ar" ? "أوراسيا" : "Avrasya"}
          className="hidden md:block"
          loading="lazy"
        />
        <img
          src="/assets/mobile/logo.png"
          alt={currentLanguage === "ar" ? "أوراسيا" : "Avrasya"}
          className="block md:hidden"
          loading="lazy"
        />
      </a>
      <nav>
        <div className="md:hidden">
          <button
            className="h-8 w-8 grid place-content-center transition-transform duration-200 hover:scale-110 active:scale-100"
            onClick={() => setMobileMenu(true)}
            aria-label="Open Menu"
            aria-expanded={mobileMenu}
          >
            <img src="/assets/menu.svg" alt="Menu" className="w-8 h-8" />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() =>
              switchLanguage(currentLanguage === "en" ? "ar" : "en")
            }
            className="p-2"
          >
            {currentLanguage === "ar" ? "English" : "العربية"}
          </button>
          <a
            href="#contact-us"
            className="bg-secondary text-white px-9 py-4 rounded-full font-bold"
          >
            {ContactUsText}
          </a>
        </div>
        <MobileMenu
          ContactUsText={ContactUsText}
          currentLanguage={currentLanguage}
          handleCloseMenu={handleCloseMenu}
          mobileMenu={mobileMenu}
          switchLanguage={switchLanguage}
        />
      </nav>
    </motion.header>
  );
};

export default Header;
