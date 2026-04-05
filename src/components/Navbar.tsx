import React from "react";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const NavbarComponent = () => {
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

  // منع الاسكرول
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }, [location.pathname]);

  // Scroll effect - الشفافية فقط عند السكرول
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section - أخف وأهدأ
  useEffect(() => {
    if (location.pathname !== "/") {
      setActive("blog");
      return;
    }

    const sections = ["home", "about", "services", "sectors", "contact"];
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    let ticking = false;

    const updateActiveSection = () => {
      let current = "home";
      const triggerPoint = window.innerHeight * 0.35;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerPoint) {
          current = el.id;
        }
      });

      setActive((prev) => (prev === current ? prev : current));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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
    { id: "blog", label: t("المدونة", "Blog"), isPage: true },
    { id: "contact", label: t("تواصل معنا", "Contact"), isPage: false },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-md z-[45] md:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 ${
          isArabic ? "right-0" : "left-0"
        } h-full w-[85%] max-w-[380px]
        bg-gradient-to-br from-[#0f172a]/95 to-[#1e293b]/95 
        backdrop-blur-2xl border-r border-white/20
        shadow-2xl z-50 transform transition-all duration-500 ease-out ${
          isOpen
            ? "translate-x-0"
            : isArabic
              ? "translate-x-full"
              : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <img src={logo} className="h-10" alt="Logo" />
            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm 
                text-white/90 hover:text-[hsl(var(--accent))] hover:bg-white/20
                font-bold text-sm transition-all duration-300"
              >
                {isArabic ? "EN" : "AR"}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-white/80 hover:text-[hsl(var(--accent))] 
                hover:bg-white/10 transition-all duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div
            className={`flex flex-col gap-6 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.isPage)}
                className={`relative group text-2xl font-medium py-2
                transition-all duration-300 hover:translate-x-2 ${
                  active === item.id
                    ? "text-[hsl(var(--accent))]"
                    : "text-white/80 hover:text-[hsl(var(--accent))]"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isOpen ? "slideIn 0.5s ease-out forwards" : "none",
                }}
              >
                {item.label}
                {active === item.id && (
                  <span
                    className={`absolute ${
                      isArabic ? "right-0" : "left-0"
                    } bottom-0 w-12 h-0.5 bg-[hsl(var(--accent))] rounded-full`}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-10 border-t border-white/10">
            <p className="text-white/40 text-xs text-center">
              {isArabic
                ? "الرعد الثاقب - لتجارة الديزل"
                : "ALRAAD ALTHAQEB - Diesel Trading"}
            </p>
          </div>
        </div>
      </div>

      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#0f172a]/80 backdrop-blur-xl shadow-lg"
            : "bg-[#0f172a]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 group"
          >
            <img src={logo} className="h-10" alt="Logo" />
            <div>
              <h1 className="text-sm md:text-xl font-bold text-white leading-tight">
                {isArabic ? "الرعد الثاقب" : "ALRAAD ALTHAQEB"}
              </h1>
              <p className="text-[10px] md:text-xs text-[hsl(var(--accent))] font-semibold">
                {t("لتجارة الديزل", "Diesel Trading")}
              </p>
            </div>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.isPage)}
                className={`relative group font-medium transition-colors duration-300 ${
                  active === item.id
                    ? "text-[hsl(var(--accent))]"
                    : "text-white hover:text-[hsl(var(--accent))]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[hsl(var(--accent))] transition-all duration-300
                  ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 font-bold text-white hover:text-[hsl(var(--accent))] transition-colors duration-300"
            >
              <Globe className="h-4 w-4" />
              <span>{isArabic ? "EN" : "AR"}</span>
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-white hover:text-[hsl(var(--accent))] transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default React.memo(NavbarComponent);
