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
              alt="Fleet"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2 animate-slide-in-right">
          <h2 className="section-title">
            {t("شريككم الاستراتيجي في إمدادات الطاقة", "Your Strategic Partner in Energy Supply")}
          </h2>
          <p className="section-subtitle mb-8">
            {t(
              "شركة الرعد الثاقب لتجارة الديزل هي إحدى الشركات الرائدة في مجال توريد الديزل عالي الجودة في دولة الإمارات العربية المتحدة. نحن نفخر بتقديم حلول طاقة موثوقة ومستدامة لعملائنا في مختلف القطاعات.",
              "ALRAAD ALTHAQEB Diesel Fuel Trading is one of the leading companies in the supply of high-quality diesel in the United Arab Emirates. We are proud to provide reliable and sustainable energy solutions to our clients across various sectors."
            )}
          </p>

          <div className="space-y-6">
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
                    "تقديم أفضل خدمات توريد الديزل بجودة عالية وأسعار تنافسية، مع الالتزام بأعلى معايير السلامة والاستدامة.",
                    "To provide the best diesel supply services with high quality and competitive prices, while adhering to the highest safety and sustainability standards."
                  )}
                </p>
              </div>
            </div>

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
                    "أن نكون الخيار الأول لتوريد الديزل في دولة الإمارات، ونساهم في تمكين الشركات من تحقيق أهدافها من خلال حلول طاقة موثوقة.",
                    "To be the first choice for diesel supply in the UAE, and contribute to enabling companies to achieve their goals through reliable energy solutions."
                  )}
                </p>
              </div>
            </div>

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
                    "الجودة، الموثوقية، الالتزام، والابتكار هي القيم التي نعمل بها لضمان رضا عملائنا وتحقيق التميز في كل ما نقوم به.",
                    "Quality, reliability, commitment, and innovation are the values we work with to ensure customer satisfaction and achieve excellence in everything we do."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
