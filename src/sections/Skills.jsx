import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// React Icons
import { FaJava, FaReact } from "react-icons/fa";
import { DiNodejsSmall, DiLinux } from "react-icons/di";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiPython,
  SiDocker,
  SiMongodb,
  SiAngular,
  SiSpringboot,
  SiPhp,
  SiMysql,
  SiExpress,
  SiFlask,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiGit,
  SiGithub,
  SiPostman,
  SiJupyter,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";


export default function Skills() {
  const skills = [
    // Programming Languages
    { icon: <FaJava />, name: "Java" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiPhp />, name: "PHP" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiMysql />, name: "SQL" },
  
    // Frontend
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiAngular />, name: "Angular" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
  
    // Backend
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiFlask />, name: "Flask" },
  
    // Databases
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
  
    // Machine Learning / AI
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiKeras />, name: "Keras" },
    { icon: <SiScikitlearn />, name: "Scikit-learn" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiPandas />, name: "Pandas" },
  
    // Tools & Platforms
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiJupyter />, name: "Jupyter Notebook" },
  
    // OS
    { icon: <DiLinux />, name: "Linux" },
  ];
  

  const repeated = [...skills, ...skills];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);

  const x = useMotionValue(0);

  // IntersectionObserver
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      { threshold: [0.1] }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  // Scroll Direction Detection
  useEffect(() => {
    if (!active) return;

    const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);

    const onTouchStart = (e) => {
      touchY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (touchY.current == null) return;
      const delta = e.touches[0].clientY - touchY.current;
      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [active]);

  // Infinite Scroll Animation
  useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 80;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      let next = x.get() + SPEED * dir * dt;
      const loop = trackRef.current?.scrollWidth / 2 || 0;

      if (loop > 0) {
        if (next <= -loop) next += loop;
        if (next >= 0) next -= loop;
      }

      x.set(next);
      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [dir]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 w-full flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full 
          bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] 
          opacity-20 blur-[120px] animate-pulse" />

        <div className="absolute bottom-10 right-0 w-[300px] h-[300px] rounded-full 
          bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] 
          opacity-20 blur-[120px] animate-pulse delay-500" />
      </div>

      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent 
        bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        My Skills
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="mt-2 mb-10 text-white/90 text-sm sm:text-base lg:text-lg z-10 text-center whitespace-nowrap"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Modern Applications • Modern Technologies
      </motion.p>

      {/* Infinite Scroll */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex gap-10 text-6xl text-[#1cd8d2]"
          style={{ x, whiteSpace: "nowrap", willChange: "transform" }}
        >
          {repeated.map((s, i) => (
            <div
              key={`skill-${s.name}-${i}`}
              className="flex flex-col items-center gap-2 min-w-[120px]"
              aria-label={s.name}
              title={s.name}
            >
              <span className="flex items-center justify-center w-20 h-20 text-5xl hover:scale-110 transition-transform duration-300">
                {s.icon}
              </span>
              <p className="text-sm">{s.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
