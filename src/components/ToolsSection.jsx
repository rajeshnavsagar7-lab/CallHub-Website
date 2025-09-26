import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Mic, Phone, Globe, Wrench } from 'lucide-react';

const ToolsSection = () => {
  const toolCategories = [
    {
      title: "Languages & Infrastructure",
      icon: <Code className="w-6 h-6" />,
      tools: ["Python", "Node.js (optional)", "Docker", "Git"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "ML/NLP",
      icon: <Brain className="w-6 h-6" />,
      tools: ["PyTorch/TensorFlow", "Hugging Face Transformers", "Rasa/spaCy"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Speech Processing",
      icon: <Mic className="w-6 h-6" />,
      tools: ["Whisper (small)", "Vosk (offline)", "Coqui/TTS", "pyttsx"],
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "Telephony & Communication",
      icon: <Phone className="w-6 h-6" />,
      tools: ["Asterisk (self-host)", "WebRTC", "SMTP", "GSM modem"],
      color: "from-pink-500/20 to-rose-500/20"
    },
    {
      title: "Web Automation",
      icon: <Globe className="w-6 h-6" />,
      tools: ["Playwright", "Selenium", "Web scraping tools"],
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Optional Advanced",
      icon: <Wrench className="w-6 h-6" />,
      tools: ["Llama/Mistral (local)", "Local LLMs", "Custom fine-tuning"],
      color: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        🛠️ Key Tools & Libraries
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className={`bg-gradient-to-br ${category.color} backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/10 rounded-lg text-white">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="space-y-2">
              {category.tools.map((tool, toolIndex) => (
                <div
                  key={toolIndex}
                  className="text-sm text-gray-200 bg-white/5 px-3 py-2 rounded-lg border border-white/10"
                >
                  {tool}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ToolsSection;