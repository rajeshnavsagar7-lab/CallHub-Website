import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: 'https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/' },
    { name: 'Features', path: 'https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/features' },
    { name: 'About Us', path: 'https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/about' },
    { name: 'Contact', path: 'https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/contact' },
  ];

  const linkClass = "relative text-callhub-text-dark font-medium after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-callhub-primary after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/" className="flex items-center gap-2">
            <Phone className="w-8 h-8 text-callhub-primary" />
            <span className="text-2xl font-bold text-callhub-text-dark">CallHub</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.path} className={linkClass}>
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/contact">
              <Button variant="outline" className="border-callhub-primary text-callhub-primary hover:bg-callhub-primary/10 hover:text-callhub-primary">
                Request Demo
              </Button>
            </a>
            <a href="https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/">
              <Button className="bg-callhub-primary hover:bg-callhub-primary/90">
                Get Started
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white pb-4"
        >
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.path} className={linkClass} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 w-full px-8">
              <a href="https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/contact">
                <Button variant="outline" className="w-full border-callhub-primary text-callhub-primary">
                  Request Demo
                </Button>
              </a>
              <a href="https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/">
                <Button className="w-full bg-callhub-primary">
                  Get Started
                </Button>
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;