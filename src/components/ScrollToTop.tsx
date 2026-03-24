import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // قم بالتمرير للأعلى في كل الحالات
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // استخدم instant بدل smooth عشان يكون فوري
    });

    // تأكد إضافي باستخدام requestAnimationFrame
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;
