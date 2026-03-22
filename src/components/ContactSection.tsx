import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    if (!formData.name || !formData.phone) {
      toast({
        title: t("بيانات ناقصة", "Missing Fields"),
        description: t(
          "الرجاء إدخال الاسم ورقم الهاتف",
          "Please enter name and phone number",
        ),
      });
      return;
    }

    setLoading(true);

    const templateParams = {
      name: formData.name,
      company: formData.company || "Not provided",
      phone: formData.phone,
      email: formData.email || "Not provided",
      quantity: formData.quantity || "Not provided",
      message: formData.message || "Not provided",
    };

    try {
      await emailjs.send(
        "service_d8bj314",
        "template_iugigmp",
        templateParams,
        "9oDf7K1CgEjHTTxZS",
      );

      const whatsappMessage = `${t("طلب عرض سعر جديد", "New Quote Request")}

${t("الاسم", "Name")}: ${formData.name}
${t("الشركة", "Company")}: ${formData.company || t("غير متوفر", "Not provided")}
${t("الهاتف", "Phone")}: ${formData.phone}
${t("البريد الإلكتروني", "Email")}: ${formData.email || t("غير متوفر", "Not provided")}
${t("الكمية المطلوبة", "Required Quantity")}: ${formData.quantity || t("غير متوفر", "Not provided")}

${t("الرسالة", "Message")}:
${formData.message || t("لا توجد رسالة", "No message")}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);

      window.open(
        `https://wa.me/971555677114?text=${encodedMessage}`,
        "_blank",
      );

      toast({
        title: t("تم الإرسال بنجاح", "Sent Successfully"),
        description: t("سيتم التواصل معكم قريباً", "We will contact you soon"),
      });

      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        quantity: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast({
        title: t("حدث خطأ", "Error"),
        description: t("فشل إرسال الرسالة", "Failed to send message"),
      });
    }

    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-container bg-muted">
      {/* 🔥 Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="section-title text-center">
          {t(
            "اطلب توريد ديزل في الإمارات الآن بأسعار تنافسية",
            "Order Diesel Supply in UAE Now at Competitive Prices",
          )}
        </h2>

        <p className="section-subtitle mx-auto">
          {t(
            "تواصل معنا الآن للحصول على عرض سعر سريع وتوصيل فوري لموقعك",
            "Contact us now for a fast quote and immediate delivery to your location",
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8 animate-slide-in-left">
          {/* 🔥 زر واتساب مباشر */}
          <a
            href="https://wa.me/971555677114"
            target="_blank"
            className="block text-center bg-green-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-green-400 transition"
          >
            {t("تواصل واتساب الآن", "Chat on WhatsApp Now")}
          </a>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              {t("معلومات الاتصال", "Contact Information")}
            </h3>

            <p className="text-muted-foreground mb-8">
              {t(
                "نحن جاهزون لخدمتكم على مدار الساعة",
                "We are available to serve you anytime",
              )}
            </p>
          </div>

          <a
            href="tel:+971555677114"
            className="flex items-start gap-4 p-4 rounded-lg bg-card"
          >
            <Phone className="h-6 w-6 text-primary-dark" />
            <div>
              <h4 className="font-bold text-primary">{t("الهاتف", "Phone")}</h4>
              <p dir="ltr">+971 55 567 7114</p>
            </div>
          </a>

          <a
            href="mailto:alraad247@gmail.com"
            className="flex items-start gap-4 p-4 rounded-lg bg-card"
          >
            <Mail className="h-6 w-6 text-primary-dark" />
            <div>
              <h4 className="font-bold text-primary">
                {t("البريد الإلكتروني", "Email")}
              </h4>
              <p>alraad247@gmail.com</p>
            </div>
          </a>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-card">
            <MapPin className="h-6 w-6 text-primary-dark" />
            <div>
              <h4 className="font-bold text-primary">
                {t("العنوان", "Address")}
              </h4>
              <p>
                {t(
                  "أبو ظبي، منطقة المفرق الصناعية",
                  "Abu Dhabi, Mafraq Industrial Area",
                )}
              </p>
              <p>{t("الإمارات العربية المتحدة", "United Arab Emirates")}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="animate-slide-in-right">
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-xl p-8 shadow-lg space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("اسمك", "Your Name")}
                required
              />
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t("اسم الشركة", "Company Name")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+971 5X XXX XXXX"
                required
              />
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
              />
            </div>

            <Input
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder={t(
                "مثال: 5000 لتر شهرياً",
                "e.g., 5000 liters monthly",
              )}
            />

            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder={t(
                "اكتب تفاصيل طلبك...",
                "Write your request details...",
              )}
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" />
              {loading
                ? t("جاري الإرسال...", "Sending...")
                : t("اطلب عرض السعر الآن", "Get a Quote Now")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
