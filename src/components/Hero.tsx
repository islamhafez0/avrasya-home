import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const Hero = () => {
  const { t } = useTranslation();
  const [heroRef, heroInView] = useInView({
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
    <section>
      <motion.div
        className="main-container"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={container}
      >
        <div className="main-container_small py-[72px] md:py-36 px-5 md:px-[54px]">
          <div className="text-center max-w-4xl mx-auto">
            <p className="font-bold text-[32px] uppercase mb-6">
              {t("hero.title")}
            </p>
            <h1
              className="text-[32px] md:text-5xl md:leading-[57px] font-bold mb-8 md:mb-16 [&_*]:text-primary"
              dangerouslySetInnerHTML={{
                __html: t("hero.subtitle"),
              }}
            />
            <p className="text-xl md:text-3xl font-normal md:font-bold">
              {t("hero.details")}
            </p>
          </div>
        </div>
        <div className="px-0 md:px-[54px] pb-[72px] md:pb-36">
          <div className="aspect-auto md:aspect-[16/7]">
            <img
              src="/assets/hero-image.png"
              alt="Avrasya Hero"
              className="object-cover hidden md:block w-full h-full rounded-[40px]"
              loading="lazy"
            />
            <img
              src="/assets/mobile/hero-image.png"
              alt="Avrasya Hero"
              className="object-cover block md:hidden w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
