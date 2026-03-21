import { useLanguage } from "@/contexts/LanguageContext";
import fleetImage from "@/assets/fleet.jpg";
import { Target, Eye, Award } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-container bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="order-2 lg:order-1 animate-slide-in-left">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={fleetImage}
              alt="أسطول شاحنات توريد ديزل في الإمارات"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2 animate-slide-in-right">
          {/* 🔥 Title SEO */}
          <div className="flex flex-col gap-0">
            <h2 className="section-title text-2xl md:text-3xl font-bold leading-tight">
              {t(
                "شركة توريد ديزل في الإمارات بخبرة وسرعة وكفاءة عالية",
                "Diesel Supply Company in UAE with Speed, Reliability & Efficiency",
              )}
            </h2>

            {/* تم تغيير -mt-1 إلى -mt-2 لتقريب الجملة أكثر، مع الحفاظ على كل شيء آخر */}
            <p className="text-sm md:text-base font-semibold text-slate-600 italic -mt-3 pb-8">
              {t(
                "نؤمن احتياجاتكم من الطاقة بدقة، سرعة، وكفاءة لا تضاهى",
                "Securing your energy needs with unmatched precision, speed, and efficiency",
              )}
            </p>
          </div>

          {/* 🔥 Description (بيع مش تعريف) */}
          <p className="section-subtitle mb-8">
            {t(
              "نحن في شركة الرعد الثاقب لتجارة الديزل نقدم خدمات توريد الديزل عالية الجودة للمشاريع، المصانع، وشركات النقل في جميع أنحاء الإمارات. نضمن لكم التوصيل السريع، الجودة العالية، وأسعار تنافسية تدعم استمرارية أعمالكم بدون توقف.",
              "At ALRAAD ALTHAQEB, we provide high-quality diesel supply services for construction projects, factories, and transport companies across the UAE. We ensure fast delivery, premium quality, and competitive pricing to keep your operations running without interruption.",
            )}
          </p>

          {/* Features */}
          <div className="space-y-6">
            {/* Mission */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">
                  {t("رسالتنا", "Our Mission")}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    "توفير خدمات توريد ديزل موثوقة وسريعة تلبي احتياجات الشركات والمشاريع مع الحفاظ على أعلى معايير الجودة والسلامة.",
                    "To provide reliable and fast diesel supply services that meet the needs of companies and projects while maintaining the highest quality and safety standards.",
                  )}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">
                  {t("رؤيتنا", "Our Vision")}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    "أن نكون من أفضل شركات توريد الديزل في الإمارات من حيث الجودة والسرعة والاعتمادية.",
                    "To become one of the leading diesel supply companies in the UAE in terms of quality, speed, and reliability.",
                  )}
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">
                  {t("قيمنا", "Our Values")}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    "نلتزم بالجودة، السرعة، الشفافية، وخدمة العملاء لضمان أفضل تجربة لعملائنا.",
                    "We are committed to quality, speed, transparency, and customer service to deliver the best experience.",
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* 🔥 CTA خفيف */}
          <div className="mt-8">
            <a
              href="https://wa.me/971555677114"
              target="_blank"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              {t("تواصل معنا الآن", "Contact Us Now")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
