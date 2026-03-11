import { useLanguage } from "@/contexts/LanguageContext";
import { Droplets, Clock, DollarSign, Shield, CheckCircle2 } from "lucide-react";

const WhyChooseSection = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Droplets,
      title: t("جودة الوقود المضمونة", "Guaranteed Fuel Quality"),
      description: t(
        "نضمن أن كل قطرة ديزل 10 PPM نقية تماماً، مما يحافظ على محركات معداتكم ويحسن من كفاءتها ويقلل الانبعاثات الضارة. جميع منتجاتنا مطابقة للمواصفات الأوروبية EN 590.",
        "We guarantee that every drop of 10 PPM diesel is completely pure, maintaining your equipment engines, improving their efficiency, and reducing harmful emissions. All our products comply with European EN 590 standards."
      ),
    },
    {
      icon: Clock,
      title: t("دقة المواعيد والتوصيل السريع", "Punctuality & Fast Delivery"),
      description: t(
        "ندرك أن الوقت يعني المال. أسطولنا المجهز بأنظمة تتبع متطورة يضمن وصول الوقود إليك متى وأينما احتجته. نفتخر بسجلنا الممتاز في الالتزام بمواعيد التسليم.",
        "We understand that time is money. Our fleet equipped with advanced tracking systems ensures fuel delivery whenever and wherever you need it. We are proud of our excellent record in meeting delivery deadlines."
      ),
    },
    {
      icon: DollarSign,
      title: t("أسعار تنافسية وحلول مرنة", "Competitive Prices & Flexible Solutions"),
      description: t(
        "نقدم أسعاراً مدروسة وحلول دفع مرنة تتناسب مع ميزانيتك التشغيلية. عقودنا المرنة (شهرية وسنوية) مصممة لتوفير أفضل قيمة مقابل المال.",
        "We offer calculated prices and flexible payment solutions that suit your operational budget. Our flexible contracts (monthly and annual) are designed to provide the best value for money."
      ),
    },
    {
      icon: Shield,
      title: t("الالتزام بالسلامة", "Commitment to Safety"),
      description: t(
        "فريقنا مدرب على اتباع أدق إجراءات السلامة في التفريغ والتزويد لحماية أفرادك وممتلكاتك. جميع شاحناتنا مجهزة بأحدث أنظمة السلامة والأمان.",
        "Our team is trained to follow the most precise safety procedures in unloading and refueling to protect your personnel and property. All our trucks are equipped with the latest safety and security systems."
      ),
    },
    {
      icon: CheckCircle2,
      title: t("خدمة عملاء استثنائية", "Exceptional Customer Service"),
      description: t(
        "فريق خدمة العملاء لدينا متاح على مدار الساعة لتلبية احتياجاتكم والإجابة على استفساراتكم. نؤمن ببناء علاقات طويلة الأمد مع عملائنا من خلال الخدمة المتميزة.",
        "Our customer service team is available 24/7 to meet your needs and answer your inquiries. We believe in building long-term relationships with our customers through outstanding service."
      ),
    },
  ];

  return (
    <section className="section-container bg-primary text-primary-foreground">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {t("لماذا تختارنا؟", "Why Choose Us?")}
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
          {t(
            "نحن خيارك الأمثل لتوريد الديزل عالي الجودة في دولة الإمارات",
            "We are your best choice for high-quality diesel supply in the United Arab Emirates"
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-card/10 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:bg-card/20 transition-all duration-300 card-hover animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-4 shadow-accent">
              <reason.icon className="h-7 w-7 text-primary-dark" />
            </div>
            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
            <p className="text-primary-foreground/80 leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>

      {/* Additional CTA */}
      <div className="mt-16 text-center animate-fade-in-up">
        <div className="inline-block bg-card/10 backdrop-blur-sm border-2 border-accent rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            {t("هل أنت مستعد للبدء؟", "Ready to Get Started?")}
          </h3>
          <p className="text-primary-foreground/90 mb-6">
            {t(
              "انضم إلى مئات العملاء الراضين الذين يثقون بنا لتلبية احتياجاتهم من الوقود",
              "Join hundreds of satisfied customers who trust us to meet their fuel needs"
            )}
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-hero"
          >
            {t("تواصل معنا الآن", "Contact Us Now")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
