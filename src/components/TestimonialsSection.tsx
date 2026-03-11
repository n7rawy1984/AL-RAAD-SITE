import { useLanguage } from "@/contexts/LanguageContext";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t("أحمد الكعبي", "Ahmed Al Kaabi"),
      company: t("شركة الإمارات للمقاولات", "Emirates Construction Company"),
      position: t("مدير المشتريات", "Procurement Manager"),
      rating: 5,
      text: t(
        "خدمة سريعة وموثوقة، أصبحوا جزءاً لا يتجزأ من نجاح مشاريعنا. التزامهم بالمواعيد والجودة العالية جعلهم شريكنا المفضل.",
        "Fast and reliable service, they have become an integral part of our project success. Their commitment to timelines and high quality made them our preferred partner."
      ),
    },
    {
      name: t("محمد السويدي", "Mohammed Al Suwaidi"),
      company: t("أسطول النقل الوطني", "National Transport Fleet"),
      position: t("مدير العمليات", "Operations Manager"),
      rating: 5,
      text: t(
        "نتعامل معهم منذ أكثر من سنتين ولم نواجه أي مشاكل. الأسعار منافسة والخدمة ممتازة. نوصي بهم بشدة لأي شركة نقل.",
        "We have been dealing with them for over two years and have not faced any problems. Competitive prices and excellent service. We highly recommend them to any transport company."
      ),
    },
    {
      name: t("سالم المزروعي", "Salem Al Mazrouei"),
      company: t("مصنع الإمارات للصناعات", "Emirates Industrial Factory"),
      position: t("مدير المصنع", "Factory Manager"),
      rating: 5,
      text: t(
        "الجودة العالية للديزل أدت إلى تحسين كفاءة معداتنا وتقليل تكاليف الصيانة. فريق محترف وخدمة عملاء ممتازة.",
        "The high quality of diesel has improved our equipment efficiency and reduced maintenance costs. Professional team and excellent customer service."
      ),
    },
  ];

  return (
    <section className="section-container bg-background">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="section-title text-center">
          {t("ماذا يقول عملاؤنا عنا", "What Our Clients Say About Us")}
        </h2>
        <p className="section-subtitle mx-auto">
          {t(
            "نفخر بثقة عملائنا ورضاهم عن خدماتنا",
            "We are proud of our clients' trust and satisfaction with our services"
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-8 shadow-md card-hover relative animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="h-16 w-16 text-accent" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
              "{testimonial.text}"
            </p>

            {/* Client Info */}
            <div className="border-t border-border pt-4">
              <h4 className="font-bold text-primary">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              <p className="text-sm text-accent font-medium mt-1">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="mt-16 text-center">
        <div className="inline-flex flex-wrap justify-center gap-8 items-center p-8 bg-muted rounded-2xl">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">{t("عميل راضٍ", "Satisfied Clients")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">{t("عملية توصيل", "Deliveries")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">{t("معدل الرضا", "Satisfaction Rate")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">{t("دعم العملاء", "Customer Support")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
