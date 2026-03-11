import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Droplet, Truck, FileText } from "lucide-react";
import serviceDelivery from "@/assets/service-delivery.jpg";
import serviceTank from "@/assets/service-tank.jpg";
import serviceFleet from "@/assets/service-fleet.jpg";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: MapPin,
      image: serviceDelivery,
      title: t("التوريد المباشر للمواقع", "Direct Site Delivery"),
      description: t(
        "نوفر خدمة توصيل الديزل مباشرة إلى مواقع البناء والمشاريع بكل كفاءة وسرعة. أسطولنا الحديث جاهز للتوصيل في أي وقت ومكان.",
        "We provide diesel delivery service directly to construction sites and projects with efficiency and speed. Our modern fleet is ready to deliver anytime, anywhere."
      ),
    },
    {
      icon: Droplet,
      image: serviceTank,
      title: t("تعبئة خزانات الشركات", "Company Tank Filling"),
      description: t(
        "خدمة متخصصة لتعبئة خزانات الوقود للمصانع والشركات. نضمن التزويد المستمر دون انقطاع لضمان سير أعمالكم بسلاسة.",
        "Specialized service for filling fuel tanks for factories and companies. We ensure continuous supply without interruption to keep your business running smoothly."
      ),
    },
    {
      icon: Truck,
      image: serviceFleet,
      title: t("إمداد أساطيل النقل", "Fleet Supply"),
      description: t(
        "حلول مخصصة لشركات النقل والأساطيل الكبيرة. نوفر برامج تزويد منتظمة بأسعار تنافسية تساعدكم على تحسين كفاءة التشغيل.",
        "Customized solutions for transportation companies and large fleets. We provide regular supply programs at competitive prices to help you improve operational efficiency."
      ),
    },
    {
      icon: FileText,
      image: serviceDelivery,
      title: t("عقود التوريد المرنة", "Flexible Supply Contracts"),
      description: t(
        "نقدم عقود توريد شهرية وسنوية مرنة تناسب احتياجاتكم. أسعار تنافسية، شروط دفع مرنة، وخدمة عملاء مخصصة.",
        "We offer flexible monthly and annual supply contracts that suit your needs. Competitive prices, flexible payment terms, and dedicated customer service."
      ),
    },
  ];

  return (
    <section id="services" className="section-container bg-muted">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="section-title text-center">
          {t("خدمات توريد متكاملة تلبي احتياجاتكم", "Comprehensive Supply Services for Your Needs")}
        </h2>
        <p className="section-subtitle mx-auto">
          {t(
            "نوفر مجموعة شاملة من خدمات توريد الديزل المصممة خصيصاً لتلبية متطلبات أعمالكم",
            "We provide a comprehensive range of diesel supply services designed specifically to meet your business requirements"
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-card rounded-xl overflow-hidden shadow-md card-hover animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center shadow-accent">
                  <service.icon className="h-7 w-7 text-primary-dark" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
