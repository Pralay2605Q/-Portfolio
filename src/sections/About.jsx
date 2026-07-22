import { motion } from "framer-motion";
import React from "react";
import p from "../assets/p3.png";

export default function About() {
  const stats = [
    { label: "Experience", value: "3+ Year" },
    { label: "Speciality", value: "Full-Stack • ML • Software Dev" },
    { label: "Focus", value: "Performance • Web Apps • AI" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Modern Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500 via-purple-500 via-green-500 to-cyan-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-violet-500 via-blue-500 via-green-400 to-indigo-500 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-gradient-to-r from-purple-500 via-pink-500 via-green-600 to-blue-500 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        {/* Enhanced Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 lg:px-16 py-20 flex flex-col gap-16">

        {/* Profile + Main Intro */}
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Profile Image */}
          <motion.div 
            className="relative flex items-center justify-start flex-shrink-0 lg:w-1/4 lg:-ml-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ perspective: '1500px' }}
          >
            {/* Enhanced Animated Blob Background */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translate(20px, 30px)' }}>
              <svg className="absolute w-[400px] h-[500px] opacity-30" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                    <stop offset="25%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                    <stop offset="75%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  </linearGradient>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
                  </filter>
                </defs>
                <path fill="url(#blob-gradient)" filter="url(#goo)">
                  <animate 
                    attributeName="d"
                    dur="18s"
                    repeatCount="indefinite"
                    values="
                      M405,295.5Q408,341,371.5,369.5Q335,398,292.5,441.5Q250,485,208,440Q166,395,127,369.5Q88,344,68,297Q48,250,53.5,195Q59,140,107,112.5Q155,85,202.5,64Q250,43,296.5,65.5Q343,88,386,117.5Q429,147,415.5,198.5Q402,250,405,295.5Z;
                      M432,304Q437,358,400.5,402.5Q364,447,307,442.5Q250,438,203.5,424Q157,410,103,388Q49,366,37.5,308Q26,250,65,208Q104,166,132.5,130.5Q161,95,205.5,76Q250,57,288,87.5Q326,118,359,143Q392,168,409.5,209Q427,250,432,304Z;
                      M405,295.5Q408,341,371.5,369.5Q335,398,292.5,441.5Q250,485,208,440Q166,395,127,369.5Q88,344,68,297Q48,250,53.5,195Q59,140,107,112.5Q155,85,202.5,64Q250,43,296.5,65.5Q343,88,386,117.5Q429,147,415.5,198.5Q402,250,405,295.5Z;
                    "
                  />
                </path>
              </svg>
              
              {/* Second enhanced blob layer */}
              <svg className="absolute w-[350px] h-[650px] opacity-25" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blob-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
                    <stop offset="33%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
                    <stop offset="66%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path fill="url(#blob-gradient-2)" filter="url(#goo)">
                  <animate 
                    attributeName="d"
                    dur="22s"
                    repeatCount="indefinite"
                    values="
                      M432,304Q437,358,400.5,402.5Q364,447,307,442.5Q250,438,203.5,424Q157,410,103,388Q49,366,37.5,308Q26,250,65,208Q104,166,132.5,130.5Q161,95,205.5,76Q250,57,288,87.5Q326,118,359,143Q392,168,409.5,209Q427,250,432,304Z;
                      M405,295.5Q408,341,371.5,369.5Q335,398,292.5,441.5Q250,485,208,440Q166,395,127,369.5Q88,344,68,297Q48,250,53.5,195Q59,140,107,112.5Q155,85,202.5,64Q250,43,296.5,65.5Q343,88,386,117.5Q429,147,415.5,198.5Q402,250,405,295.5Z;
                      M432,304Q437,358,400.5,402.5Q364,447,307,442.5Q250,438,203.5,424Q157,410,103,388Q49,366,37.5,308Q26,250,65,208Q104,166,132.5,130.5Q161,95,205.5,76Q250,57,288,87.5Q326,118,359,143Q392,168,409.5,209Q427,250,432,304Z;
                    "
                  />
                </path>
              </svg>
            </div>
            {/* Twinkling stars - scattered around */}
            {[
              { top: '-2.5rem', left: '-2.5rem', size: 'w-1.5 h-1.5', delay: '0s' },
              { top: '-1.5rem', left: '4rem', size: 'w-1 h-1', delay: '0.5s' },
              { top: '1rem', right: '-3rem', size: 'w-2 h-2', delay: '1s' },
              { top: '5rem', left: '-3.5rem', size: 'w-1 h-1', delay: '1.5s' },
              { bottom: '-2rem', right: '-2rem', size: 'w-1.5 h-1.5', delay: '0.8s' },
              { bottom: '3rem', left: '-3rem', size: 'w-2 h-2', delay: '0.3s' },
              { top: '8rem', right: '5rem', size: 'w-1 h-1', delay: '1.2s' },
              { top: '-2rem', right: '2rem', size: 'w-1 h-1', delay: '0.6s' },
              { bottom: '6rem', right: '6rem', size: 'w-0.5 h-0.5', delay: '0.9s' },
              { top: '3rem', left: '6rem', size: 'w-0.5 h-0.5', delay: '1.1s' },
            ].map((star, i) => {
              const { size, delay, ...position } = star;
              return (
                <div
                  key={i}
                  className={`absolute ${size} bg-white rounded-full animate-twinkle`}
                  style={{ 
                    ...position,
                    animationDelay: delay,
                    filter: 'blur(0.3px)',
                    opacity: 0.8
                  }}
                ></div>
              );
            })}
            
            {/* Small circle dots */}
            {[
              { top: '1.5rem', left: '5rem' },
              { top: '6rem', right: '7rem' },
              { bottom: '5rem', left: '5.5rem' },
              { bottom: '1rem', right: '5rem' },
            ].map((dot, i) => (
              <div
                key={`dot-${i}`}
                className="absolute w-1 h-1 rounded-full border border-white/40"
                style={dot}
              ></div>
            ))}
            
            <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
              {/* Simple 3 Saturn rings - Behind */}
              <div className="absolute inset-0 animate-rotate-rings mt-24" style={{ zIndex: 1, transformStyle: 'preserve-3d' }}>
                {/* Outer ring */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border-[6px] border-[#f59e0b]/40"
                  style={{ boxShadow: '0 0 35px rgba(245, 158, 11, 0.4)' }}>
                  {/* Outer planet - Mars-like */}
                  <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full animate-orbit-outer" 
                    style={{ 
                      marginLeft: '-8px', 
                      marginTop: '-8px',
                      background: 'radial-gradient(circle at 30% 30%, #ff6b35, #d63031, #74b9ff)',
                      boxShadow: '0 0 8px rgba(214, 48, 49, 0.6), inset -2px -2px 4px rgba(0,0,0,0.3)'
                    }}></div>
                </div>
                
                {/* Middle ring */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border-[5px] border-[#06b6d4]/45"
                  style={{ boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)' }}>
                  {/* Middle planet - Earth-like */}
                  <div className="absolute left-1/2 top-1/2 w-3.5 h-3.5 rounded-full animate-orbit-middle" 
                    style={{ 
                      marginLeft: '-7px', 
                      marginTop: '-7px',
                      background: 'radial-gradient(circle at 30% 30%, #74b9ff, #0984e3, #00b894)',
                      boxShadow: '0 0 6px rgba(9, 132, 227, 0.6), inset -1.5px -1.5px 3px rgba(0,0,0,0.3)'
                    }}></div>
                </div>
                
                {/* Inner ring */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-[5px] border-[#ec4899]/50"
                  style={{ boxShadow: '0 0 25px rgba(236, 72, 153, 0.5)' }}>
                  {/* Inner planet - Venus-like */}
                  <div className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full animate-orbit-inner" 
                    style={{ 
                      marginLeft: '-6px', 
                      marginTop: '-6px',
                      background: 'radial-gradient(circle at 30% 30%, #fdcb6e, #e17055, #fd79a8)',
                      boxShadow: '0 0 5px rgba(253, 203, 110, 0.6), inset -1px -1px 2px rgba(0,0,0,0.3)'
                    }}></div>
                </div>
              </div>

              {/* Profile Image */}
              <motion.div
                className="relative w-[190px] h-[360px] md:w-[240px] md:h-[440px] rounded-3xl overflow-hidden shadow-2xl -mt-8 ml-4"
                style={{ zIndex: 5 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <img 
                  src={p} 
                  alt="Pralay Krishna Pramanik" 
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    filter: 'brightness(1.1) contrast(1.1) saturate(1.2)'
                  }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </motion.div>
              
              {/* Simple 3 Saturn rings - Front (half visible) */}
              <div className="absolute inset-0 animate-rotate-rings pointer-events-none mt-24" style={{ zIndex: 10, transformStyle: 'preserve-3d' }}>
                {/* Inner ring front */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-[5px] border-[#ec4899]/50"
                  style={{
                    borderBottomColor: 'transparent',
                    borderLeftColor: 'transparent',
                    boxShadow: '0 0 25px rgba(236, 72, 153, 0.5)'
                  }}></div>
                
                {/* Middle ring front */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border-[5px] border-[#06b6d4]/45"
                  style={{
                    borderBottomColor: 'transparent',
                    borderLeftColor: 'transparent',
                    boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)'
                  }}></div>
                
                {/* Outer ring front */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border-[6px] border-[#f59e0b]/40"
                  style={{
                    borderBottomColor: 'transparent',
                    borderLeftColor: 'transparent',
                    boxShadow: '0 0 35px rgba(245, 158, 11, 0.4)'
                  }}></div>
              </div>
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <div className="flex-1 lg:w-3/4 flex flex-col justify-center text-center lg:text-left space-y-6 lg:pl-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight 
              bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]
              drop-shadow-[0_0_30px_rgba(28,216,210,0.3)]">
                Pralay Krishna Pramanik
              </h2>
            </motion.div>

            <motion.p 
              className="text-xl sm:text-2xl text-white/95 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="text-[#1cd8d2]">Full Stack Developer</span> • 
              <span className="text-[#00bf8f]"> Software Developer</span> • 
              <span className="text-[#1cd8d2]"> ML Developer</span>
            </motion.p>

            <motion.p 
              className="text-gray-300 leading-relaxed text-base sm:text-lg max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Full Stack Developer and AI/ML Engineer with expertise in building 
              high-performance web applications, scalable backend systems, and 
              AI-powered automation. Skilled in <span className="text-[#1cd8d2] font-semibold">Node.js, React, PHP, Python, 
              Java, and MySQL</span> — delivering efficient, modern, and impactful 
              solutions through strong problem-solving and engineering workflow.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {stats.map((item, i) => (
                <motion.div
                  key={`stat-${item.label}`}
                  className="group relative rounded-2xl border border-[#1cd8d2]/20 bg-gradient-to-br from-[#1cd8d2]/10 to-[#302b63]/10 
                  px-5 py-4 text-center backdrop-blur-md hover:border-[#1cd8d2]/40 transition-all duration-300
                  hover:shadow-[0_0_30px_rgba(28,216,210,0.3)] cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1cd8d2]/0 to-[#00bf8f]/0 group-hover:from-[#1cd8d2]/20 group-hover:to-[#00bf8f]/20 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="text-base text-[#1cd8d2] font-semibold uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-white">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#projects"
                className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] 
                text-black font-bold px-8 py-4 overflow-hidden transition-all duration-300
                hover:shadow-[0_0_30px_rgba(28,216,210,0.5)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center justify-center rounded-xl border-2 border-[#1cd8d2]/50 
                bg-[#1cd8d2]/10 text-white font-bold px-8 py-4 backdrop-blur-md
                hover:bg-[#1cd8d2]/20 hover:border-[#1cd8d2] transition-all duration-300
                hover:shadow-[0_0_20px_rgba(28,216,210,0.4)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          className="relative rounded-3xl border border-[#1cd8d2]/20 bg-gradient-to-br from-[#1cd8d2]/5 to-[#302b63]/5 
          p-8 md:p-12 backdrop-blur-md overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#1cd8d2]/20 to-transparent rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#00bf8f]/20 to-transparent rounded-tl-full"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] mb-6 inline-block">
              About Me
            </h3>

            <div className="space-y-4 text-base md:text-lg">
              <p className="text-gray-300 leading-relaxed">
                I hold an <span className="text-[#1cd8d2] font-semibold">M.Tech in Computer Science & Engineering</span> and have 
                <span className="text-[#00bf8f] font-semibold"> 1+ year of real-world industry experience</span> working on production projects. 
                I focus on performance-driven development, scalable architecture, and user-centric software design.
              </p>

              <p className="text-gray-400 leading-relaxed">
                I am always eager to explore new technologies and continuously improve my skills
                while contributing effectively to every project I work on. My passion lies in creating
                solutions that make a real impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes rotate-rings {
          0% {
            transform: rotateX(75deg) rotateY(15deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(75deg) rotateY(15deg) rotateZ(360deg);
          }
        }

        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.3); 
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-40px, 30px) scale(1.15);
          }
          66% {
            transform: translate(25px, -25px) scale(0.85);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, 30px) scale(1.05);
          }
        }

        .animate-rotate-rings {
          animation: rotate-rings 15s linear infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 30s ease-in-out infinite;
        }

        .animate-orbit-outer {
          animation: orbit-outer 20s linear infinite;
        }

        .animate-orbit-middle {
          animation: orbit-middle 15s linear infinite;
        }

        .animate-orbit-inner {
          animation: orbit-inner 10s linear infinite;
        }

        @keyframes orbit-outer {
          0% {
            transform: rotate(0deg) translateX(210px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(210px) rotate(-360deg);
          }
        }

        @keyframes orbit-middle {
          0% {
            transform: rotate(0deg) translateX(180px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(180px) rotate(-360deg);
          }
        }

        @keyframes orbit-inner {
          0% {
            transform: rotate(0deg) translateX(150px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(150px) rotate(-360deg);
          }
        }

        /* 3D Perspective Grid */
        .perspective-grid {
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .grid-lines {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(28, 216, 210, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28, 216, 210, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: rotateX(60deg) translateZ(-500px);
          animation: grid-flow 20s linear infinite;
        }

        @keyframes grid-flow {
          0% {
            transform: rotateX(60deg) translateZ(-500px) translateY(0);
          }
          100% {
            transform: rotateX(60deg) translateZ(-500px) translateY(60px);
          }
        }
      `}</style>
    </section>
  );
}
