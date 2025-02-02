import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const socilaIcons = [
    {
      icon: <Facebook className="w-8 h-8" />,
      label: "Facebook",
      href: "https://www.facebook.com/taqat4business/",
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: "Linkedin",
      href: "https://www.linkedin.com/company/taqat-qa",
    },
    {
      icon: <Twitter className="w-8 h-8" />,
      label: "Twitter",
      href: "https://x.com/taqat4business",
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      label: "Instgram",
      href: "https://www.instagram.com/taqat4business",
    },
  ];
  const { t } = useTranslation();
  return (
    <footer className="bg-black text-white border-t border-[#D1D5DB]">
      <div className="main-container_small py-[18px] px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between md:items-center">
          <p
            className="text-sm hidden md:block"
            dangerouslySetInnerHTML={{
              __html: t("footer.copyright"),
            }}
          />
          <div className="hidden justify-center md:flex">
            <img src="/assets/logo-light.png" alt="Taqat Logo" />
          </div>
          <div className="flex md:hidden justify-start md:justify-center">
            <img src="/assets/mobile/logo-light.png" alt="Taqat Logo" />
          </div>
          <div className="flex justify-center md:justify-end gap-10 items-center mt-32 mb-10 md:mt-0 md:mb-0">
            {socilaIcons.map((icon) => (
              <a
                key={icon.label}
                href={icon.href}
                target="_blank"
                aria-label={icon.label}
                rel="noopener noreferrer"
                className="transition-all hover:text-primary active:text-white"
              >
                {icon.icon}
              </a>
            ))}
          </div>
          <p
            className="text-sm block md:hidden border-t border-[#475569] pt-[34px]"
            dangerouslySetInnerHTML={{ __html: t("footer.copyright") }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
