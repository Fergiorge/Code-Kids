import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGameState } from '@hooks/useGameState';
import { useSounds } from '@hooks/useSounds';

const ProgressDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useGameState();
  const { playClick } = useSounds();

  const handleBack = () => {
    playClick();
    navigate('/');
  };

  const categories = [
    {
      id: 'sequencing' as const,
      name: 'Sequencing',
      emoji: '🤖',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      id: 'events' as const,
      name: 'Events & Conditions',
      emoji: '🧚',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      id: 'loops' as const,
      name: 'Loops',
      emoji: '🐱',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.button
        onClick={handleBack}
        className="btn-primary mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        ← Back to Home
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 font-child mb-4">
          Your Progress 🏆
        </h1>
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
          <div className="text-5xl mb-2">🌟</div>
          <p className="text-3xl font-bold text-accent font-sans">
            {state.progress.totalStars} Stars Earned
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
        {categories.map((category, index) => {
          const progress = state.progress[category.id];
          const percentage = (progress.completed.length / 20) * 100;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${category.bgColor} rounded-2xl p-6`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{category.emoji}</div>
                <h3 className={`text-xl font-bold ${category.color} font-child mb-3`}>
                  {category.name}
                </h3>
                <div className="w-full h-3 bg-white bg-opacity-50 rounded-full overflow-hidden mb-3">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
                <p className="text-gray-700 font-bold font-sans">
                  {progress.completed.length} / 20 Complete
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 font-child mb-6 text-center">
          Achievements 🏅
        </h2>
        {state.progress.achievements.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {state.progress.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl"
              >
                <div className="text-3xl mb-2">🏆</div>
                <p className="text-sm font-semibold text-gray-700 font-sans">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 font-sans">
            <div className="text-6xl mb-4 opacity-50">🎯</div>
            <p>Complete exercises to earn achievements!</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProgressDashboard;