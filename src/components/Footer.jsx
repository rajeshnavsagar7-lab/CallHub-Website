import React from 'react';
import { Phone, Twitter, Linkedin, Facebook } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: '🚧 Social Media',
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const navLinks = {
    home: 'https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/',
    features: 'https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/features',
    about: 'https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/about',
    contact: 'https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/contact',
    testimonials: 'https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/#testimonials'
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href={navLinks.home} className="flex items-center gap-2">
              <Phone className="w-8 h-8 text-callhub-primary" />
              <span className="text-2xl font-bold text-callhub-text-dark">CallHub</span>
            </a>
            <p className="text-callhub-text-light text-sm">Automate your customer calls with AI-driven voice bots.</p>
            <div className="flex gap-4">
              <button onClick={handleSocialClick} className="text-gray-500 hover:text-callhub-primary transition-colors"><Twitter /></button>
              <button onClick={handleSocialClick} className="text-gray-500 hover:text-callhub-primary transition-colors"><Linkedin /></button>
              <button onClick={handleSocialClick} className="text-gray-500 hover:text-callhub-primary transition-colors"><Facebook /></button>
            </div>
          </div>

          <div>
            <p className="font-bold text-callhub-text-dark mb-4">Product</p>
            <ul className="space-y-2">
              <li><a href={navLinks.features} className="text-sm text-callhub-text-light hover:text-callhub-primary">Features</a></li>
              <li><a href={navLinks.testimonials} className="text-sm text-callhub-text-light hover:text-callhub-primary">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-callhub-text-dark mb-4">Company</p>
            <ul className="space-y-2">
              <li><a href={navLinks.about} className="text-sm text-callhub-text-light hover:text-callhub-primary">About Us</a></li>
              <li><a href={navLinks.contact} className="text-sm text-callhub-text-light hover:text-callhub-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-callhub-text-dark mb-4">Legal</p>
            <ul className="space-y-2">
              <li><button onClick={handleSocialClick} className="text-sm text-callhub-text-light hover:text-callhub-primary">Privacy Policy</button></li>
              <li><button onClick={handleSocialClick} className="text-sm text-callhub-text-light hover:text-callhub-primary">Terms of Service</button></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} CallHub.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;