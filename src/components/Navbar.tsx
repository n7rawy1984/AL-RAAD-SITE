import { useState } from "react";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png"; // <-- الخطوة 1: قم باستيراد الشعار من مكانه الصحيح

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Alraaad Althaqeb Logo"
              className="h-14 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#FFA500]">
                {t("الرعد الثاقب", "ALRAAD ALTHAQEB")}
              </h1>

              <p className="text-xs text-primary-foreground/80">
                {t("تجارة الديزل", "Diesel Trading")}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center space-x-8 ${
              language === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-primary-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Info & Language Toggle */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://wa.me/971555677114"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us via WhatsApp at +971 55 567 7114"
              dir="ltr"
              className="flex items-center gap-3 rounded-full border bg-background p-2 pr-4 text-sm text-blue-600 shadow-sm transition-colors hover:bg-accent"
            >
              <div className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-emerald-500"
                  aria-hidden="true"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.77.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m.01 18.11c-1.53 0-3-.38-4.36-1.09l-.31-.18-3.24.85.87-3.17-.2-.33c-.8-1.4-1.22-3.03-1.22-4.74 0-4.53 3.68-8.21 8.21-8.21 4.53 0 8.21 3.68 8.21 8.21s-3.68 8.21-8.21 8.21m4.49-5.83c-.26-.13-1.56-.77-1.8-0.87-.24-.1-.42-.15-.6.15s-.68.87-.83 1.04c-.15.17-.3.19-.56.06-.26-.13-1.08-.4-2.06-1.27-.76-.66-1.27-1.48-1.42-1.73-.15-.25-.02-0.38.11-0.51.12-.11.26-.29.39-.43.13-.14.17-.25.26-.41.08-.17.04-.31-.02-.43s-.6-1.44-.82-1.97c-.22-.53-.44-.46-.6-.46-.15 0-.33 0-.5 0-.17 0-.45.06-.68.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.76 2.68 4.27 3.75 2.51 1.07 2.51.71 2.96.69.45-.02 1.56-.64 1.78-1.25.22-.62.22-1.14.15-1.25-.07-.11-.25-.18-.51-.31Z"></path>
                </svg>
                <Phone className="h-4 w-4" aria-hidden="true" />
              </div>
              <span>+971 55 567 7114</span>
            </a>

            {/* -- التعديل هنا -- */}
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:text-accent"
            >
              <Globe className="h-4 w-4 mr-2" />
              <span>{language === "ar" ? "English" : "عربي"}</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground hover:text-accent transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-primary-foreground hover:text-accent transition-colors text-right py-2"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+971555677114"
                className="flex items-center gap-2 text-primary-foreground hover:text-accent py-2 justify-end"
              >
                <span>+971 55 567 7114</span>
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="mailto:alraad247@gmail"
                className="flex items-center gap-2 text-primary-foreground hover:text-accent py-2 justify-end"
              >
                <span className="text-sm">alraad247@gmail</span>
                <Mail className="h-4 w-4" />
              </a>
              <Button
                onClick={toggleLanguage}
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:text-accent justify-end"
              >
                {language === "ar" ? "English" : "عربي"}
                <Globe className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
