import { Phone } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/971555677114"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 transition-all duration-300"
    >
      <Phone className="w-6 h-6 text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
