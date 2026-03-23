import { useParams } from "react-router-dom";
import { posts } from "../data/blogData";
import { Helmet } from "react-helmet-async";
import BlogHero from "../components/BlogHero";

// المسارات المباشرة للصور لضمان عدم توقف Vite
const main_tanker = "/src/assets/main_tanker.png";
const construction_fuel = "/src/assets/construction_fuel.png";
const prices_today = "/src/assets/prices_today.png";
const jebel_ali_logistics = "/src/assets/jebel_ali_logistics.png";
const industrial_bulk = "/src/assets/industrial_bulk.png";
const emergency_247 = "/src/assets/emergency_247.png";
const events_generator = "/src/assets/events_generator.png";
const specifications_10ppm = "/src/assets/specifications_10ppm.png";
const trading_companies = "/src/assets/trading_companies.png";
const heavy_contracts = "/src/assets/heavy_contracts.png";
const quick_check_10ppm = "/src/assets/quick_check_10ppm.png";
const tank_maintenance = "/src/assets/tank_maintenance.png";
const prevent_contamination = "/src/assets/prevent_contamination.png";
const consumption_optimize = "/src/assets/consumption_optimize.png";
const filtering_importance = "/src/assets/filtering_importance.png";
const meter_accuracy_check = "/src/assets/meter_accuracy_check.png";
const safety_rules_storage = "/src/assets/safety_rules_storage.png";
const prevent_overheating = "/src/assets/prevent_overheating.png";
const detect_water = "/src/assets/detect_water.png";
const detect_meter_ghsh = "/src/assets/detect_meter_ghsh.png";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post)
    return (
      <div className="p-40 text-center font-bold text-slate-900 min-h-screen">
        المقال غير موجود
      </div>
    );

  const isTip = post.category === "tip";

  // دالة لتحديد الصورة بناءً على الـ slug
  const getPostImage = () => {
    switch (post.slug) {
      case "best-diesel-delivery-dubai":
        return main_tanker;
      case "diesel-supply-construction-dubai":
        return construction_fuel;
      case "diesel-price-per-gallon-uae-today":
        return prices_today;
      case "euro-5-diesel-jebel-ali-free-zone":
        return jebel_ali_logistics;
      case "bulk-diesel-supply-industrial-dubai":
        return industrial_bulk;
      case "emergency-diesel-supply-dubai-24-7":
        return emergency_247;
      case "generator-diesel-dubai-events":
        return events_generator;
      case "diesel-fuel-specifications-uae-10ppm":
        return specifications_10ppm;
      case "diesel-trading-companies-dubai-reputable":
        return trading_companies;
      case "heavy-equipment-diesel-dubai-contracts":
        return heavy_contracts;
      case "check-diesel-quality-10ppm-uae":
        return quick_check_10ppm;
      case "fuel-tank-maintenance-cleaning-uae":
        return tank_maintenance;
      case "prevent-diesel-fuel-contamination-dubai":
        return prevent_contamination;
      case "optimize-diesel-consumption-fleet-dubai":
        return consumption_optimize;
      case "diesel-fuel-filtering-importance-uae":
        return filtering_importance;
      case "check-fuel-meter-accuracy-dubai-supplies":
        return meter_accuracy_check;
      case "diesel-storage-safety-rules-construction-sites":
        return safety_rules_storage;
      case "protect-diesel-generators-overheating-dubai":
        return prevent_overheating;
      case "diesel-contamination-water-detection-dubai":
        return detect_water;
      case "check-fuel-meter-accuracy-dubai-supplies-2":
        return detect_meter_ghsh;
      default:
        return main_tanker;
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | الرعد الثاقب لتجارة الديزل دبي</title>
        <meta name="description" content={post.excerpt} />
        <link
          rel="canonical"
          href={`https://alraad-althaqeb.com/blog/${slug}`}
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:image"
          content={`https://alraad-althaqeb.com/src/assets/${slug}.png`}
        />
        <meta
          property="og:url"
          content={`https://alraad-althaqeb.com/blog/${slug}`}
        />
      </Helmet>

      <div dir="rtl" className={isTip ? "tip-page" : ""}>
        {/* الـ BlogHero الجديد مع الخلفية والناف بار */}
        <BlogHero
          title={post.title}
          subtitle={`${isTip ? "نصيحة سريعة من خبراء الرعد الثاقب" : "دليلك المهني لتوريد الوقود في دبي"} - ${post.date}`}
        />

        <div className="bg-white pb-20 px-6">
          {/* الستايلات الداخلية لضمان التنسيق */}
          <style>{`
            .blog-content h2 { font-size: 1.875rem; font-weight: 800; color: #0f172a; margin-top: 2.5rem; margin-bottom: 1rem; line-height: 1.3; }
            .blog-content h3 { font-size: 1.5rem; font-weight: 700; color: #1e293b; margin-top: 1.5rem; margin-bottom: 0.75rem; }
            .blog-content p { margin-bottom: 1.25rem; color: #334155; line-height: 1.8; font-size: 1.125rem; }
            .blog-content ul { list-style-type: disc; padding-right: 1.5rem; margin-bottom: 1.5rem; color: #334155; }
            .blog-content li { margin-bottom: 0.5rem; line-height: 1.6; }
            .blog-content strong { color: #2563eb; font-weight: 700; }
            .blog-content img { border-radius: 1.5rem; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); margin: 2.5rem 0; width: 100%; height: auto; }
          `}</style>

          <article className="max-w-3xl mx-auto -mt-10 relative z-20 bg-white p-8 md:p-12 rounded-3xl shadow-sm">
            {/* عرض صورة المقال المخصصة */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 border-4 border-white">
              <img
                src={getPostImage()}
                alt={`${post.title} - الرعد الثاقب`}
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              {!isTip && (
                <div className="absolute top-6 right-6 bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg">
                  جودة PPM 10
                </div>
              )}
            </div>

            {/* محتوى المقال */}
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* صندوق التواصل */}
            <div
              className={`mt-16 p-10 rounded-[2.5rem] text-white text-center shadow-2xl border-t-8 transition-all hover:scale-[1.02] ${
                isTip
                  ? "bg-orange-600 border-orange-800"
                  : "bg-slate-900 border-blue-600"
              }`}
            >
              <h3 className="text-3xl font-black mb-4">
                {isTip ? "جاهز لتحسين كفاءة وقودك؟" : "اطلب الديزل الآن لشركتك"}
              </h3>
              <p className="mb-8 text-lg opacity-90 leading-relaxed">
                {isTip
                  ? "تواصل مع خبراء الرعد الثاقب للحصول على استشارة مجانية حول صيانة الوقود."
                  : "نوفر لك أفضل الأسعار مع توصيل فوري لجميع مناطق دبي والإمارات 24/7."}
              </p>
              <div className="flex justify-center">
                <a
                  href="https://wa.me/971555677114"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-block px-10 py-4 md:px-12 md:py-5 rounded-full font-black text-lg md:text-xl shadow-lg transition-all ${
                    isTip
                      ? "bg-white text-orange-600 hover:bg-slate-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  تواصل عبر الواتساب
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
