import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const isArabic = language === "ar";

  const toggleLanguage = () => {
    setLanguage(isArabic ? "en" : "ar");
  };

  // منع الاسكرول عند فتح المينيو
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Sticky navbar logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Active Section (Scroll Spy) - يعمل فقط في الصفحة الرئيسية
  useEffect(() => {
    if (location.pathname !== "/") {
      setActive("blog");
      return;
    }

    const sections = ["home", "about", "services", "sectors", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleNavClick = (id: string, isPage: boolean) => {
    if (isPage) {
      navigate("/blog");
      setIsOpen(false);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        // تأخير بسيط لضمان تحميل الصفحة الرئيسية قبل السكرول
        setTimeout(() => scrollToSection(id), 150);
      } else {
        scrollToSection(id);
      }
    }
  };

  const navItems = [
    { id: "home", label: t("الرئيسية", "Home"), isPage: false },
    { id: "about", label: t("من نحن", "About"), isPage: false },
    { id: "services", label: t("خدماتنا", "Services"), isPage: false },
    { id: "sectors", label: t("القطاعات", "Sectors"), isPage: false },
    { id: "blog", label: t("المدونة", "Blog"), isPage: true }, // الرابط الجديد
    { id: "contact", label: t("تواصل معنا", "Contact"), isPage: false },
  ];

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
        className={`fixed top-0 ${isArabic ? "right-0" : "left-0"} h-full w-[80%] max-w-[320px] 
        bg-[#0f172a]/95 backdrop-blur-[25px] border-white/10
        z-50 transform transition duration-500 md:hidden ${
          isOpen
            ? "translate-x-0"
            : isArabic
              ? "translate-x-full"
              : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between mb-10 items-center">
            <img src={logo} className="h-10" alt="Logo" />
            <X
              onClick={() => setIsOpen(false)}
              className="text-white cursor-pointer"
            />
          </div>

          <div
            className={`flex flex-col gap-6 ${isArabic ? "text-right" : "text-left"}`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.isPage)}
                className={`text-lg transition font-medium ${
                  active === item.id
                    ? "text-[hsl(var(--accent))]"
                    : "text-white/90"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar Content */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled || location.pathname !== "/"
            ? "bg-[#0f172a]/95 backdrop-blur-xl shadow-xl"
            : "bg-[#0f172a]/70 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              className="h-10 transition group-hover:scale-105"
              alt="Alraad Logo"
            />
            <div>
              <h1 className="text-sm md:text-xl font-bold text-white leading-tight">
                {isArabic ? "الرعد الثاقب" : "ALRAAD ALTHAQEB"}
              </h1>
              <p className="text-[10px] md:text-xs text-[hsl(var(--accent))] font-semibold">
                {t("لتجارة الديزل", "Diesel Trading")}
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div
            dir={isArabic ? "rtl" : "ltr"}
            className="hidden md:flex gap-8 items-center"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.isPage)}
                className="relative group text-white font-medium text-sm lg:text-base"
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[hsl(var(--accent))] transition-all duration-300
                  ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </button>
            ))}
          </div>

          {/* Language & Menu Toggle */}
          <div className="flex items-center gap-3">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              className="text-white hover:bg-white/10 px-2"
            >
              <Globe className="h-4 w-4 mr-2 ml-2" />
              <span className="font-bold">{isArabic ? "EN" : "AR"}</span>
            </Button>

            <Menu
              onClick={() => setIsOpen(true)}
              className="md:hidden text-white cursor-pointer hover:text-[hsl(var(--accent))] w-6 h-6"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
