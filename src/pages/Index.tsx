import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SectorsSection from "@/components/SectorsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.alraad-althaqeb.com/",
      name: "ALRAAD ALTHAQEB Diesel Fuel Trading L.L.C",
      alternateName: "شركة الرعد الثاقب لتجارة الوقود",
      description:
        "توريد ديزل 10 PPM في دبي وجميع الإمارات مع توصيل سريع 24/7 للمواقع والمصانع والمولدات وأساطيل النقل",
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
      serviceType: [
        "Diesel Supply",
        "Diesel Delivery",
        "10 PPM Diesel Supply UAE",
        "Fuel Delivery Dubai",
      ],
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
    <>
      <Helmet>
        <title>
          توريد الديزل في دبي والإمارات | ديزل 10 PPM وتوصيل سريع 24/7
        </title>
        <meta
          name="description"
          content="الرعد الثاقب لتجارة الديزل توفر توريد ديزل 10 PPM في دبي وجميع الإمارات مع توصيل سريع 24/7 للمواقع، المولدات، المصانع، وأساطيل النقل."
        />
        <link rel="canonical" href="https://www.alraad-althaqeb.com/" />
        <meta
          property="og:title"
          content="توريد الديزل في دبي والإمارات | ديزل 10 PPM وتوصيل سريع 24/7"
        />
        <meta
          property="og:description"
          content="توريد ديزل 10 PPM عالي الجودة في جميع أنحاء الإمارات مع خدمة سريعة 24/7 للمشاريع والمصانع والمولدات وأساطيل النقل."
        />
        <meta property="og:url" content="https://www.alraad-althaqeb.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
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
    </>
  );
};

export default Index;
