import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Briefcase, Calendar, TrendingUp, Code, Cpu, Database, Zap, Globe } from "lucide-react";

const experiences = [
  {
    role: "Software Developer – Automation & Data Analytics",
    company: "Zuxtra Network Pvt. Ltd.",
    duration: "Apr 2025 – Sep 2025",
    description: "Built automation systems, ML-driven recommendations, and analytics pipelines; improved operational efficiency by 40% and reduced data latency by 25%.",
    color: "from-blue-500 to-cyan-500",
    icon: TrendingUp,
  },
  {
    role: "Junior Developer",
    company: "Zuxtra Network Pvt. Ltd.",
    duration: "Apr 2025 – Sep 2025",
    description: "Developed responsive web interfaces; collaborated on agile teams; contributed to open-source projects and code reviews.",
    color: "from-teal-500 to-green-500",
    icon: Briefcase,
  },
  {
    role: "Data Analyst",
    company: "Zuxtra Network Pvt. Ltd.",
    duration: "Apr 2025 – Sep 2025",
    description: "Created interactive dashboards and reports; performed data mining and statistical analysis; automated reporting workflows.",
    color: "from-pink-500 to-rose-500",
    icon: TrendingUp,
  },
  {
    role: "AI/ML Engineer – Brain Hemorrhage Detection",
    company: "Kalyani Government Engineering College",
    duration: "Jan 2024 – May 2025",
    description: "Developed deep learning models (CNN, MobileNet, ResNet, VGG16) achieving 96% accuracy; built a Flask-based CT analysis app reducing diagnostic latency by 40%.",
    color: "from-emerald-500 to-teal-500",
    icon: Cpu,
  },
  {
    role: "Full Stack Developer",
    company: "Self Employed",
    duration: "Sep 2023 – Mar 2025",
    description: "Built scalable web applications using React and Node.js; implemented microservices architecture and improved system reliability by 45%.",
    color: "from-orange-500 to-red-500",
    icon: Globe,
  },
  {
    role: "Backend Developer",
    company: "Self Employed",
    duration: "Jan 2023 – Aug 2024",
    description: "Designed and deployed RESTful APIs; optimized database queries reducing response time by 60%; implemented caching strategies.",
    color: "from-indigo-500 to-blue-500",
    icon: Database,
  },
  {
    role: "Software Engineer",
    company: "Euphoria GenX",
    duration: "Jul 2022 – Jul 2023",
    description: "Developed donor management modules, analytics dashboards, and Spring Boot APIs; improved backend performance by 25% and system efficiency by 35%.",
    color: "from-purple-500 to-pink-500",
    icon: Code,
  },
  
  
  // {
  //   role: "DevOps Engineer",
  //   company: "Infrastructure Systems",
  //   duration: "Feb 2022 – May 2022",
  //   description: "Managed CI/CD pipelines; containerized applications using Docker; automated deployment processes with Kubernetes.",
  //   color: "from-yellow-500 to-amber-500",
  //   icon: Zap,
  // },
  
];

function ExperienceCard({ exp, isActive, progress }) {
  const Icon = exp.icon;
  
  const scale = useTransform(progress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(progress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 lg:pt-8 xl:pt-12"
      style={{ scale: smoothScale, opacity: smoothOpacity }}
    >
      <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-6xl w-full">
        <motion.div
          className="relative bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-2xl overflow-hidden"
          animate={isActive ? { y: 0 } : { y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5`} />
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
              <motion.div
                className={`p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br ${exp.color} shadow-xl self-start sm:self-auto`}
                animate={isActive ? { rotate: 0 } : { rotate: 120 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </motion.div>
              
              <div className="flex-1">
                <motion.h3 
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight mb-1 sm:mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {exp.role}
                </motion.h3>
              </div>
            </div>
            
            <motion.div 
              className="flex flex-col gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-gray-400">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                <p className="text-sm sm:text-base lg:text-lg font-medium">{exp.company}</p>
              </div>
              
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                <p className="text-xs sm:text-sm lg:text-base">{exp.duration}</p>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {exp.description}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      const newIndex = Math.min(
        Math.floor(v * experiences.length),
        experiences.length - 1
      );
      setActiveIndex(newIndex);
    });
    
    return () => unsubscribe();
  }, [smoothProgress]);

  const progressBarWidth = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section 
      id="experience" 
      className="relative bg-gradient-to-b from-black via-gray-950 to-black text-white"
      ref={containerRef}
      style={{ position: 'relative' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div style={{ height: `${experiences.length * 100}vh` }} className="relative">
        <div className="sticky top-0 h-screen flex flex-col">
          <div className="pt-6 sm:pt-10 lg:pt-14 xl:pt-18 pb-2 sm:pb-4 lg:pb-4 xl:pb-6 px-4 sm:px-6 lg:px-8 xl:px-12 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
                Experience
              </h2>
              <p className="text-center text-gray-500 text-xs sm:text-sm lg:text-base xl:text-lg">My Professional Journey</p>
            </motion.div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 xl:px-12 pb-4 sm:pb-6 lg:pb-10 xl:pb-12 flex-shrink-0">
            <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-1 sm:mb-2 lg:mb-0 xl:mb-1">
                <span className="text-xs lg:text-sm xl:text-base text-gray-500">
                  {activeIndex + 1} / {experiences.length}
                </span>
                <span className="text-xs lg:text-sm xl:text-base text-gray-500 hidden sm:block">
                  {experiences[activeIndex]?.duration}
                </span>
              </div>
              <div className="relative h-1 lg:h-1.5 xl:h-2 bg-gray-800/50 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-1 lg:h-1.5 xl:h-2 rounded-full origin-left"
                  style={{ 
                    width: progressBarWidth,
                    background: "linear-gradient(to right, #3b82f6, #a855f7, #10b981, #f97316)"
                  }}
                />
              </div>
              
              <div className="flex justify-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 mt-3 sm:mt-4 lg:mt-6 xl:mt-8">
                {experiences.map((_, idx) => (
                  <motion.div
                    key={`experience-${idx}`}
                    className={`h-1.5 sm:h-2 lg:h-2.5 xl:h-3 rounded-full transition-all duration-300 ${
                      idx === activeIndex 
                        ? 'w-6 sm:w-8 lg:w-10 xl:w-12 bg-white' 
                        : idx < activeIndex 
                        ? 'w-1.5 sm:w-2 lg:w-2.5 xl:w-3 bg-gray-600' 
                        : 'w-1.5 sm:w-2 lg:w-2.5 xl:w-3 bg-gray-800'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 relative min-h-0">
            {experiences.map((exp, idx) => {
              const cardStart = idx / experiences.length;
              const cardEnd = (idx + 1) / experiences.length;
              const cardProgress = useTransform(
                smoothProgress,
                [cardStart, cardEnd],
                [0, 1]
              );

              return (
                <ExperienceCard
                  key={`exp-${exp.role}-${idx}`}
                  exp={exp}
                  isActive={activeIndex === idx}
                  progress={cardProgress}
                />
              );
            })}
          </div>

          <div className="pb-6 sm:pb-8 lg:pb-10 xl:pb-12 flex-shrink-0">
            <motion.div
              className="text-center text-gray-500 text-xs sm:text-sm lg:text-base xl:text-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p>Scroll to explore</p>
              <motion.div
                className="w-0.5 sm:w-1 lg:w-1.5 xl:w-2 h-6 sm:h-8 lg:h-10 xl:h-12 mx-auto mt-1 sm:mt-2 lg:mt-3 xl:mt-4 bg-gradient-to-b from-gray-500 to-transparent rounded-full"
                animate={{ scaleY: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}