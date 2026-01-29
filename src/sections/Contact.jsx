import ParticlesBackground from "../components/ParticlesBackground";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Astra from "../assets/Astra.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: "",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    try {
      const { name, value } = e.target;
      if (name === "budget" && value && !/^\d*$/.test(value)) return;
      setFormData((p) => ({ ...p, [name]: value }));
    } catch (error) {
      console.error("Error handling form input:", error);
      setStatus("error");
    }
  };

  const validateFrom = () => {
    const required = ["name", "email", "services", "idea"];
    const newErrors = {};

    required.forEach(
      (f) => !formData[f].trim() && (newErrors[f] = "This field is required")
    );

    if (formData.services !== "other" && !formData.budget.trim()) {
      newErrors.budget = "This field is required";
    }

    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFrom()) return;

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          from_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        services: "",
        budget: "",
        idea: "",
      });
    } catch (err) {
      console.error("Error sending EmailJS: ", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <ParticlesBackground />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={Astra}
            alt="Contact"
            className="w-72 md:w-140 rounded-2xl shadow-lg object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`p-3 rounded-lg bg-white/10 border ${
                  errors.name ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.email ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Services */}
<div className="flex flex-col gap-1">
  <label className="text-sm font-medium text-gray-300">
    Services Needed <span className="text-red-500">*</span>
  </label>

  <div className="relative">
    <select
      name="services"
      value={formData.services}
      onChange={handleChange}
      className={`
        w-full appearance-none p-3 pr-10 rounded-lg
        bg-white/5 backdrop-blur-md
        border ${errors.services ? "border-red-500" : "border-white/20"}
        text-white
        focus:outline-none focus:ring-2 focus:ring-blue-500/60
        transition
      `}
    >
      <option value="" disabled className="text-gray-400 bg-black">
        Select a service
      </option>
      <option value="Full-Stack Developer" className="bg-black">
        Full-Stack Developer
      </option>
      <option value="Machine Learning Engineer" className="bg-black">
        Machine Learning Engineer
      </option>
      <option value="Software Developer" className="bg-black">
        Software Developer
      </option>
      <option value="Android Developer" className="bg-black">
        Android Developer
      </option>
      <option value="other" className="bg-black">
        Other
      </option>
    </select>

    {/* Custom dropdown arrow */}
    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
      ▼
    </span>
  </div>

  {errors.services && (
    <p className="text-xs text-red-500 mt-1">{errors.services}</p>
  )}
</div>


            {/* Budget */}
            {formData.services && formData.services !== "other" && (
              <div className="flex flex-col">
                <label className="mb-1">
                  Budget <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`p-3 rounded-md bg-white/10 border ${
                    errors.budget ? "border-red-500" : "border-gray-500"
                  } text-white focus:outline-none focus:border-blue-500`}
                />
                {errors.budget && (
                  <p className="text-red-500 text-xs">{errors.budget}</p>
                )}
              </div>
            )}

            {/* Idea */}
            <div className="flex flex-col">
              <label className="mb-1">
                Explain Your Idea <span className="text-red-500">*</span>
              </label>
              <textarea
                name="idea"
                rows={5}
                value={formData.idea}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.idea ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.idea && (
                <p className="text-red-500 text-xs">{errors.idea}</p>
              )}
            </div>

            {/* Status */}
            {status && (
              <p
                className={`text-sm ${
                  status === "success"
                    ? "text-green-400"
                    : status === "error"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Message sent successfully ✅"
                  : "Something went wrong ❌"}
              </p>
            )}

            <motion.button
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-md font-semibold transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === "sending"}
              type="submit"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
