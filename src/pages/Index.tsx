import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SectorsSection from "@/components/SectorsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.alraad-althaqeb.com/",
      name: "شركة الرعد الثاقب لتجارة الوقود",
      alternateName: "ALRAAD ALTHAQEB Diesel Fuel Trading L.L.C",
      description:
        "توريد الديزل 10 PPM عالي الجودة للمشاريع والمصانع في جميع الإمارات",
      url: "https://www.alraad-althaqeb.com/",
      telephone: "+971555677114",
      email: "mint771144@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Dubai Industrial City - Saih Shuaib 3 - Office No. P2A-G01",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      serviceType: ["توريد ديزل", "Diesel Supply UAE", "Fuel Delivery Dubai"],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <LanguageProvider>
      <Helmet>
        <title>توريد الديزل في الإمارات | شركة الرعد الثاقب</title>
        <meta
          name="description"
          content="شركة الرعد الثاقب تقدم خدمات توريد الديزل 10 PPM لجميع المشاريع والمصانع في الإمارات مع توصيل سريع وأسعار تنافسية."
        />
        <link rel="canonical" href="https://www.alraad-althaqeb.com/" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <TrustBar />
          <AboutSection />
          <ServicesSection />
          <SectorsSection />
          <WhyChooseSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;
