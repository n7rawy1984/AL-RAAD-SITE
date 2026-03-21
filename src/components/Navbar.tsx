import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  // ❌ لغينا إغلاق القائمة عند الاسكرول (حسب طلبك)
  useEffect(() => {
    return () => {};
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: t("الرئيسية", "Home") },
    { id: "about", label: t("من نحن", "About") },
    { id: "services", label: t("خدماتنا", "Services") },
    { id: "sectors", label: t("القطاعات", "Sectors") },
    { id: "contact", label: t("تواصل معنا", "Contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔥 توزيع احترافي */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <div className="leading-tight">
              <h1 className="text-sm md:text-xl font-bold text-yellow-400">
                {language === "ar" ? "الرعد الثاقب" : "ALRAAD ALTHAQEB"}
              </h1>
              <p className="text-[10px] md:text-xs text-white/70">
                {t("ديزل", "Diesel")}
              </p>
            </div>
          </div>

          {/* 🔥 Desktop Menu (Centered + RTL fix) */}
          <div
            className={`hidden md:flex flex-1 items-center gap-8
  ${
    language === "ar"
      ? "flex-row-reverse justify-center text-right"
      : "justify-center pl-10"
  }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-yellow-400 transition font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Mobile Language */}
            <button onClick={toggleLanguage} className="md:hidden text-white">
              <Globe className="h-5 w-5" />
            </button>

            {/* Desktop Language */}
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="hidden md:flex text-white hover:text-yellow-400"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === "ar" ? "EN" : "AR"}
            </Button>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl animate-fade-in-down relative z-50">
            <div className="flex flex-col gap-3 text-right">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-yellow-400 py-2"
                >
                  {item.label}
                </button>
              ))}

              <div className="border-t border-white/10 my-2" />

              <a
                href="tel:+971555677114"
                className="flex items-center justify-end gap-2 text-white"
              >
                <span>+971 55 567 7114</span>
                <Phone className="h-4 w-4" />
              </a>

              <a
                href="mailto:alraad247@gmail.com"
                className="flex items-center justify-end gap-2 text-white"
              >
                <span className="text-sm">alraad247@gmail.com</span>
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
