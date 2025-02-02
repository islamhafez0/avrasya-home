import { useTranslation } from "react-i18next";
import Trade from "./Trade";
import Investment from "./Investment";
import Innovation from "./Innovation";

const Services = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const items = t("services.main.items", { returnObjects: true }) as string[];
  return (
    <>
      <section className="main-container_small">
        <div className="py-[72px] md:py-36">
          <div>
            <h2 className="text-[40px] leading-[52px] md:text-5xl font-bold mb-16 md:mb-[120px] text-center px-5 md:px-[54px]">
              {t("services.title")}
            </h2>
            <div className="bg-[url(/assets/mobile/services.png)] lg:bg-[url(/assets/services.png)] min-h-[600px] lg:min-h-[750px] bg-no-repeat text-white bg-center bg-cover rounded-none lg:rounded-[40px] py-16 px-5 md:px-[54px] flex flex-col justify-end">
              <h4 className="text-3xl md:text-[40px] md:leading-[52px] mb-12">
                {t("services.main.title")}
              </h4>
              <ul className="space-y-5">
                {items.map((item, inx) => (
                  <li
                    key={inx}
                    className={`
                      text-xl md:text-2xl relative before:bg-white before:absolute before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full
                      ${
                        currentLanguage === "ar"
                          ? "pr-9 lg:pr-[52px] before:right-1"
                          : "pl-9 lg:pl-[52px] before:left-1"
                      }
                      `}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Trade />
      <Investment />
      <Innovation />
    </>
  );
};

export default Services;
