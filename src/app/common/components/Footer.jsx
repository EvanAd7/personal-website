import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-row justify-between items-center">
          <div className="mb-0">
            <h3 className="text-xl font-bold mb-2">Evan Adami</h3>
            <p className="text-gray-400">
              <a 
                className="hover:text-white transition-colors underline" 
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/EvanAd7/personal-website">
                  Made from scratch
              </a>
              {" "}using Next.js and Tailwind
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/EvanAd7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/evan-adami-16b98a290" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:evanadami7@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="/evan_adami_resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Resume"
            >
              <FileText size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Evan Adami. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
