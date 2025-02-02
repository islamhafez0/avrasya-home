import { useTranslation } from "react-i18next";

const OurStory = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="main-container_small">
        <div className="pb-[72px] md:pb-36 px-5 md:px-[54px] border-b border-[#D1D5DB]">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="flex-1">
              <h2 className="text-[40px] leading-[52px] md:text-5xl font-bold mb-14 md:mb-0">
                {t("story.title")}
              </h2>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl leading-9 md:text-[32px] md:leading-10 font-bold mb-6 md:mb-10">
                {t("story.subtitle")}
              </h3>
              <p className="mb-6 text-[18px] leading-7 md:text-2xl">
                {t("story.desc")}
              </p>
              <p className="text-[18px] leading-7 md:text-2xl">
                {t("story.details")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
