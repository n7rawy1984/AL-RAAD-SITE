import { Shield, Truck, Award, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TrustBar = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t("الجودة العالية", "Premium Quality"),
      description: t(
        "ديزل 10 PPM مطابق للمواصفات الأوروبية EN 590",
        "10 PPM Diesel compliant with European EN 590 standards"
      ),
    },
    {
      icon: Truck,
      title: t("التوصيل الموثوق", "Reliable Delivery"),
      description: t(
        "أسطول حديث يضمن التوصيل في الوقت المحدد",
        "Modern fleet ensures on-time delivery"
      ),
    },
    {
      icon: Shield,
      title: t("السلامة أولاً", "Safety First"),
      description: t(
        "الالتزام بأعلى معايير السلامة والأمان",
        "Commitment to highest safety and security standards"
      ),
    },
    {
      icon: Headphones,
      title: t("خدمة عملاء متميزة", "Excellent Service"),
      description: t(
        "فريق متخصص لخدمتكم على مدار الساعة",
        "Dedicated team serving you 24/7"
      ),
    },
  ];

  return (
    <section className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-accent">
                  <feature.icon className="h-6 w-6 text-primary-dark" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
