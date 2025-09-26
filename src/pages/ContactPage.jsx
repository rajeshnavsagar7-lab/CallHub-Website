import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: '✅ Message Sent!',
      description: 'Thank you for reaching out. We will get back to you shortly.',
    });
    e.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - CallHub</title>
        <meta name="description" content="Get in touch with the CallHub team. Contact us for sales inquiries, support, or to request a demo of our AI call automation platform." />
      </Helmet>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-callhub-text-dark mb-4">Get in Touch</h1>
            <p className="text-lg text-callhub-text-light max-w-2xl mx-auto">We'd love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-callhub-text-dark mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-callhub-text-light">Name</Label>
                  <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-callhub-primary focus:border-callhub-primary" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-callhub-text-light">Email</Label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-callhub-primary focus:border-callhub-primary" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-callhub-text-light">Message</Label>
                  <textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-callhub-primary focus:border-callhub-primary"></textarea>
                </div>
                <div>
                  <Button type="submit" className="w-full bg-callhub-primary hover:bg-callhub-primary/90">Send Message</Button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold text-callhub-text-dark">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-callhub-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-callhub-text-dark">Our Office</h3>
                    <p className="text-callhub-text-light">123 Tech Park, Koramangala, Bangalore, 560034, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-callhub-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-callhub-text-dark">Support Email</h3>
                    <p className="text-callhub-text-light">support@callhub.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-callhub-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-callhub-text-dark">Phone</h3>
                    <p className="text-callhub-text-light">+91 80 1234 5678</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;