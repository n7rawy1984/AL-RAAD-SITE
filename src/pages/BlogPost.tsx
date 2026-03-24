import { useParams } from "react-router-dom";
import { posts } from "../data/blogData";
import { Helmet } from "react-helmet-async";
import BlogHero from "../components/BlogHero";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="p-40 text-center font-bold text-slate-900 min-h-screen">
        المقال غير موجود
      </div>
    );
  }

  const isTip = post.category === "tip";

  // 🔥 صورة ديناميك (من public)
  const imagePath = `/images/${slug}.jpg`;

  return (
    <>
      <div className="pt-16 bg-[#0f172a] min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
          <Helmet>
            <title>{post.title} | الرعد الثاقب</title>
            <meta name="description" content={post.excerpt} />
            <link
              rel="canonical"
              href={`https://alraad-althaqeb.com/blog/${slug}`}
            />

            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.excerpt} />
            <meta
              property="og:image"
              content={`https://alraad-althaqeb.com/images/${slug}.jpg`}
            />
          </Helmet>

          <div dir="rtl">
            <BlogHero
              title={post.title}
              subtitle={`${isTip ? "نصيحة" : "مقال"} - ${post.date}`}
            />

            <div className="bg-white pb-20 px-4 md:px-6">
              <div className="bg-white pt-10 pb-20 px-4 md:px-6 relative z-10"></div>
              <article className="max-w-3xl mx-auto mt-6 bg-white p-6 md:p-10 rounded-3xl shadow relative z-10">
                {/* 🔥 عنوان المقال (مهم جداً SEO) */}
                <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                {/* ✅ صورة بدون لاج */}
                <div className="w-full h-[250px] md:h-[400px] mb-8 overflow-hidden rounded-2xl bg-gray-100 border">
                  <img
                    src={imagePath}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/images/default.jpg";
                    }}
                  />
                </div>

                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* CTA */}
                <div className="mt-12 p-8 rounded-2xl text-white text-center bg-slate-900">
                  <h3 className="text-2xl font-bold mb-3">اطلب الديزل الآن</h3>
                  <a
                    href="https://wa.me/971555677114"
                    target="_blank"
                    className="bg-blue-600 px-6 py-3 rounded-full inline-block mt-4"
                  >
                    واتساب
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
