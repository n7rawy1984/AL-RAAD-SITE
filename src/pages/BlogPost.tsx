import { useParams, Link } from "react-router-dom";
import { posts } from "../data/blogData";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaArrowRight, FaClock } from "react-icons/fa";
import { useState, useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [slug]);

  if (!post) {
    return (
      <div className="p-40 text-center text-primary-dark font-bold">
        المقال غير موجود
      </div>
    );
  }

  const imageSrc = imgError ? "/images/default.webp" : `/images/${slug}.jpg`;

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Helmet>
        <title>{post.title} | الرعد الثاقب</title>
        <meta
          name="description"
          content={post.metaDescription || post.excerpt}
        />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={post.metaDescription || post.excerpt}
        />
      </Helmet>

      <div className="pt-24 pb-48 bg-gradient-to-br from-primary-dark via-[#1e293b] to-primary-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center text-gold hover:text-white transition mb-8 group"
          >
            <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition" />
            العودة للمدونة
          </Link>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-6 text-slate-400">
            <span className="flex items-center gap-2">
              <FaClock className="text-gold" /> {post.date}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            <span className="text-gold font-bold">
              {post.category === "tip" ? "نصيحة تزويد" : "أخبار القطاع"}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-32 pb-20 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-border">
          <div className="w-full h-[300px] md:h-[500px]">
            <img
              src={imageSrc}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              onError={() => {
                if (!imgError) setImgError(true);
              }}
            />
          </div>

          <div className="p-8 md:p-16">
            <div
              className="prose prose-lg md:prose-xl max-w-none prose-slate prose-headings:text-primary-dark prose-headings:font-black prose-p:leading-[1.8] prose-strong:text-accent-dark"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />

            <div className="mt-16 bg-primary-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent/20 to-transparent"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-right">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gold">
                    جاهز لتزويد منشأتك بالديزل؟
                  </h3>
                  <p className="text-slate-300">
                    أفضل جودة ديزل في الإمارات تصلك أينما كنت.
                  </p>
                </div>

                <a
                  href="https://wa.me/971555677114"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gold hover:bg-white text-primary-dark px-10 py-4 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-xl flex items-center gap-3"
                >
                  <FaWhatsapp className="text-2xl" />
                  اطلب الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
