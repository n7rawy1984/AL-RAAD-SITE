import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingWhatsApp = () => {
  const { t } = useLanguage();

  return (
    <a
      href="https://wa.me/971544099266"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 md:right-6 z-50 flex items-center gap-2 group"
    >
      {/* Icon */}
      <div className="relative bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl transition transform hover:scale-105">
        <FaWhatsapp className="text-xl" />
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
      </div>
      {/* Text */}
      <div className="bg-white text-[#0f172a] px-3 md:px-4 py-2 rounded-full shadow-lg font-bold text-xs md:text-sm whitespace-nowrap">
        {t("احصل على عرض سعر الآن", "Get Instant Diesel Quote")}
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
