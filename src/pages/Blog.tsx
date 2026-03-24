import { posts } from "../data/blogData";
import { Link } from "react-router-dom";
import BlogHero from "../components/BlogHero";

const Blog = () => {
  return (
    <div className="pt-16 bg-[#0f172a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-slate-50 min-h-screen" dir="rtl">
          <BlogHero
            title="المدونة"
            subtitle="كل ما تحتاج معرفته عن الديزل في الإمارات"
          />

          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  to={`/blog/${post.slug}`}
                  state={{ from: "blog" }}
                  onClick={() => window.scrollTo(0, 0)}
                  className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
                >
                  {/* ✅ صورة ثابتة تمنع الاهتزاز */}
                  <div className="h-[180px] bg-gray-200">
                    <img
                      src={`/images/${post.slug}.jpg`}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "/images/default.jpg";
                      }}
                    />
                  </div>

                  <div className="p-5">
                    <h2 className="font-bold text-lg mb-2 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
