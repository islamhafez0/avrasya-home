import { useTranslation } from "react-i18next";

const Innovation = () => {
  const { t, i18n } = useTranslation();
  const title = t("services.innovation.title");
  const items = t("services.innovation.items", {
    returnObjects: true,
  }) as string[];
  const currentLanguage = i18n.language;
  return (
    <section className="bg-[#F6F4F0]">
      <div className="main-container_small">
        <div className="flex flex-col lg:flex-row lg:gap-24 justify-between items-center">
          <div className="flex-1 px-5 md:px-[54px] py-[72px] lg:py-0">
            <h3 className="text-3xl leading-9 lg:text-[40px] lg:leading-10 font-bold mb-14">
              {title}
            </h3>
            <ul className="space-y-4">
              {items.map((item, inx) => (
                <li
                  key={inx}
                  className={`relative text-xl lg:text-2xl before:bg-black before:absolute before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full ${
                    currentLanguage === "ar"
                      ? "pr-9 lg:pr-[52px] before:right-1"
                      : "pl-9 lg:pl-[52px] before:left-1"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <img
              src="/assets/service-3.png"
              alt={t("services.innovation.title")}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
