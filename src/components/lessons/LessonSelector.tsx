import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGameState } from '@hooks/useGameState';
import { useSounds } from '@hooks/useSounds';
import { ExerciseCategory } from '@types/exercise';

const LessonSelector: React.FC = () => {
  const { category } = useParams<{ category: ExerciseCategory }>();
  const navigate = useNavigate();
  const { state } = useGameState();
  const { playClick, playCharacterSound } = useSounds();

  if (!category) {
    navigate('/');
    return null;
  }

  const getCategoryInfo = () => {
    switch (category) {
      case 'sequencing':
        return {
          emoji: '🤖',
          name: 'Sequencing',
          description: 'Help Cody the Robot complete tasks in the right order!',
          character: 'robot'
        };
      case 'events':
        return {
          emoji: '🧚',
          name: 'Events & Conditions',
          description: 'Help Luna the Fairy respond to magical events!',
          character: 'fairy'
        };
      case 'loops':
        return {
          emoji: '🐱',
          name: 'Loops',
          description: 'Help Loopie the Cat create amazing patterns!',
          character: 'cat'
        };
      default:
        return { emoji: '⭐', name: '', description: '', character: 'robot' };
    }
  };

  const categoryInfo = getCategoryInfo();
  const progress = state.progress[category];

  const handleExerciseClick = (level: number) => {
    playClick();
    navigate(`/exercise/${category}/${level}`);
  };

  const handleBack = () => {
    playClick();
    navigate('/');
  };

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
        <div className="text-6xl mb-4 character-bounce">
          {categoryInfo.emoji}
        </div>
        <h1 className="text-4xl font-bold text-gray-800 font-child mb-2">
          {categoryInfo.name}
        </h1>
        <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
          {categoryInfo.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((level) => {
          const isCompleted = progress.completed.includes(level);
          const isCurrent = progress.current === level;
          const isLocked = level > progress.current && !isCompleted;

          return (
            <motion.button
              key={level}
              onClick={() => !isLocked && handleExerciseClick(level)}
              disabled={isLocked}
              className={`exercise-card p-4 relative ${
                isCompleted ? 'completed' : isCurrent ? 'current' : ''
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: level * 0.05 }}
              whileHover={!isLocked ? { scale: 1.1 } : {}}
              whileTap={!isLocked ? { scale: 0.95 } : {}}
            >
              <div className="text-center">
                <div className="text-2xl font-bold mb-1 font-child">
                  {level}
                </div>
                {isCompleted && (
                  <div className="text-2xl">⭐</div>
                )}
                {isCurrent && !isCompleted && (
                  <div className="text-xs text-primary font-bold font-sans">
                    Current
                  </div>
                )}
                {isLocked && (
                  <div className="text-2xl">🔒</div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-12 text-center"
      >
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
          <h3 className="text-lg font-bold text-gray-800 font-child mb-4">
            Progress in {categoryInfo.name}
          </h3>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${(progress.completed.length / 20) * 100}%`
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          <p className="text-2xl font-bold text-accent font-sans">
            {progress.completed.length} / 20 Complete
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LessonSelector;