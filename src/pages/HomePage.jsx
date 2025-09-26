import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PhoneCall, Languages, CalendarClock, Quote } from 'lucide-react';

const HomePage = () => {
  const features = [
    { icon: <PhoneCall className="w-8 h-8 text-callhub-primary" />, title: 'AI Voice Recognition', description: 'Understand and respond to customers in natural language.' },
    { icon: <Languages className="w-8 h-8 text-callhub-primary" />, title: 'Multi-language Support', description: 'Engage with a diverse customer base in their native language.' },
    { icon: <CalendarClock className="w-8 h-8 text-callhub-primary" />, title: 'Call Scheduling', description: 'Automate outreach and follow-ups at the perfect time.' },
  ];

  const testimonials = [
    { name: 'Aarav Sharma', company: 'Fintech Solutions', text: 'CallHub revolutionized our loan recovery process. It\'s efficient and incredibly effective.' },
    { name: 'Priya Singh', company: 'E-commerce Giant', text: 'Our credit card sales have doubled since we started using CallHub for automated outreach.' },
  ];

  return (
    <>
      <Helmet>
        <title>CallHub - Automate Customer Calls with AI Voice Bots</title>
        <meta name="description" content="CallHub offers an AI-driven platform to automate your customer calls, supporting multiple languages, call scheduling, and advanced voice recognition for the Indian market." />
      </Helmet>

      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold text-callhub-text-dark mb-4"
            >
              Automate Your Customer Calls
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-callhub-text-light max-w-3xl mx-auto mb-8"
            >
              with <span className="text-callhub-primary font-semibold">AI-driven Voice Bots</span>.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              <a href="https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/">
                <Button size="lg" className="bg-callhub-primary hover:bg-callhub-primary/90">Get Started</Button>
              </a>
              <a href="https://2388092c-6e3d-4b1f-b69e-717b42adb0e7.dev17.app-preview.com/contact">
                <Button size="lg" variant="outline" className="border-callhub-primary text-callhub-primary hover:bg-callhub-primary/10 hover:text-callhub-primary">Request Demo</Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Highlight */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-callhub-text-dark mb-2">{feature.title}</h3>
                  <p className="text-callhub-text-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-callhub-text-dark mb-12">Loved by businesses across India</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <Quote className="w-8 h-8 text-callhub-secondary mb-4" />
                  <p className="text-callhub-text-light mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-callhub-primary to-callhub-secondary flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-callhub-text-dark">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;