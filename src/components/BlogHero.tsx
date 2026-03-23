import React from "react";

const BlogHero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="relative h-[450px] w-full flex items-center justify-center overflow-hidden">
      {/* تأكد من مسار الصورة واسمها المظبوط في assets */}
      <img
        src="/src/assets/your-main-bg.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="الرعد الثاقب"
      />

      <div className="absolute inset-0 bg-slate-900/60 shadow-inner"></div>

      <div className="relative z-10 text-center px-6 mt-10">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl tracking-tight">
          {title}
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-lg leading-relaxed font-medium">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

// 🚨 ده السطر اللي ناقص ومسبب المشكلة 🚨
export default BlogHero;
