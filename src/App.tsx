import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";

const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Index = lazy(() => import("./pages/Index"));

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();

  const isBlogPage =
    location.pathname === "/blog" || location.pathname.startsWith("/blog/");

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Suspense
        fallback={
          <div className="text-center p-20 text-lg font-bold">
            جاري التحميل...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />

      {!isBlogPage && <FloatingWhatsApp />}
    </>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
