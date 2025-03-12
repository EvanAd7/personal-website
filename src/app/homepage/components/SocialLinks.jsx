import { motion } from "motion/react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const SocialButton = ({ icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border border-white/15 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex justify-center items-center space-x-4 mb-16"
    >
      {[
        { icon: <Github size={24} />, href: "https://github.com/EvanAd7", label: "GitHub" },
        { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/evan-adami-16b98a290", label: "LinkedIn" },
        { icon: <Mail size={24} />, href: "mailto:evanadami@gmail.com", label: "Email" },
        { icon: <FileText size={24} />, href: "/evan_adami_resume.pdf", label: "Resume" }
      ].map((social, index) => (
        <motion.div
          key={social.label}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
        >
          <SocialButton 
            icon={social.icon} 
            href={social.href} 
            label={social.label} 
          />
        </motion.div>
      ))}
    </motion.div>
  );
} 