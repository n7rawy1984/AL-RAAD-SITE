import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  const isArabic = language === "ar";

  const toggleLanguage = () => {
    setLanguage(isArabic ? "en" : "ar");
  };

  // منع الاسكرول عند فتح المينيو
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Sticky + تغيير الشكل عند الاسكرول
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Active Section (Scroll Spy)
  useEffect(() => {
    const sections = ["home", "about", "services", "sectors", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
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

  // 🔥 عكس الترتيب للعربي
  const orderedNavItems = navItems;
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[45] md:hidden transition ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] 
        bg-white/5 backdrop-blur-[25px] border-l border-white/10
        z-50 transform transition duration-500 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between mb-10">
            <img src={logo} className="h-10" />
            <X
              onClick={() => setIsOpen(false)}
              className="text-white cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-6 text-right">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg transition ${
                  active === item.id
                    ? "text-[hsl(var(--accent))]"
                    : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f172a]/95 backdrop-blur-xl shadow-xl"
            : "bg-[#0f172a]/70 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} className="h-10" />
            <div>
              <h1 className="text-sm md:text-xl font-bold text-white">
                {isArabic ? "الرعد الثاقب" : "ALRAAD ALTHAQEB"}
              </h1>
              <p className="text-[10px] md:text-xs text-white/70">
                {t("ديزل", "Diesel")}
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div
            dir={isArabic ? "rtl" : "ltr"}
            className="hidden md:flex gap-8 relative"
          >
            {orderedNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group text-white font-medium"
              >
                {item.label}

                {/* 🔥 Underline Animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[hsl(var(--accent))] transition-all duration-300
                  ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* 🌐 Mobile Language Button */}
            <button
              onClick={toggleLanguage}
              className="md:hidden text-white hover:text-[hsl(var(--accent))] transition"
            >
              <Globe className="h-5 w-5" />
            </button>

            {/* 🌐 Desktop Language Button */}
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              className="hidden md:flex text-white "
            >
              <Globe className="h-4 w-4 mr-1" />
              {isArabic ? "EN" : "AR"}
            </Button>

            {/* ☰ Menu */}
            <Menu
              onClick={() => setIsOpen(true)}
              className="md:hidden text-white cursor-pointer hover:text-[hsl(var(--accent))]"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
