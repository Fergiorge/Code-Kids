import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ExerciseScreen: React.FC = () => {
  const { category, level } = useParams<{ category: string; level: string }>();
  const navigate = useNavigate();

  if (!category || !level) {
    navigate('/');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <h1 className="text-3xl font-bold text-gray-800 font-child mb-4">
            Exercise {level} - {category}
          </h1>
          <p className="text-lg text-gray-600 font-sans mb-8">
            This exercise is coming soon! 🚧
          </p>
          <p className="text-gray-500 font-sans">
            We're working hard to create amazing coding exercises for you.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ExerciseScreen;