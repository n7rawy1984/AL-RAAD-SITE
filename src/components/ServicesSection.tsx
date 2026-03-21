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
      title: t("توريد ديزل مباشر للمواقع", "Direct Diesel Supply to Sites"),
      description: t(
        "نوفر خدمة توريد الديزل مباشرة إلى مواقع البناء والمشاريع في جميع إمارات الدولة بسرعة وكفاءة عالية.",
        "We provide direct diesel supply to construction sites and projects across the UAE with high efficiency and fast delivery.",
      ),
    },
    {
      icon: Droplet,
      image: serviceTank,
      title: t(
        "تعبئة خزانات الديزل للشركات",
        "Diesel Tank Filling for Companies",
      ),
      description: t(
        "خدمة متخصصة لتعبئة خزانات الوقود للمصانع والشركات مع ضمان التزويد المستمر دون انقطاع.",
        "Specialized diesel tank filling service for factories and companies with guaranteed continuous supply.",
      ),
    },
    {
      icon: Truck,
      image: serviceFleet,
      title: t(
        "توريد ديزل لأساطيل النقل",
        "Diesel Supply for Transport Fleets",
      ),
      description: t(
        "حلول مخصصة لشركات النقل والأساطيل الكبيرة مع برامج توريد منتظمة بأسعار تنافسية.",
        "Customized diesel supply solutions for transportation companies and large fleets with competitive pricing.",
      ),
    },
    {
      icon: FileText,
      image: serviceDelivery,
      title: t("عقود توريد ديزل مرنة", "Flexible Diesel Supply Contracts"),
      description: t(
        "نقدم عقود توريد شهرية وسنوية مرنة بأسعار تنافسية وشروط دفع مناسبة لاحتياجاتكم.",
        "We offer flexible monthly and annual diesel supply contracts with competitive prices and flexible payment terms.",
      ),
    },
  ];

  return (
    <section id="services" className="section-container bg-muted">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="section-title text-center">
          {t(
            "خدمات توريد الديزل في الإمارات للمشاريع والشركات",
            "Diesel Supply Services in UAE for Projects & Companies",
          )}
        </h2>

        <p className="section-subtitle mx-auto">
          {t(
            "نقدم حلول متكاملة لتوريد الديزل تشمل المشاريع، المصانع، وشركات النقل في جميع أنحاء الإمارات.",
            "We provide complete diesel supply solutions for construction projects, factories, and transport companies across the UAE.",
          )}
        </p>
      </div>

      {/* Services Grid */}
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
              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 CTA Section */}
      <div className="text-center mt-12">
        <a
          href="https://wa.me/971555677114"
          target="_blank"
          className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-green-400 transition"
        >
          {t(
            "اطلب توريد ديزل الآن عبر واتساب",
            "Order Diesel Now via WhatsApp",
          )}
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
