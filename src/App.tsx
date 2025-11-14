import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GameStateProvider } from './hooks/useGameState';
import { SoundProvider } from './hooks/useSounds';
import Header from '@components/common/Header';
import Home from '@components/common/Home';
import LessonSelector from '@components/lessons/LessonSelector';
import ExerciseScreen from '@components/exercises/ExerciseScreen';
import ProgressDashboard from '@components/common/ProgressDashboard';

function App() {
  return (
    <GameStateProvider>
      <SoundProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex-1"
                  >
                    <Home />
                  </motion.div>
                } />
                <Route path="/lessons/:category" element={
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1"
                  >
                    <LessonSelector />
                  </motion.div>
                } />
                <Route path="/exercise/:category/:level" element={
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="flex-1"
                  >
                    <ExerciseScreen />
                  </motion.div>
                } />
                <Route path="/progress" element={
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex-1"
                  >
                    <ProgressDashboard />
                  </motion.div>
                } />
              </Routes>
            </AnimatePresence>
          </div>
        </Router>
      </SoundProvider>
    </GameStateProvider>
  );
}

export default App;