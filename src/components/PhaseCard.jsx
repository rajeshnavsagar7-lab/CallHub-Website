import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle, Circle, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const PhaseCard = ({ phase, index, completedTasks, onToggleTask }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getPhaseIcon = (phaseNumber) => {
    const icons = {
      0: '📋',
      1: '🔧',
      2: '🚀',
      3: '💎',
      4: '🌟'
    };
    return icons[phaseNumber] || '📋';
  };

  const getPhaseColor = (phaseNumber) => {
    const colors = {
      0: 'from-blue-500/20 to-cyan-500/20 border-blue-400/30',
      1: 'from-green-500/20 to-emerald-500/20 border-green-400/30',
      2: 'from-purple-500/20 to-violet-500/20 border-purple-400/30',
      3: 'from-pink-500/20 to-rose-500/20 border-pink-400/30',
      4: 'from-yellow-500/20 to-orange-500/20 border-yellow-400/30'
    };
    return colors[phase.phase] || 'from-gray-500/20 to-gray-600/20 border-gray-400/30';
  };

  const completedCount = phase.tasks.filter((_, taskIndex) => 
    completedTasks.has(`${phase.id}-${taskIndex}`)
  ).length;

  const progressPercentage = (completedCount / phase.tasks.length) * 100;

  const handleTaskToggle = (taskIndex) => {
    onToggleTask(phase.id, taskIndex);
    const isCompleting = !completedTasks.has(`${phase.id}-${taskIndex}`);
    
    if (isCompleting) {
      toast({
        title: "Task Completed! 🎉",
        description: "Great progress on your AI assistant journey!",
        duration: 3000,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-gradient-to-r ${getPhaseColor(phase.phase)} backdrop-blur-sm border rounded-2xl overflow-hidden`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{getPhaseIcon(phase.phase)}</div>
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                {phase.title}
                <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                  {phase.duration}
                </span>
              </h3>
              <p className="text-gray-300">{phase.description}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-gray-300">Progress</div>
              <div className="text-lg font-bold text-white">
                {completedCount}/{phase.tasks.length}
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white hover:bg-white/10"
            >
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-white/10 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
            />
          </div>
        </div>

        {/* Tasks */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-3 pt-4 border-t border-white/10">
            {phase.tasks.map((task, taskIndex) => {
              const isCompleted = completedTasks.has(`${phase.id}-${taskIndex}`);
              
              return (
                <motion.div
                  key={taskIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: taskIndex * 0.05 }}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${
                    isCompleted 
                      ? 'bg-green-500/20 border border-green-400/30' 
                      : 'bg-white/5 hover:bg-white/10 border border-white/10'
                  }`}
                  onClick={() => handleTaskToggle(taskIndex)}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                  
                  <span className={`text-sm ${
                    isCompleted ? 'text-green-200 line-through' : 'text-gray-200'
                  }`}>
                    {task}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PhaseCard;