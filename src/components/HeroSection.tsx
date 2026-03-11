import { ArrowRight, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-truck.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Diesel Fuel Truck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mb-9 section-container text-center">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-5 mb-6 leading-tight">
            {t(
              "وقود الديزل الموثوق الذي يُبقي أعمالك متحركة",
              "Reliable Diesel Fuel That Keeps Your Business Moving"
            )}
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t(
              "نوفر ديزل نقي (10 PPM) مطابق للمواصفات العالمية، مع ضمان التوصيل السريع والآمن لمواقعكم في قطاعات المقاولات، النقل، والصناعة",
              "We provide pure diesel (10 PPM) compliant with international standards, with guaranteed fast and safe delivery to your sites across construction, transportation, and industrial sectors"
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="btn-hero group flex items-center gap-2"
            >
              {t("اطلب عرض سعر الآن", "Get a Quote Now")}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+971555677114"
              className="btn-outline flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              {t("اتصل بنا", "Call Us")}
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/10 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:bg-card/20 transition-all duration-300">
              <div className="text-4xl font-bold text-gradient mb-2">
                10 PPM
              </div>
              <div className="text-primary-foreground">
                {t("ديزل عالي النقاء", "Ultra-Pure Diesel")}
              </div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:bg-card/20 transition-all duration-300">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-primary-foreground">
                {t("خدمة العملاء", "Customer Service")}
              </div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:bg-card/20 transition-all duration-300">
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-primary-foreground">
                {t("ضمان الجودة", "Quality Guarantee")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
