import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground.jsx";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const socials = [
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/Pralay2605Q/", color: "hover:text-gray-300" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/pralay0256q/", color: "hover:text-blue-400" },
  { Icon: FaXTwitter, label: "X", href: "https://x.com/Pralay0265q/", color: "hover:text-sky-400" },
  { Icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/@DEADSHOT84VOW", color: "hover:text-red-500" },
  { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/pralay0256q/", color: "hover:text-pink-400" },
];

const glowVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.9 },
};

export default function Home() {
  useEffect(() => {
    if (document.querySelector('script[src*="spline-viewer"]')) return;
    
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.12.6/build/spline-viewer.js";
    script.onload = () => console.log('Spline viewer loaded successfully');
    script.onerror = () => console.warn('Failed to load Spline viewer');
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  

  const roles = useMemo(
    () => [
      "Full-Stack Developer",
      "Machine Learning Engineer",
      "Software Developer",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex(v => v + 1);
      else if (!deleting) setDeleting(true);
      else if (subIndex > 0) setSubIndex(v => v - 1);
      else {
        setDeleting(false);
        setIndex(v => (v + 1) % roles.length);
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <section id="home" className="w-full min-h-screen bg-black relative overflow-hidden" style={{ position: 'relative' }}>
      <ParticlesBackground />
      
      {/* Fix for Framer Motion positioning warning */}
      <div style={{ position: 'relative', width: '100%', height: '100%' }} />
      
      {/* 3D MODEL — Mobile/Tablet behind text */}
      <div className="lg:hidden absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 0.6, scale: 2.0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full h-full flex items-center pb-20 md:pb-12 justify-start pl-20 md:pl-48 md:justify-center"
        >
          <spline-viewer
            url="https://prod.spline.design/u5uTlfRQKYyprrP6/scene.splinecode"
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </motion.div>
      </div>

      <div className="relative z-10 min-h-screen">
      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:grid lg:grid-cols-3 w-full min-h-screen items-center">

          {/* LEFT CONTENT */}
          <div className="col-span-2 flex flex-col justify-center items-start px-8 xl:px-16 relative z-20">
            <div className="max-w-2xl">

              {/* ROLE */}
              <motion.div
                className="mb-3 xl:mb-4 text-lg xl:text-5xl font-semibold text-cyan-400 min-h-[1.2em]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {roles[index].substring(0, subIndex)}
                <span className="inline-block w-0.5 h-[1em] bg-cyan-400 ml-1 animate-pulse align-middle" />
              </motion.div>

              {/* NAME */}
              <motion.h1
                className="text-3xl xl:text-5xl font-bold mb-4 xl:mb-6 leading-tight"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] mb-1">
                  Hello, I'm
                </span>
                <span className="block text-white">
                  Pralay Krishna Pramanik
                </span>
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                className="text-base xl:text-xl text-gray-300 mb-6 xl:mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                I turn complex ideas into seamless, high-impact web experiences —
                building modern, scalable, and lightning-fast applications.
              </motion.p>

              {/* BUTTONS */}
              <div className="flex gap-4 xl:gap-5 mb-6 xl:mb-8 flex-wrap">
                <motion.a
                  href="#projects"
                  className="px-6 py-3 xl:px-8 xl:py-4 rounded-full text-sm xl:text-base font-semibold text-white
                            bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
                            shadow-lg hover:scale-105 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Work
                </motion.a>

                <motion.a
                  href="/1.2 Full Stack & AIML Pralay Krishna Pramanik Resume.pdf"
                  download
                  className="px-6 py-3 xl:px-8 xl:py-4 rounded-full text-sm xl:text-base font-semibold
                            bg-white text-black shadow-lg hover:bg-gray-100 hover:scale-105 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resume
                </motion.a>
              </div>

              {/* SOCIALS */}
              <div className="flex gap-4 xl:gap-6 text-xl xl:text-4xl">
                {socials
                  .filter(s => s.href?.startsWith("http"))
                  .map(({ Icon, label, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-gray-400 hover:text-white p-2 rounded-full"
                      variants={glowVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Icon />
                    </motion.a>
                  ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - 3D MODEL */}
          <div className="flex items-center justify-start relative -ml-40" style={{ transform: 'scale(1.4)' }}>
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1.2 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="w-full h-screen max-w-none"
            >
              <spline-viewer
                url="https://prod.spline.design/u5uTlfRQKYyprrP6/scene.splinecode"
                loading="lazy"
                style={{
                  width: "80%",
                  height: "100%",
                  minWidth: "400px",
                  minHeight: "400px"
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* MOBILE/TABLET LAYOUT */}
        <div className="lg:hidden max-w-7xl mx-auto min-h-screen px-4 sm:px-6">
          <div className="flex flex-col justify-center text-left pt-16 md:pt-14 pb-8 relative z-20">
            <div className="max-w-xl sm:max-w-2xl">

              {/* ROLE */}
              <motion.div
                className="mb-5 text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl
                          font-semibold text-cyan-400 min-h-[3em]
                          leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="inline">
                  {roles[index].substring(0, subIndex)}
                </span>
                <span className="inline-block w-0.5 h-[1em] bg-cyan-400 ml-1 animate-pulse align-baseline" />
              </motion.div>

              {/* NAME */}  
              <motion.h1
                className="text-3xl sm:text-5xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] mb-1">
                  Hello, I'm
                </span>
                <span className="block text-white">
                  Pralay Krishna Pramanik
                </span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-xl text-gray-300 mb-8 max-w-lg md:max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                I turn complex ideas into seamless, high-impact web experiences — building modern, scalable, and lightning-fast applications.
              </motion.p>

              <div className="flex flex-row gap-3 md:gap-4 justify-start mb-8 flex-wrap">
                <a
                  href="#projects"
                  className="px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium text-white
                             bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
                             shadow-lg hover:scale-105 transition text-center whitespace-nowrap"
                >
                  View Work
                </a>

                <a
                  href="/1.2 Full Stack & AIML Pralay Krishna Pramanik Resume.pdf"
                  download
                  className="px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium
                             bg-white text-black shadow-lg hover:bg-gray-200 hover:scale-105 transition text-center whitespace-nowrap"
                >
                  Resume
                </a>
              </div>

              <div className="flex gap-4 text-2xl justify-start">
                {socials.filter(social => social.href && social.href.startsWith('http')).map(({ Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-gray-300 p-2"
                    variants={glowVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}