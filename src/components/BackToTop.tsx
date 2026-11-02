"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

/* Kitna scroll karne ke baad arrow dikhe (pixels) */
const SHOW_AFTER = 300;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);

    onScroll(); // page refresh par bhi sahi state
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          initial={{ opacity: 0, y: 24, scale: 0.6 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.6 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          whileHover={reduceMotion ? {} : { y: -4, scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          className="group fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#174B3A] text-white shadow-lg shadow-black/25 transition-colors duration-300 hover:bg-[#438B79] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B84B] focus-visible:ring-offset-2 sm:bottom-8 sm:right-8"
        >
          <ArrowUp
            size={22}
            strokeWidth={2.4}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
