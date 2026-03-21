import { ArrowRight, Phone } from "lucide-react";
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
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="شاحنة توريد ديزل في الإمارات"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mb-9 section-container text-center">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* 🔥 H1 مع مسافة بين السطور */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-5 mb-6 leading-[1.4]">
            {t(
              <>
                توريد الديزل في الإمارات <br />
                <span style={{ fontSize: "48px" }}>
                  بخدمة سريعة وأسعار تنافسية
                </span>
              </>,
              <>
                Diesel Supply in UAE <br />
                <span style={{ fontSize: "42px" }}>
                  {" "}
                  with Fast Delivery & Competitive Prices
                </span>
              </>,
            )}
          </h1>

          {/* Trust Line */}
          <p className="text-sm text-gray-200 mb-4">
            {t(
              "نخدم جميع إمارات الدولة | توصيل سريع خلال 24 ساعة",
              "Serving all UAE | Fast delivery within 24 hours",
            )}
          </p>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t(
              "نقدم خدمات توريد الديزل 10 PPM للمصانع والمشاريع وشركات المقاولات في جميع إمارات الدولة مع توصيل سريع وآمن.",
              "We provide 10 PPM diesel supply for factories, construction projects, and companies across the UAE with fast and secure delivery.",
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* زر الطلب */}
            <button
              onClick={scrollToContact}
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition flex items-center gap-2"
            >
              {t("اطلب توريد ديزل الآن", "Request Diesel Supply Now")}
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* زر الاتصال */}
            <a
              href="tel:+971555677114"
              className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              {t("اتصل بنا الآن", "Call Now")}
            </a>

            {/* زر واتساب */}
            <a
              href="https://wa.me/971555677114"
              target="_blank"
              className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-400 transition flex items-center gap-2"
            >
              💬 {t("واتساب الآن", "WhatsApp Now")}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                10 PPM
              </div>
              <div className="text-white">
                {t("ديزل عالي النقاء", "Ultra-Pure Diesel")}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                24/7
              </div>
              <div className="text-white">
                {t("خدمة العملاء", "Customer Service")}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                100%
              </div>
              <div className="text-white">
                {t("ضمان الجودة", "Quality Guarantee")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
