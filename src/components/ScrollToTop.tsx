import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.5;
      const scrolled = window.scrollY;
      
      setIsVisible(scrolled > threshold);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = (scrolled / docHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 20;
  const stroke = 2.5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, translateY: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          id="scroll-to-top-button"
          className="fixed bottom-6 right-6 z-40 size-12 rounded-full glass border border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg className="absolute inset-0 size-full -rotate-90">
            <circle
              className="text-border/30"
              stroke="currentColor"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius + stroke}
              cy={radius + stroke}
            />
            <motion.circle
              className="text-primary transition-all duration-100 ease-out"
              stroke="currentColor"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference + " " + circumference}
              style={{ strokeDashoffset }}
              r={normalizedRadius}
              cx={radius + stroke}
              cy={radius + stroke}
              strokeLinecap="round"
            />
          </svg>

          <ChevronUp className="size-5 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
