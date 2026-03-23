import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/971555677114"
      target="_blank"
      rel="noopener noreferrer"
      /* التعديلات الأساسية:
         1. الحجم: تم تصغيره في الموبايل (w-12 h-12) والحفاظ على حجمه في الشاشات الكبيرة (md:w-16 md:h-16).
         2. اللون: تم استبدال الأخضر باللون البرتقالي/الذهبي الخاص بالبراند (bg-[hsl(var(--accent))]) لتوحيد الهوية.
         3. الظل: إضافة ظل برتقالي خفيف (shadow-[0_0_15px_rgba(hsl(var(--accent)),0.3)]) ليعطي لمسة جمالية.
      */
      className="fixed bottom-6 right-6 z-[999] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 group
                 w-12 h-12 md:w-16 md:h-16 
                 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90
                 shadow-[0_0_15px_rgba(hsl(var(--accent)),0.3)]"
      aria-label="Contact on WhatsApp"
    >
      {/* أيقونة الواتساب - تم تغيير لونها للأبيض لتباين ممتاز مع الخلفية البرتقالية */}
      <MessageCircle className="w-7 h-7 md:w-9 md:h-9 text-white transition-opacity group-hover:opacity-90" />

      {/* تأثير نبض برتقالي لجذب الانتباه بشكل أنيق */}
      <span className="absolute inset-0 rounded-full bg-[hsl(var(--accent))] animate-ping opacity-25 pointer-events-none"></span>
    </a>
  );
};

export default WhatsAppButton;
