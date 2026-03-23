import { Link } from "react-router-dom";

const blogPosts = [
  {
    slug: "diesel-supply-uae",
    title: "توريد الديزل في الإمارات: كل ما تحتاج معرفته",
    excerpt:
      "تعرف على خدمات توريد الديزل في الإمارات وكيف تختار المورد المناسب.",
  },
];

const Blog = () => {
  return (
    <div className="section-container">
      <h1 className="text-3xl font-bold mb-10 text-center">المدونة</h1>

      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block p-6 bg-card rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-muted-foreground">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
