import { useMemo, useState, useEffect } from "react";
import { posts } from "../data/blogData";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaGasPump, FaChevronLeft } from "react-icons/fa";

type BlogCategory =
  | "all"
  | "supply"
  | "prices"
  | "construction"
  | "guides"
  | "emergency";

const categoryLabels: Record<BlogCategory, string> = {
  all: "الكل",
  supply: "توريد الديزل",
  prices: "الأسعار",
  construction: "المقاولات",
  guides: "الأدلة والنصائح",
  emergency: "الطوارئ",
};

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeCategory, setActiveCategory] = useState<BlogCategory>("all");

  const [guideFilter, setGuideFilter] = useState<"all" | "article" | "tip">(
    "all",
  );

  // 👇 قراءة من الرابط
  useEffect(() => {
    const category = searchParams.get("category") as BlogCategory;
    const type = searchParams.get("type") as "article" | "tip";

    if (category && categoryLabels[category]) {
      setActiveCategory(category);
    }

    if (category === "guides" && type) {
      setGuideFilter(type);
    }
  }, [searchParams]);

  // 👇 تحديث الرابط
  const updateURL = (category: BlogCategory, type?: string) => {
    if (category === "all") {
      setSearchParams({});
      return;
    }

    if (category === "guides" && type && type !== "all") {
      setSearchParams({ category, type });
    } else {
      setSearchParams({ category });
    }
  };

  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") return posts;

    return posts.filter((post) => {
      if (activeCategory !== "guides") {
        return post.category === activeCategory;
      }

      if (guideFilter === "all") {
        return post.category === "guides";
      }

      return post.category === "guides" && post.type === guideFilter;
    });
  }, [activeCategory, guideFilter]);
  const getSEOData = () => {
    if (activeCategory === "all") {
      return {
        title: "مدونة الرعد الثاقب | خبراء توريد الديزل في الإمارات",
        description:
          "اكتشف أحدث المقالات والنصائح الاحترافية حول توريد واستهلاك الديزل في الإمارات.",
        url: "https://alraad-althaqeb.com/blog",
      };
    }

    if (activeCategory === "supply") {
      return {
        title: "توريد الديزل في الإمارات | نصائح وخدمات التوريد",
        description:
          "تعرف على أفضل طرق توريد الديزل للمشاريع والشركات في الإمارات مع خدمات سريعة واحترافية.",
        url: "https://alraad-althaqeb.com/blog?category=supply",
      };
    }

    if (activeCategory === "prices") {
      return {
        title: "أسعار الديزل في الإمارات | تحديثات وتحليلات",
        description:
          "تابع أحدث أسعار الديزل في الإمارات وتحليلات السوق لاتخاذ قرارات أفضل.",
        url: "https://alraad-althaqeb.com/blog?category=prices",
      };
    }

    if (activeCategory === "construction") {
      return {
        title: "ديزل المقاولات والمعدات الثقيلة",
        description:
          "كل ما تحتاجه شركات المقاولات من حلول توريد الديزل للمعدات الثقيلة والمشاريع.",
        url: "https://alraad-althaqeb.com/blog?category=construction",
      };
    }

    if (activeCategory === "guides") {
      if (guideFilter === "tip") {
        return {
          title: "نصائح الديزل | تحسين الاستهلاك وخفض التكاليف",
          description:
            "نصائح احترافية لتقليل استهلاك الديزل وتحسين كفاءة التشغيل.",
          url: "https://alraad-althaqeb.com/blog?category=guides&type=tip",
        };
      }

      return {
        title: "دليل الديزل | مقالات احترافية",
        description:
          "مقالات متعمقة حول الديزل واستخداماته في المشاريع والصناعة.",
        url: "https://alraad-althaqeb.com/blog?category=guides",
      };
    }

    if (activeCategory === "emergency") {
      return {
        title: "توريد ديزل طوارئ 24/7 في الإمارات",
        description: "خدمة توريد ديزل عاجلة للمولدات والمشاريع في أي وقت.",
        url: "https://alraad-althaqeb.com/blog?category=emergency",
      };
    }

    return {
      title: "مدونة الديزل",
      description: "مقالات حول الديزل",
      url: "https://alraad-althaqeb.com/blog",
    };
  };

  const seo = getSEOData();
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: seo.title,
    description: seo.description,
    url: seo.url,
    publisher: {
      "@type": "Organization",
      name: "ALRAAD ALTHAQEB",
      logo: {
        "@type": "ImageObject",
        url: "https://alraad-althaqeb.com/images/logo.png",
      },
    },
    blogPost: filteredPosts.slice(0, 12).map((post) => ({
      "@type": "BlogPosting",
      headline: post.seoTitle || post.title,
      url: `https://alraad-althaqeb.com/blog/${post.slug}`,
      description: post.metaDescription || post.excerpt,
      image:
        post.ogImage ||
        post.image ||
        `https://alraad-althaqeb.com/images/${post.slug}.jpg`,
      datePublished: post.datePublished,
      dateModified: post.dateModified || post.datePublished,
      author: {
        "@type": "Organization",
        name: "ALRAAD ALTHAQEB",
      },
    })),
  };
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />

        <link rel="canonical" href={seo.url} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />

        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="relative pt-32 pb-24 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-dark rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6">
            مركز <span className="text-gold">المعرفة</span> والوقود
          </h1>
          <p className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto">
            دليلك الشامل لأحدث تحليلات سوق الديزل والنصائح.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-12 relative z-20">
        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {(Object.keys(categoryLabels) as BlogCategory[]).map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setGuideFilter("all");
                  updateURL(category);
                }}
                className={`px-5 py-2.5 rounded-full font-extrabold transition ${
                  isActive
                    ? "bg-gold text-black"
                    : "bg-card border hover:text-gold"
                }`}
              >
                {categoryLabels[category]}
              </button>
            );
          })}
        </div>

        {/* Guides Filter */}
        {activeCategory === "guides" && (
          <div className="mb-8 flex justify-center gap-3">
            {[
              { key: "all", label: "الكل" },
              { key: "article", label: "مقالات" },
              { key: "tip", label: "نصائح" },
            ].map((item) => {
              const isActive = guideFilter === item.key;

              return (
                <button
                  key={item.key}
                  onClick={() => {
                    setGuideFilter(item.key as "all" | "article" | "tip");
                    updateURL("guides", item.key);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-bold ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-secondary hover:bg-primary hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link
              key={`${post.slug}-${post.id}`}
              to={`/blog/${post.slug}`}
              className="group bg-card rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col"
            >
              <div className="flex justify-center pt-6">
                <div className="w-36 h-36 rounded-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center mt-3">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    post.type === "tip"
                      ? "bg-gold text-black"
                      : "bg-accent text-white"
                  }`}
                >
                  {post.type === "tip" ? "نصيحة" : "مقال"}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow text-center">
                <h2 className="text-lg font-black mb-3">{post.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {post.excerpt}
                </p>

                <span className="mt-auto text-primary font-bold">
                  اقرأ المزيد →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold">لا يوجد محتوى هنا حالياً</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
