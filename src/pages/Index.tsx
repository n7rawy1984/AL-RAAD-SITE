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

const Index = () => {
  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://lovable.dev/projects/c52abae6-e366-4827-9f3e-3293a80fab01",
      "name": "ALRAAD ALTHAQEB Diesel Fuel Trading L.L.C",
      "alternateName": "الرعد الثاقب لتجارة الديزل",
      "description": "Premium 10 PPM diesel fuel supply in UAE for construction, transportation, and industrial sectors",
      "url": "https://lovable.dev/projects/c52abae6-e366-4827-9f3e-3293a80fab01",
      "telephone": "+971555677114",
      "email": "MINT771144@GMAIL.COM",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dubai Industrial City - Saih Shuaib 3 - Office No. P2A-G01",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.9989",
        "longitude": "55.3621"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "priceRange": "$$",
      "areaServed": {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      "serviceType": ["Diesel Fuel Supply", "Fleet Management", "Industrial Fuel Delivery"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Diesel Supply Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Direct Site Delivery",
              "description": "Direct diesel delivery to construction sites and projects"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Company Tank Filling",
              "description": "Specialized service for filling fuel tanks for factories and companies"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fleet Supply",
              "description": "Customized solutions for transportation companies and large fleets"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      }
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
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
