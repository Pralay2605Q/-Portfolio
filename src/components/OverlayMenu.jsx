import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useMemo } from "react";

export default function OverlayMenu({ isOpen, onClose }) {
  const { isMobile, origin } = useMemo(() => {
    const mobile = typeof window !== "undefined" && window.innerWidth <= 1024;
    return {
      isMobile: mobile,
      origin: mobile ? "95% 8%" : "50% 8%"
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{
             backgroundColor: "rgba(0,0,0,0.95)"
          }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          {/* Menu List */}
          <ul className="space-y-8 text-center">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Testimonials",
              "Contact",
            ].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 10 }}
                transition={{
                  delay: 0.15 + index * 0.08,
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="text-4xl text-white font-semibold hover:text-pink-400 transition-colors duration-300"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
