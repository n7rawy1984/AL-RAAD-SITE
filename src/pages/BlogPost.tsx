import { useParams } from "react-router-dom";

const posts: any = {
  "diesel-supply-uae": {
    title: "توريد الديزل في الإمارات: كل ما تحتاج معرفته",
    content: `
    توريد الديزل في الإمارات يعد من أهم الخدمات للمشاريع والمصانع وشركات النقل.

    تعتمد الشركات على مورد موثوق لضمان استمرارية العمل بدون توقف.

    أهم المميزات:
    - سرعة التوصيل
    - جودة الديزل (10 PPM)
    - أسعار تنافسية

    اختيار المورد المناسب يساعدك في تقليل التكاليف وزيادة الكفاءة.
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams();

  const post = posts[slug as string];

  if (!post) return <div className="p-10">Not Found</div>;

  return (
    <div className="section-container max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

      <p className="text-lg leading-relaxed whitespace-pre-line">
        {post.content}
      </p>
    </div>
  );
};

export default BlogPost;
