import { posts } from "../data/blogData";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaGasPump, FaChevronLeft } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Helmet>
        <title>مدونة الرعد الثاقب | خبراء توريد الديزل في الإمارات</title>
        <meta
          name="description"
          content="اكتشف أحدث المقالات والنصائح الاحترافية حول توريد واستهلاك الديزل في دبي والإمارات."
        />
      </Helmet>

      {/* --- الـ Hero Section المدمج --- */}
      <div className="relative pt-32 pb-24 bg-primary-dark overflow-hidden">
        {/* تأثيرات خلفية فخمة */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-dark rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* نقوش كربونية خفيفة للخلفية */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-bold mb-6">
            <FaGasPump className="animate-pulse" />
            <span>المصدر الأول للطاقة في الإمارات</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
            مركز <span className="text-gold font-outline-2">المعرفة</span>{" "}
            والوقود
          </h1>
          <p className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
            دليلك الشامل لأحدث تحليلات سوق الديزل، نصائح التوفير، وحلول الطاقة
            اللوجستية.
          </p>
          <div className="mt-8 flex justify-center items-center gap-3">
            <div className="w-16 h-1 bg-gold rounded-full"></div>
            <div className="w-4 h-1 bg-white/30 rounded-full"></div>
            <div className="w-4 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* --- شبكة المقالات --- */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-12 relative z-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-card border border-border rounded-[2rem] overflow-hidden shadow-sm 
             md:hover:shadow-2xl md:hover:-translate-y-3 transition-all duration-300 
             flex flex-col smooth-scroll-fix"
              // لاحظ إضافة md: قبل الـ hover عشان ميتفعلش غير على الكمبيوتر بس
            >
              {/* حاوية الصورة */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 z-10"></div>
                <img
                  src="/images/raad-small.webp"
                  srcSet="/images/raad-small.webp 600w, /images/raad.webp 1200w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 right-5 z-20">
                  <span
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] shadow-2xl ${
                      post.category === "tip"
                        ? "bg-gold text-primary-dark"
                        : "bg-accent text-white"
                    }`}
                  >
                    {post.category === "tip" ? "نصيحة ذهبية" : "مقال فني"}
                  </span>
                </div>
              </div>

              {/* محتوى الكارت */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold mb-4">
                  <FaGasPump className="text-gold" />
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-black text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-8">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-primary font-black text-sm uppercase tracking-wider">
                    اقرأ المزيد
                  </span>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <FaChevronLeft className="text-xs" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
