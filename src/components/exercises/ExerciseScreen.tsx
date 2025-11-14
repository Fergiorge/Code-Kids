import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getExerciseByCategoryAndLevel } from '@data/exercises';
import { ExerciseResult } from '@types/exercise';
import { useGameState } from '@hooks/useGameState';
import ExerciseCard from './ExerciseCard';

const ExerciseScreen: React.FC = () => {
  const { category, level } = useParams<{ category: string; level: string }>();
  const navigate = useNavigate();
  const { dispatch } = useGameState();

  if (!category || !level) {
    navigate('/');
    return null;
  }

  const exerciseNumber = parseInt(level);
  const exercise = getExerciseByCategoryAndLevel(category as any, exerciseNumber);

  if (!exercise) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <h1 className="text-3xl font-bold text-gray-800 font-child mb-4">
              Exercise Not Found
            </h1>
            <p className="text-lg text-gray-600 font-sans">
              This exercise doesn't exist yet.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  const handleComplete = (result: ExerciseResult) => {
    dispatch({
      type: 'COMPLETE_EXERCISE',
      payload: { category: category as any, level: exerciseNumber, result }
    });
  };

  const handleHint = (hintNumber: number) => {
    console.log(`Hint ${hintNumber} requested`);
  };

  const handleBackToLessons = () => {
    navigate(`/lessons/${category}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <motion.button
          onClick={handleBackToLessons}
          className="btn-primary mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          ← Back to Lessons
        </motion.button>

        <ExerciseCard
          exercise={exercise}
          onComplete={handleComplete}
          onHint={handleHint}
        />
      </div>
    </div>
  );
};

export default ExerciseScreen;