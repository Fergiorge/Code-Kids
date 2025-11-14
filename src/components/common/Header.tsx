import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGameState } from '@hooks/useGameState';
import { useSounds } from '@hooks/useSounds';
import SoundToggle from './SoundToggle';
import ProgressBar from './ProgressBar';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useGameState();
  const { playClick } = useSounds();

  const handleHomeClick = () => {
    playClick();
    navigate('/');
  };

  const handleProgressClick = () => {
    playClick();
    navigate('/progress');
  };

  const isExercisePage = location.pathname.startsWith('/exercise');
  const isProgressPage = location.pathname === '/progress';

  return (
    <header className="bg-white shadow-lg border-b-4 border-primary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={handleHomeClick}
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold font-child">CK</span>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-800 font-child">
                Code Kids
              </h1>
              <p className="text-xs text-gray-600 font-sans">
                Learn to Code!
              </p>
            </div>
          </motion.button>

          <div className="flex items-center space-x-4">
            {isExercisePage && (
              <ProgressBar
                category={state.currentCategory!}
                currentLevel={state.currentExercise || 1}
                totalLevels={20}
              />
            )}

            <motion.button
              onClick={handleProgressClick}
              className={`btn-secondary ${isProgressPage ? 'ring-2 ring-offset-2 ring-accent' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏆</span>
                <span className="hidden sm:inline font-sans">
                  {state.progress.totalStars} Stars
                </span>
              </div>
            </motion.button>

            <SoundToggle />

            {isExercisePage && (
              <motion.button
                onClick={handleHomeClick}
                className="btn-primary text-sm px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🏠 Home
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;