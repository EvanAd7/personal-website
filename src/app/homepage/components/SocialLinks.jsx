import { motion } from "motion/react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const SocialButton = ({ icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
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
      className="flex space-x-4 mb-16"
    >
      <SocialButton icon={<Github size={24} />} href="https://github.com/yourusername" label="GitHub" />
      <SocialButton icon={<Linkedin size={24} />} href="https://linkedin.com/in/yourusername" label="LinkedIn" />
      <SocialButton icon={<Mail size={24} />} href="mailto:your.email@example.com" label="Email" />
      <SocialButton icon={<FileText size={24} />} href="/resume.pdf" label="Resume" />
    </motion.div>
  );
} 