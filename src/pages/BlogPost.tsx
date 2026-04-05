import { useParams, Link } from "react-router-dom";
import { posts } from "../data/blogData";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaArrowRight,
  FaClock,
  FaGasPump,
  FaChevronLeft,
} from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";
type BlogPostType = {
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  excerpt?: string;
  content?: string;
  ogImage?: string;
  imageAlt?: string;
  date?: string;
  datePublished?: string;
  dateModified?: string;
  category: "supply" | "prices" | "construction" | "guides" | "emergency";
  type?: "article" | "tip";
};
function buildMetaDescription(post: BlogPostType) {
  if (post.metaDescription && post.metaDescription.trim() !== "") {
    return post.metaDescription;
  }

  const plainText = (post.content || "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const baseText =
    post.excerpt && post.excerpt.length > 50
      ? post.excerpt
      : plainText.substring(0, 150);

  const finalText = baseText.substring(0, 155);

  return `${finalText}... | الرعد الثاقب`;
}

function stripHtml(html: string = "") {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function calculateReadingTime(content: string = "") {
  const words = stripHtml(content).split(" ").filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} ${minutes === 1 ? "دقيقة قراءة" : "دقائق قراءة"}`;
}

function getCategoryLabel(post: BlogPostType) {
  if (post.type === "tip") return "نصيحة ذهبية";

  const labels: Record<string, string> = {
    supply: "توريد الديزل",
    prices: "أسعار الديزل",
    construction: "المقاولات والمعدات",
    guides: "دليل ومعلومات",
    emergency: "خدمات الطوارئ",
  };

  return labels[post.category] || "مقال فني";
}

function getCategoryLink(post: BlogPostType) {
  if (post.category === "guides") {
    if (post.type === "tip") {
      return "/blog?category=guides&type=tip";
    }

    if (post.type === "article") {
      return "/blog?category=guides&type=article";
    }

    return "/blog?category=guides";
  }

  if (
    post.category === "supply" ||
    post.category === "prices" ||
    post.category === "construction" ||
    post.category === "emergency"
  ) {
    return `/blog?category=${post.category}`;
  }

  return "/blog";
}

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const relatedNavigationPosts = posts.filter((p) => {
    if (!post) return false;

    const sameCategory = p.category === post.category;
    const sameType = (p.type || "article") === (post.type || "article");

    return sameCategory && sameType;
  });

  const currentIndex = relatedNavigationPosts.findIndex((p) => p.slug === slug);

  const prevPost =
    currentIndex > 0 ? relatedNavigationPosts[currentIndex - 1] : null;

  const nextPost =
    currentIndex < relatedNavigationPosts.length - 1
      ? relatedNavigationPosts[currentIndex + 1]
      : null;
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const readingTime = useMemo(() => {
    if (!post) return "";
    return calculateReadingTime(post.content || "");
  }, [post]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];

    const sameCategory = posts.filter(
      (p) =>
        p.slug !== post.slug &&
        p.category === post.category &&
        p.type === post.type,
    );

    const sameType = posts.filter(
      (p) =>
        p.slug !== post.slug &&
        p.type === post.type &&
        p.category !== post.category,
    );

    const fallback = posts.filter((p) => p.slug !== post.slug);

    const merged = [...sameCategory, ...sameType, ...fallback];

    const unique = merged.filter(
      (item, index, self) =>
        index === self.findIndex((p) => p.slug === item.slug),
    );

    return unique.slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <div
        className="min-h-screen bg-background flex items-center justify-center px-4"
        dir="rtl"
      >
        <div className="text-center bg-card border border-border rounded-[2rem] p-10 shadow-xl max-w-xl w-full">
          <h2 className="text-3xl font-black text-primary-dark mb-4">
            المقال غير موجود
          </h2>
          <p className="text-muted-foreground mb-6">
            يبدو أن الرابط غير صحيح أو أن المقال تم نقله.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-gold text-primary-dark px-6 py-3 rounded-full font-black hover:scale-105 transition"
          >
            <FaArrowRight />
            العودة للمدونة
          </Link>
        </div>
      </div>
    );
  }

  const imageSrc = imgError
    ? post.ogImage || "/images/default.webp"
    : `/images/${slug}.jpg`;

  const seoDescription = buildMetaDescription(post);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Helmet>
        <title>{post.seoTitle || `${post.title} | الرعد الثاقب`}</title>

        <meta name="description" content={seoDescription} />

        <link
          rel="canonical"
          href={`https://alraad-althaqeb.com/blog/${post.slug}`}
        />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.seoTitle || post.title} />
        <meta property="og:description" content={seoDescription} />
        <meta
          property="og:url"
          content={`https://alraad-althaqeb.com/blog/${post.slug}`}
        />
        <meta
          property="og:image"
          content={
            post.ogImage ||
            `https://alraad-althaqeb.com/images/${post.slug}.jpg`
          }
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle || post.title} />
        <meta name="twitter:description" content={seoDescription} />
        <meta
          name="twitter:image"
          content={
            post.ogImage ||
            `https://alraad-althaqeb.com/images/${post.slug}.jpg`
          }
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.seoTitle || post.title,
            description: seoDescription,
            image: [
              post.ogImage ||
                `https://alraad-althaqeb.com/images/${post.slug}.jpg`,
            ],
            author: {
              "@type": "Organization",
              name: "ALRAAD ALTHAQEB",
            },
            publisher: {
              "@type": "Organization",
              name: "ALRAAD ALTHAQEB",
              logo: {
                "@type": "ImageObject",
                url: "https://alraad-althaqeb.com/images/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://alraad-althaqeb.com/blog/${post.slug}`,
            },
            datePublished: post.datePublished,
            dateModified: post.dateModified || post.datePublished,
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <div className="pt-24 pb-48 bg-gradient-to-br from-primary-dark via-[#1e293b] to-primary-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent-dark rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-gold rounded-full blur-[140px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 flex-wrap mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-gold hover:text-white transition group font-bold"
            >
              <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition" />
              العودة للمدونة
            </Link>

            <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>

            <Link
              to={getCategoryLink(post)}
              className="inline-flex items-center text-slate-300 hover:text-gold transition font-bold"
            >
              <FaGasPump className="ml-2" />
              تصفح المزيد من نفس النوع
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-black mb-6">
            <FaGasPump />
            <span>{getCategoryLabel(post)}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 md:gap-6 text-slate-400 flex-wrap">
            <span className="flex items-center gap-2">
              <FaClock className="text-gold" />
              {post.date}
            </span>

            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>

            <span className="text-gold font-bold">{readingTime}</span>

            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>

            <span className="text-slate-300 font-bold">
              {post.type === "tip" ? "محتوى سريع ومفيد" : "مقال احترافي"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto px-4 -mt-32 pb-20 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-border">
          {/* الصورة الدائرية الصغيرة */}
          <div className="flex justify-center my-8">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img
                src={imageSrc}
                alt={post.imageAlt || post.title}
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onError={() => {
                  if (!imgError) setImgError(true);
                }}
              />
            </div>
          </div>

          <div className="p-8 md:p-16">
            {/* Quick summary */}
            {post.excerpt && (
              <div className="mb-10 rounded-3xl border border-gold/20 bg-gold/5 p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-black text-primary-dark mb-3">
                  ملخص سريع
                </h2>
                <p className="text-muted-foreground leading-8 text-base md:text-lg">
                  {post.excerpt}
                </p>
              </div>
            )}

            {/* Article content */}
            <div
              className="prose prose-lg md:prose-xl max-w-none prose-slate prose-headings:text-primary-dark prose-headings:font-black prose-p:leading-[1.9] prose-strong:text-accent-dark prose-a:text-primary prose-a:font-bold hover:prose-a:text-gold"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />

            {/* CTA */}
            <div className="mt-16 bg-primary-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent/20 to-transparent"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-right">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gold">
                    جاهز لتزويد منشأتك بالديزل؟
                  </h3>
                  <p className="text-slate-300">
                    أفضل جودة ديزل في الإمارات تصلك أينما كنت وبأسرع استجابة.
                  </p>
                </div>

                <a
                  href="https://wa.me/971544099266?text=مرحبًا، أريد عرض سعر لتوريد الديزل"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gold hover:bg-white text-primary-dark px-10 py-4 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-xl flex items-center gap-3 text-center"
                >
                  <FaWhatsapp className="text-2xl" />
                  احصل على أفضل سعر ديزل الآن عبر واتساب
                </a>
              </div>
            </div>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-primary-dark mb-2">
                      مقالات مرتبطة
                    </h3>
                    <p className="text-muted-foreground">
                      اقرأ أيضًا موضوعات قريبة من هذا المقال لزيادة الفائدة.
                    </p>
                  </div>

                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-primary font-black hover:text-gold transition"
                  >
                    عرض كل المقالات
                    <FaChevronLeft className="text-xs" />
                  </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((related) => (
                    <Link
                      key={`${related.slug}-${related.id}`}
                      to={`/blog/${related.slug}`}
                      className="group bg-card border border-border rounded-[1.75rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                    >
                      <div className="p-6 flex flex-col h-full">
                        <div className="mb-4">
                          <span
                            className={`inline-flex px-3 py-1 rounded-full text-[11px] font-black ${
                              related.type === "tip"
                                ? "bg-gold text-primary-dark"
                                : "bg-accent text-white"
                            }`}
                          >
                            {related.type === "tip"
                              ? "نصيحة"
                              : getCategoryLabel(related)}
                          </span>
                        </div>

                        <h4 className="text-lg font-black text-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          {related.title}
                        </h4>

                        <p className="text-sm text-muted-foreground leading-7 line-clamp-3 mb-5">
                          {related.excerpt}
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-primary font-black text-sm">
                            اقرأ المقال
                          </span>
                          <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                            <FaChevronLeft className="text-xs" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-16 pt-8 border-t border-border grid md:grid-cols-2 gap-6">
              {/* Next (بقى في الشمال) */}

              {/* Prev (بقى في اليمين) */}
              {prevPost && (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition text-right"
                >
                  <span className="text-sm text-muted-foreground block mb-2">
                    → المقال السابق
                  </span>

                  <h4 className="font-bold text-lg group-hover:text-primary transition">
                    {prevPost.title}
                  </h4>
                </Link>
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition"
                >
                  <span className="text-sm text-muted-foreground block mb-2">
                    المقال التالي ←
                  </span>

                  <h4 className="font-bold text-lg group-hover:text-primary transition">
                    {nextPost.title}
                  </h4>
                </Link>
              )}
            </div>
            {/* Bottom navigation */}
            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary font-black hover:text-gold transition"
              >
                <FaArrowRight />
                العودة إلى كل المقالات
              </Link>

              <a
                href="https://wa.me/971544099266?text=مرحبًا، أريد الاستفسار عن توريد الديزل"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-black transition-all"
              >
                <FaWhatsapp />
                تواصل واتساب الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
