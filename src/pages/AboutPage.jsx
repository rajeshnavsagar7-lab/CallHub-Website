import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - CallHub</title>
        <meta name="description" content="Learn about CallHub's mission to revolutionize customer communication in India with AI-powered voice automation." />
      </Helmet>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-callhub-text-dark mb-4">Our Mission</h1>
            <p className="text-lg text-callhub-text-light max-w-3xl mx-auto">To empower businesses in India with intelligent, accessible, and efficient voice automation technology, transforming customer communication for the better.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                className="rounded-lg shadow-xl w-full h-auto"
                alt="Illustration of AI gears and soundwaves representing voice automation"
               src="https://images.unsplash.com/photo-1675023035272-3426884896f8" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-callhub-text-dark">Who We Are</h2>
              <p className="text-callhub-text-light">CallHub was founded by a team of passionate engineers and communication experts who saw a gap in the Indian market for a smart, scalable, and affordable call automation solution. We are dedicated to building a product that not only saves businesses time and money but also improves the quality of customer interactions.</p>
              <p className="text-callhub-text-light">Our headquarters are in Bangalore, the heart of India's tech innovation, and we are proud to be a "Made in India" solution for the world.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white p-8 rounded-lg shadow-sm">
              <Target className="w-12 h-12 text-callhub-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-callhub-text-dark mb-2">Our Vision</h3>
              <p className="text-callhub-text-light">To be the leading voice AI platform in India.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white p-8 rounded-lg shadow-sm">
              <Zap className="w-12 h-12 text-callhub-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-callhub-text-dark mb-2">Our Approach</h3>
              <p className="text-callhub-text-light">Combining cutting-edge AI with user-centric design.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white p-8 rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-callhub-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-callhub-text-dark mb-2">Our Team</h3>
              <p className="text-callhub-text-light">A diverse group of innovators and problem-solvers.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;