import { useTranslation } from "react-i18next";

const Trade = () => {
  const { t, i18n } = useTranslation();
  const title = t("services.commerce.title");
  const items = t("services.commerce.items", {
    returnObjects: true,
  }) as string[];
  const currentLanguage = i18n.language;
  return (
    <section>
      <div className="pb-[72px] md:pb-36 px-5 md:px-[54px] main-container_small">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-xl">
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
          <div className="max-w-[600px]">
            <img
              src="/assets/service-1.png"
              alt={t("services.commerce.title")}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trade;
