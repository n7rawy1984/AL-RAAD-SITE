import { posts } from "../data/blogData"; // ده اللي هيجيب كل المقالات اللي دمجناها
import { Link } from "react-router-dom";
import BlogHero from "../components/BlogHero";

const Blog = () => {
  return (
    <div className="bg-slate-50 min-h-screen" dir="rtl">
      {/* 🚨 استدعاء الـ Hero الجديد مع صورة الخلفية */}
      <BlogHero
        title="المدونة والنصائح"
        subtitle="كل ما تحتاج معرفته عن توريد الديزل في الإمارات، نصائح الصيانة، وأحدث الأسعار."
      />

      <div className="max-w-6xl mx-auto px-6 py-16 text-right">
        {/* ملاحظة: شلنا العناوين القديمة لأن الـ Hero بيعرضها بشكل أفخم 
            دلوقتي الـ Grid هتبدأ فوراً تحت الـ Hero
        */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden flex flex-col transform hover:-translate-y-2"
            >
              {/* لو عندك صورة مصغرة لكل كارت ممكن تضيفها هنا، بس حالياً هنكتفي بالتصميم الأنيق */}
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                    {post.date}
                  </span>
                </div>

                <h2 className="text-xl font-black mt-2 mb-4 text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                  {post.title}
                </h2>

                <p className="text-slate-600 leading-relaxed text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex justify-between items-center">
                <span className="font-bold text-sm">اقرأ المقال بالكامل</span>
                <span className="text-xl">←</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
