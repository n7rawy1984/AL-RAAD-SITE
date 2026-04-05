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
      className="pt-16 relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers should never block clicks */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroImage}
          alt="شاحنة توريد ديزل في الإمارات"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#1e293b]/40" />
      </div>

      <div className="relative z-10 mb-9 section-container text-center px-4">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.5] md:leading-[1.3]">
            {t(
              "توريد ديزل عالي الجودة في الإمارات خلال ساعات",
              "High-Quality Diesel Supply Across the UAE Within Hours",
            )}
            <br />
            <span className="md:block md:mt-6">
              {t(
                "أفضل الأسعار • توصيل سريع • خدمة احترافية 24/7",
                "Best Prices • Fast Delivery • Professional 24/7 Service",
              )}
            </span>
          </h1>

          <div className="inline-block bg-gold/20 border border-gold text-gold px-4 py-2 rounded-full text-sm font-bold mb-4">
            🔥{" "}
            {t(
              "احصل على أفضل سعر ديزل في الإمارات اليوم فقط",
              "Get the best diesel price in the UAE today only",
            )}
          </div>

          <p className="text-sm text-gray-200 mb-4 font-medium">
            {t(
              "نخدم جميع إمارات الدولة | استجابة سريعة | ديزل 10 PPM",
              "Serving all UAE | Fast response | 10 PPM diesel",
            )}
          </p>

          <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            {t(
              "نوفر لك ديزل 10 PPM بأفضل الأسعار للمصانع والمشاريع وشركات المقاولات وأساطيل النقل في جميع إمارات الدولة مع توصيل سريع وآمن.",
              "We provide premium 10 PPM diesel at competitive prices for factories, construction projects, contractors, and fleet companies across the UAE with fast and secure delivery.",
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center sm:items-stretch mb-5">
            <button
              onClick={scrollToContact}
              className="w-[220px] sm:w-[230px] md:w-[250px] mx-auto sm:mx-0 px-3 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-lg transition-all duration-300 ease-out
               bg-gradient-to-b from-[#ffb347] to-[#ffcc33] text-[#1e293b]
               hover:scale-[1.03] hover:brightness-110 hover:shadow-xl active:scale-[0.98]
               flex items-center justify-center gap-1.5 sm:gap-2"
            >
              {t("اطلب ديزل الآن", "Request Diesel Now")}
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </button>

            <a
              href="https://wa.me/971544099266?text=مرحبًا، أريد عرض سعر لتوريد الديزل"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[220px] sm:w-[230px] md:w-[250px] mx-auto sm:mx-0 px-3 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-lg transition-all duration-300 ease-out
               bg-gradient-to-b from-[#ffb347] to-[#ffcc33] text-[#1e293b]
               hover:scale-[1.03] hover:brightness-110 hover:shadow-xl active:scale-[0.98]
               flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <span className="text-base sm:text-lg md:text-xl">💬</span>
              {t("احصل على عرض سعر فوري", "Get an Instant Quote")}
            </a>

            <a
              href="tel:+971544099266"
              className="w-[220px] sm:w-[230px] md:w-[250px] mx-auto sm:mx-0 px-3 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-md transition-all duration-300 ease-out 
               bg-white/95 text-[#0f172a] border border-white/20
               hover:bg-white hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]
               flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#ffb347]" />
              {t("اتصل بنا الآن", "Call Us Now")}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-9 mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-6 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold">
                24/7
              </div>
              <div className="text-sm text-slate-300">دعم العملاء</div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold">
                98%
              </div>
              <div className="text-sm text-slate-300">معدل الرضا</div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold">
                +10,000
              </div>
              <div className="text-sm text-slate-300">عملية توصيل</div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold">
                +500
              </div>
              <div className="text-sm text-slate-300">عميل راضٍ</div>
            </div>
          </div>

          <p className="text-md text-slate-400 mb-6 mt-4">
            {t(
              "متاح 24/7 • عرض سعر سريع • تغطية جميع الإمارات",
              "Available 24/7 • Fast quotation • Coverage across all UAE",
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-colors hover:bg-white/10">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "hsl(var(--accent))" }}
              >
                10 PPM
              </div>
              <div className="text-sm md:text-base text-white">
                {t("ديزل عالي النقاء", "Ultra-Pure Diesel")}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-colors hover:bg-white/10">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "hsl(var(--accent))" }}
              >
                24/7
              </div>
              <div className="text-sm md:text-base text-white">
                {t("خدمة العملاء", "Customer Service")}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-colors hover:bg-white/10">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "hsl(var(--accent))" }}
              >
                100%
              </div>
              <div className="text-white text-sm md:text-base">
                {t("ضمان الجودة", "Quality Guarantee")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
