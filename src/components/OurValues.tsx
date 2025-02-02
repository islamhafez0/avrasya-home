import { useTranslation } from "react-i18next";

const OurValues = () => {
  const { t } = useTranslation();
  const values = t("values.items", { returnObjects: true }) as {
    icon: string;
    title: string;
    desc: string;
  }[];
  return (
    <section className="main-container_small">
      <div className="py-[72px] md:py-36 px-5 md:px-[54px] border-b border-[#D1D5DB]">
        <h2 className="text-[40px] leading-[52px] md:text-5xl font-bold mb-16 md:mb-[120px] text-center">
          {t("values.title")}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {values.map((value, inx) => (
            <li
              key={inx}
              className="bg-[#F5F5F5] p-6 flex flex-col items-center rounded-3xl"
            >
              <div className=" h-24 w-24 lg:h-[120px] lg:w-[120px] grid place-content-center">
                <img src={value.icon} alt={value.title} loading="lazy" />
              </div>
              <h4 className="text-[28px] font-bold text-center mt-4 mb-5  lg:mt-6 lg:mb-8">
                {value.title}
              </h4>
              <p>{value.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurValues;
