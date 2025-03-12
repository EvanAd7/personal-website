'use client';

import { useState, useEffect } from 'react';

const NavLink = ({ href, children }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a 
      href={href}
      onClick={handleScroll}
      className="text-white hover:text-blue-200 transition-colors font-medium cursor-pointer"
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`sticky top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
      scrolled 
        ? 'bg-blue-950/60 backdrop-blur-sm shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" onClick={scrollToTop}>
          <span className="text-2xl font-bold text-white">Evan Adami</span>
        </a>
        
        <div className="space-x-8">
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
