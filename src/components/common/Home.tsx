import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGameState } from '@hooks/useGameState';
import { useSounds } from '@hooks/useSounds';
import { ExerciseCategory } from '@types/exercise';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useGameState();
  const { playClick, playCharacterSound } = useSounds();

  const categories: Array<{
    id: ExerciseCategory;
    name: string;
    emoji: string;
    description: string;
    color: string;
    bgColor: string;
    character: string;
    locked: boolean;
  }> = [
    {
      id: 'sequencing',
      name: 'Sequencing',
      emoji: '🤖',
      description: 'Learn step-by-step programming',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      character: 'robot',
      locked: false,
    },
    {
      id: 'events',
      name: 'Events & Conditions',
      emoji: '🧚',
      description: 'Learn if-then logic',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      character: 'fairy',
      locked: !state.progress.unlocked.events,
    },
    {
      id: 'loops',
      name: 'Loops',
      emoji: '🐱',
      description: 'Learn repetition and patterns',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      character: 'cat',
      locked: !state.progress.uncovered.loops,
    },
  ];

  const handleCategoryClick = (categoryId: ExerciseCategory, character: string) => {
    playClick();
    playCharacterSound(character as 'robot' | 'fairy' | 'cat');
    if (categories.find(cat => cat.id === categoryId)?.locked) {
      return; // Don't navigate if locked
    }
    navigate(`/lessons/${categoryId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-gray-800 font-child mb-4 text-shadow">
          Welcome to Code Kids! 👨‍💻
        </h1>
        <p className="text-xl text-gray-600 font-sans max-w-2xl mx-auto">
          Learn programming concepts through fun interactive games!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: category.locked ? 1 : 1.05 }}
            whileTap={{ scale: category.locked ? 1 : 0.95 }}
          >
            <button
              onClick={() => handleCategoryClick(category.id, category.character)}
              disabled={category.locked}
              className={`w-full p-8 rounded-2xl shadow-xl transition-all duration-300 ${
                category.locked
                  ? 'bg-gray-100 opacity-60 cursor-not-allowed'
                  : `hover:shadow-2xl cursor-pointer transform hover:-translate-y-1 ${category.bgColor}`
              }`}
            >
              <div className="text-center">
                <div className={`text-6xl mb-4 character-bounce ${category.locked ? 'grayscale' : ''}`}>
                  {category.emoji}
                </div>
                <h2 className={`text-2xl font-bold mb-2 font-child ${category.color}`}>
                  {category.name}
                </h2>
                <p className="text-gray-600 font-sans mb-4">
                  {category.description}
                </p>

                {category.locked ? (
                  <div className="flex items-center justify-center space-x-2 text-gray-500">
                    <span className="text-2xl">🔒</span>
                    <span className="text-sm font-sans">Complete previous level to unlock</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{
                          width: `${(state.progress[category.id].completed.length / 20) * 100}%`
                        }}
                      />
                    </div>
                    <span className="text-sm font-bold text-gray-700 font-sans">
                      {state.progress[category.id].completed.length}/20
                    </span>
                  </div>
                )}
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-12"
      >
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-4xl">🏆</span>
            <div>
              <h3 className="text-lg font-bold text-gray-800 font-child">Total Progress</h3>
              <p className="text-3xl font-bold text-accent font-sans">
                {state.progress.totalStars} Stars Earned
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;