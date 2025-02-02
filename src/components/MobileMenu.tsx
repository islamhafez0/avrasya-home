const MobileMenu = ({
  mobileMenu,
  currentLanguage,
  handleCloseMenu,
  ContactUsText,
  switchLanguage,
}: {
  mobileMenu: boolean;
  currentLanguage: string;
  handleCloseMenu: () => void;
  ContactUsText: string;
  switchLanguage: (lang: string) => void;
}) => {
  return (
    <div
      className={`w-full h-full bg-white fixed top-0 left-0 z-30 transition-all md:hidden ${
        mobileMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div dir={currentLanguage === "ar" ? "ltr" : "rtl"} className="px-5 py-5">
        <button
          className="rounded-full flex items-center justify-center transition-all duration-200 mt-0.5"
          aria-label="Close Menu"
          onClick={handleCloseMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x w-8 h-8 transition-transform duration-200 hover:rotate-90 mt-0.5"
            color="#000"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div className="py-12 px-8 mt-5 flex items-start flex-col">
        <a
          href="#contact-us"
          className={`text-[18px] font-bold px-8 transition-opacity duration-500 ease-out transform ${
            mobileMenu ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{
            transitionDelay: "100ms",
            willChange: "opacity, transform",
          }}
          onClick={handleCloseMenu}
        >
          {ContactUsText}
        </a>
        <hr className="bg-[#475569] border-0 h-[1px] w-full my-6" />
        <div
          className={`px-8 transition-all duration-500 transform ${
            mobileMenu ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{
            transitionDelay: `${100}ms`,
          }}
        >
          <button
            onClick={() =>
              switchLanguage(currentLanguage === "en" ? "ar" : "en")
            }
          >
            {currentLanguage === "ar" ? "English" : "العربية"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
