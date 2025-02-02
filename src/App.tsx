import { useTranslation } from "react-i18next";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";
import Services from "./components/Services";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const App = () => {
  const { t, i18n } = useTranslation();
  const documentTitle = t("metaTitle");
  const documentDescription = t("metaDescription");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") || "en";
    if (i18n.language !== storedLang) {
      i18n.changeLanguage(storedLang);
    }
    localStorage.setItem("lang", i18n.language);
    if (i18n.language === "ar" && !location.pathname.startsWith("/ar")) {
      navigate(`/ar${location.pathname}`, { replace: true });
    } else if (i18n.language === "en" && location.pathname.startsWith("/ar")) {
      navigate(location.pathname.replace(/^\/ar/, ""), { replace: true });
    }
  }, [i18n.language, location.pathname]);

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: i18n.language,
          dir: i18n.language === "ar" ? "rtl" : "ltr",
        }}
      >
        <title>{documentTitle}</title>
        <meta name="description" content={documentDescription} />
        <meta property="og:title" content={documentTitle} />
        <meta property="og:description" content={documentDescription} />
        <meta property="og:image" content="/assets/logo.png" />
      </Helmet>
      <main aria-label="Main Content Area">
        <Header />
        <Hero />
        <OurStory />
        <OurValues />
        <Services />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
};

export default App;
