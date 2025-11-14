import React from 'react';
import { motion } from 'framer-motion';
import { ExerciseCategory } from '@types/exercise';

interface ProgressBarProps {
  category: ExerciseCategory;
  currentLevel: number;
  totalLevels: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  category,
  currentLevel,
  totalLevels
}) => {
  const percentage = (currentLevel / totalLevels) * 100;

  const getCategoryEmoji = () => {
    switch (category) {
      case 'sequencing': return '🤖';
      case 'events': return '🧚';
      case 'loops': return '🐱';
      default: return '⭐';
    }
  };

  const getCategoryName = () => {
    switch (category) {
      case 'sequencing': return 'Sequencing';
      case 'events': return 'Events & Conditions';
      case 'loops': return 'Loops';
      default: return '';
    }
  };

  return (
    <div className="flex flex-col items-end space-y-1">
      <div className="text-sm font-semibold text-gray-600 font-sans">
        {getCategoryEmoji()} {getCategoryName()}
      </div>
      <div className="w-32 sm:w-48 h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            background: category === 'sequencing'
              ? 'linear-gradient(to right, #3B82F6, #60A5FA)'
              : category === 'events'
              ? 'linear-gradient(to right, #FCD34D, #FDE047)'
              : 'linear-gradient(to right, #10B981, #34D399)'
          }}
        />
      </div>
      <div className="text-xs text-gray-500 font-sans">
        {currentLevel} / {totalLevels}
      </div>
    </div>
  );
};

export default ProgressBar;