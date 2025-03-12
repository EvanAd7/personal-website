import Link from 'next/link';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';

const NavLink = ({ href, children }) => {
  return (
    <Link 
      href={href}
      className="text-white hover:text-blue-200 transition-colors font-medium"
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50 px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          {/* Placeholder for favicon */}
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            EA
          </div>
          <span className="text-xl font-bold text-white">Evan Adami</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
