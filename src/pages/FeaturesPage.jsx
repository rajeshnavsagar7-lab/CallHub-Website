import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, BarChart, Bot, PhoneForwarded, CreditCard, Coins as HandCoins } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    { icon: <Bot />, title: 'Conversational AI', description: 'Engage customers with human-like voice bots that understand context and intent.' },
    { icon: <PhoneForwarded />, title: 'Intelligent Call Routing', description: 'Automatically direct calls to the right agent or department based on customer needs.' },
    { icon: <BarChart />, title: 'Real-time Analytics', description: 'Monitor call performance, track KPIs, and gain insights with a powerful dashboard.' },
    { icon: <CheckCircle />, title: 'CRM Integration', description: 'Seamlessly sync call data with your existing CRM for a unified customer view.' },
  ];

  const useCases = [
    { icon: <CreditCard className="w-10 h-10 text-callhub-primary" />, title: 'Credit Card Sales', description: 'Automate lead qualification and sales pitches to boost your credit card acquisition rates.' },
    { icon: <HandCoins className="w-10 h-10 text-callhub-primary" />, title: 'Loan Recovery Calls', description: 'Send automated payment reminders and collection calls, improving recovery rates while reducing costs.' },
  ];

  return (
    <>
      <Helmet>
        <title>Features - CallHub AI Call Automation</title>
        <meta name="description" content="Explore the powerful features of CallHub, including conversational AI, intelligent call routing, real-time analytics, and CRM integration." />
      </Helmet>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-callhub-text-dark mb-4">Powerful Features, Simple to Use</h1>
            <p className="text-lg text-callhub-text-light max-w-2xl mx-auto">Everything you need to automate your call center operations and delight your customers.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="p-3 bg-blue-100 rounded-full text-callhub-primary">
                  {React.cloneElement(feature.icon, { className: 'w-7 h-7' })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-callhub-text-dark mb-2">{feature.title}</h3>
                  <p className="text-callhub-text-light">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-callhub-text-dark mb-4">Real-World Use Cases</h2>
            <p className="text-lg text-callhub-text-light max-w-2xl mx-auto">See how businesses in India are using CallHub to drive growth.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <div className="flex justify-center mb-4">{useCase.icon}</div>
                <h3 className="text-2xl font-bold text-callhub-text-dark mb-3">{useCase.title}</h3>
                <p className="text-callhub-text-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesPage;