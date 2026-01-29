import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaYoutube, 
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaHeart,
  FaWhatsapp,
  FaPaperPlane,
  FaMapMarkerAlt
} from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/Pralay2605Q", color: "hover:text-gray-300" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/pralay0256q/", color: "hover:text-blue-400" },
  { Icon: FaTwitter, label: "X", href: "https://x.com/Pralay0265q", color: "hover:text-sky-400" },
  { Icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/@DEADSHOT84VOW", color: "hover:text-red-500" },
  { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/pralay0256q/", color: "hover:text-pink-400" }
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Pralay2605Q/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/pralay0256q/" },
  { name: "Twitter", href: "https://x.com/Pralay0265q/" },
  { name: "Instagram", href: "https://www.instagram.com/pralay0256q/" },
  { name: "YouTube", href: "https://www.youtube.com/@DEADSHOT84VOW" }
];

const contactInfo = [
  { Icon: FaEnvelope, text: "pralaykrishna321@gmail.com", href: "mailto:pralaykrishna321@gmail.com" },
  { Icon: FaPhone, text: "+91 7908785972", href: "tel:+917908785972"},
  { Icon: FaWhatsapp , text: "+91 7908785972", href: "https://wa.me/917908785972" },
  { Icon: FaPaperPlane, text: "@Pralay0256q", href: "https://t.me/Pralay0256q" },
  { Icon: FaMapMarkerAlt, text: "Pakuria,Berhampore,Chaltia, Murshidabad, West Bengal 742407", href: "#" }
];

const glowVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.1,
    y: -2,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.95 },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent mb-4">
                Pralay Krishna Pramanik
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Full-Stack Developer & ML Engineer passionate about creating innovative solutions that make a difference. 
                Let's build something amazing together.
              </p>
              <div className="flex items-center gap-2 text-cyan-400">
                <FaCode className="text-xl" />
                <span className="text-sm font-medium">Available for freelance projects</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500" />
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={link.name} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Socials
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500" />
              </h3>
              <ul className="space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.li key={link.name} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a 
                      href={link.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400" />
              </h3>
              <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={contact.href}
                    className="flex items-start gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300 group"
                  >
                    <contact.Icon
                      className="min-w-[20px] min-h-[20px] text-xl flex-shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm break-words">
                      {contact.text}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {socials.filter(social => social.href).map(({ Icon, label, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className={`text-gray-400 ${color} transition-all duration-300 p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50`}
                aria-label={label}
              >
                <Icon className="text-xl" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 text-gray-400 text-sm text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span>&copy; {new Date().getFullYear()} Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>by Pralay Krishna Pramanik</span>
          </motion.div>
        </div>

        {/* Inspirational Quote */}
        <motion.div 
          className="text-center mt-12 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <blockquote className="text-gray-300 italic text-lg max-w-2xl mx-auto">
            "The best way to predict the future is to create it."
          </blockquote>
          <cite className="text-gray-500 text-sm mt-2 block">- Pralay Krishna Pramanik</cite>
        </motion.div>
      </div>
    </footer>
  );
}
