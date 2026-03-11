import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Factory, Truck, Tractor, Zap } from "lucide-react";
import sectorConstruction from "@/assets/sector-construction.jpg";
import sectorIndustrial from "@/assets/sector-industrial.jpg";
import sectorTransport from "@/assets/sector-transport.jpg";

const SectorsSection = () => {
  const { t } = useLanguage();

  const sectors = [
    {
      icon: Building2,
      image: sectorConstruction,
      title: t("قطاع المقاولات والبناء", "Construction & Contracting"),
      description: t(
        "نخدم شركات المقاولات ومواقع البناء الكبرى بتوريد الديزل عالي الجودة للمعدات الثقيلة والمولدات.",
        "We serve contracting companies and major construction sites by supplying high-quality diesel for heavy equipment and generators."
      ),
    },
    {
      icon: Truck,
      image: sectorTransport,
      title: t("قطاع النقل والخدمات اللوجستية", "Transportation & Logistics"),
      description: t(
        "حلول وقود متخصصة لشركات النقل وأساطيل الشاحنات لضمان استمرارية العمليات اللوجستية.",
        "Specialized fuel solutions for transport companies and truck fleets to ensure continuity of logistics operations."
      ),
    },
    {
      icon: Factory,
      image: sectorIndustrial,
      title: t("القطاع الصناعي والمصانع", "Industrial & Manufacturing"),
      description: t(
        "إمداد موثوق للمصانع والمنشآت الصناعية بالديزل النقي لتشغيل المعدات والآلات الصناعية.",
        "Reliable supply to factories and industrial facilities with pure diesel to operate equipment and industrial machinery."
      ),
    },
    {
      icon: Tractor,
      image: sectorConstruction,
      title: t("القطاع الزراعي", "Agricultural Sector"),
      description: t(
        "نوفر وقود الديزل للمعدات الزراعية والمضخات لدعم العمليات الزراعية على مدار العام.",
        "We provide diesel fuel for agricultural equipment and pumps to support year-round farming operations."
      ),
    },
    {
      icon: Zap,
      image: sectorIndustrial,
      title: t("قطاع توليد الطاقة", "Power Generation"),
      description: t(
        "حلول وقود متخصصة لمحطات توليد الطاقة والمولدات الكهربائية لضمان إمداد طاقة مستمر.",
        "Specialized fuel solutions for power plants and electric generators to ensure continuous power supply."
      ),
    },
  ];

  return (
    <section id="sectors" className="section-container bg-background">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="section-title text-center">
          {t("نفخر بخدمة رواد القطاعات الحيوية", "Proud to Serve Leading Vital Sectors")}
        </h2>
        <p className="section-subtitle mx-auto">
          {t(
            "نقدم خدماتنا لمجموعة واسعة من القطاعات الحيوية في دولة الإمارات",
            "We provide our services to a wide range of vital sectors in the United Arab Emirates"
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-md card-hover animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={sector.image}
                alt={sector.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 shadow-accent transform transition-transform group-hover:scale-110">
                <sector.icon className="h-6 w-6 text-primary-dark" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                {sector.title}
              </h3>
              <p className="text-primary-foreground/90 text-sm leading-relaxed">
                {sector.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectorsSection;
