import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "../hooks/useLenis";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { scrollTo } = useLenis();

  useEffect(() => {
    // Scroll immediately to top (immediate: true prevents scrolling transition delay)
    scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
