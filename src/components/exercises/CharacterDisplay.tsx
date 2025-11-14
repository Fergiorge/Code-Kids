import React from 'react';
import { motion } from 'framer-motion';

interface CharacterDisplayProps {
  character: 'robot' | 'fairy' | 'cat';
  expression: 'happy' | 'thinking' | 'excited' | 'sleeping';
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
}

const CharacterDisplay: React.FC<CharacterDisplayProps> = ({
  character,
  expression,
  size = 'medium',
  animated = true
}) => {
  const getCharacterEmoji = () => {
    switch (character) {
      case 'robot':
        switch (expression) {
          case 'happy': return '🤖';
          case 'thinking': return '🤔';
          case 'excited': return '🤖';
          case 'sleeping': return '😴';
          default: return '🤖';
        }
      case 'fairy':
        switch (expression) {
          case 'happy': return '🧚';
          case 'thinking': return '🧚';
          case 'excited': return '🧚';
          case 'sleeping': return '😴';
          default: return '🧚';
        }
      case 'cat':
        switch (expression) {
          case 'happy': return '🐱';
          case 'thinking': return '🤔';
          case 'excited': return '🐱';
          case 'sleeping': return '😴';
          default: return '🐱';
        }
      default:
        return '😊';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'text-4xl';
      case 'medium': return 'text-6xl';
      case 'large': return 'text-8xl';
      default: return 'text-6xl';
    }
  };

  const getAnimation = () => {
    if (!animated) return {};

    switch (expression) {
      case 'happy':
        return {
          animate: { scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] },
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        };
      case 'thinking':
        return {
          animate: { rotate: [0, -3, 3, -3, 3] },
          transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }
        };
      case 'excited':
        return {
          animate: { y: [0, -10, 0], scale: [1, 1.2, 1] },
          transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
        };
      case 'sleeping':
        return {
          animate: { scale: [1, 0.8, 1], rotate: [0, 15, 0] },
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        };
      default:
        return {
          animate: { scale: [1, 1.05, 1] },
          transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        };
    }
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className={`${getSizeClass()} transition-all duration-300`}
        {...getAnimation()}
      >
        {getCharacterEmoji()}
      </motion.div>

      {/* Character name below emoji */}
      <div className="text-sm font-bold text-gray-700 font-child mt-2">
        {character === 'robot' ? 'Cody' :
         character === 'fairy' ? 'Luna' : 'Loopie'}
      </div>
    </div>
  );
};

export default CharacterDisplay;