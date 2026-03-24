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

      <div className="pt-28 pb-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-bold mb-6">
            <FaGasPump />
            <span>المصدر الأول للطاقة في الإمارات</span>
          </div>

          <h1 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tight">
            مركز <span className="text-gold">المعرفة</span> والوقود
          </h1>

          <p className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            دليلك الشامل لأحدث تحليلات سوق الديزل، نصائح التوفير، وحلول الطاقة
            اللوجستية.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white border border-border rounded-3xl overflow-hidden shadow-sm flex flex-col"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src="/images/raad-small.webp"
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/default.jpg";
                  }}
                />

                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] ${
                      post.category === "tip"
                        ? "bg-gold text-primary-dark"
                        : "bg-accent text-white"
                    }`}
                  >
                    {post.category === "tip" ? "نصيحة ذهبية" : "مقال فني"}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold mb-4">
                  <FaGasPump className="text-gold" />
                  <span>{post.date}</span>
                </div>

                <h2 className="text-lg font-black text-foreground mb-3 leading-snug line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-primary font-black text-sm">
                    اقرأ المزيد
                  </span>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
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
