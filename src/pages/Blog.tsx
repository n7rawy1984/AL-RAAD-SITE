import { posts } from "../data/blogData";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaGasPump, FaArrowLeft, FaChevronLeft } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Helmet>
        <title>المدونة | الرعد الثاقب لتوريد الديزل</title>
      </Helmet>

      {/* Hero Section مع خلفية مميزة */}

      <div className="relative pt-32 pb-20 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20 group">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-dark rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            مركز <span className="text-gold">المعرفة</span> والوقود
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            اكتشف أحدث التحليلات والنصائح في عالم توريد الديزل والطاقة في
            الإمارات
          </p>
        </div>
      </div>

      {/* Grid المقالات */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-card border border-border rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500"></div>
                <img
                  src={`/images/${post.slug}.jpg`}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => (e.currentTarget.src = "/images/default.jpg")}
                />
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${
                      post.category === "tip"
                        ? "bg-gold text-primary-dark"
                        : "bg-accent text-white"
                    }`}
                  >
                    {post.category === "tip" ? "نصيحة" : "مقال"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <FaGasPump className="text-gold" />
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center text-primary font-bold group-hover:gap-3 transition-all">
                  <span>اقرأ المزيد</span>
                  <FaChevronLeft className="mr-2 text-xs" />
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
