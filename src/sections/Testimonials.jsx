import { motion } from "framer-motion";

import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";

const testimonials = [
  {
    name: "Rahul Das",
    role: "Project Manager",
    review:
      "Pralay is highly skilled and reliable. His attention to detail and ability to solve complex problems make him a valuable asset to any development team.",
    image: m1,
  },
  {
    name: "Sneha Mukherjee",
    role: "UI/UX Designer at PixelWorks",
    review:
      "Working with Pralay was a great experience. He perfectly translates design concepts into smooth, responsive, and visually appealing interfaces.",
    image: w1,
  },
  {
    name: "Sukanya Saha",
    role: "Software Engineer",
    review: "A dedicated developer with a strong problem-solving mindset. Pralay's clean code and collaborative approach make teamwork effortless.",
    image: w2,
  },
  {
    name: "Rahul Verma",
    role: "ML Engineer",
    review: "Pralay has a strong understanding of Machine Learning concepts and applies them effectively to real-world problems. His ability to analyze data, build accurate models, and optimize performance makes him stand out as a dependable ML engineer.",
    image: m2,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-6 py-20 overflow-hidden"
    >
      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-5xl sm:text-6xl font-bold mb-4"
          initial={{ y: 100, opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            type: "spring", 
            bounce: 0.4,
            stiffness: 100 
          }}
          viewport={{ once: true }}
        >
          {["What", "People", "Say"].map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-4"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.2,
                type: "spring",
                stiffness: 120
              }}
              viewport={{ once: true }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
        <motion.div
          className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Masonry/Bento Style Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Tall */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1,
              type: "spring",
              stiffness: 80
            }}
            viewport={{ once: true }}
            className="lg:row-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 group"
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-6"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <img
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-500/50"
                />
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold">{testimonials[0].name}</h3>
                <p className="text-sm text-slate-400">{testimonials[0].role}</p>
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-slate-300 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {testimonials[0].review}
            </motion.p>
            <div className="mt-6 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 1.0 + i * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  className="text-yellow-400 text-xl"
                >
                  ★
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 80
            }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-4"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: -360 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={testimonials[1].image}
                  alt={testimonials[1].name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-purple-500/50"
                />
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold">{testimonials[1].name}</h3>
                <p className="text-sm text-slate-400">{testimonials[1].role}</p>
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-slate-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              {testimonials[1].review}
            </motion.p>
            <div className="mt-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 1.1 + i * 0.1,
                    type: "spring"
                  }}
                  viewport={{ once: true }}
                  className="text-yellow-400 text-lg"
                >
                  ★
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Card 3 - Wide */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              type: "spring",
              stiffness: 80
            }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-4"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={testimonials[2].image}
                  alt={testimonials[2].name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-500/50"
                />
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold">{testimonials[2].name}</h3>
                <p className="text-sm text-slate-400">{testimonials[2].role}</p>
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-slate-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              {testimonials[2].review.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-1"
                  initial={{ opacity: 0, rotateX: -90 }}
                  whileInView={{ opacity: 1, rotateX: 0 }}
                  transition={{ delay: 0.9 + i * 0.02 }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            <div className="mt-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 1.2 + i * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                  className="text-yellow-400 text-lg"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                >
                  ★
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Card 4 - Tall */}
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 80
            }}
            viewport={{ once: true }}
            className="lg:row-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20"
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, type: "spring" }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: -360 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={testimonials[3].image}
                  alt={testimonials[3].name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-pink-500/50"
                />
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold">{testimonials[3].name}</h3>
                <p className="text-sm text-slate-400">{testimonials[3].role}</p>
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-slate-300 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
            >
              {testimonials[3].review.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-1"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 1.0 + i * 0.02,
                    type: "spring"
                  }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            <div className="mt-6 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -20, rotate: -180 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ 
                    delay: 1.3 + i * 0.1,
                    type: "spring",
                    stiffness: 150
                  }}
                  viewport={{ once: true }}
                  className="text-yellow-400 text-xl"
                  whileHover={{ scale: 1.5, y: -5 }}
                >
                  ★
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}