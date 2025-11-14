import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CharacterAnimationProps {
  character: 'robot' | 'fairy' | 'cat';
  actions: string[];
  isPlaying: boolean;
  onComplete: () => void;
}

const CharacterAnimation: React.FC<CharacterAnimationProps> = ({
  character,
  actions,
  isPlaying,
  onComplete
}) => {
  const [currentActionIndex, setCurrentActionIndex] = useState(0);
  const [showCharacter, setShowCharacter] = useState(true);

  useEffect(() => {
    if (isPlaying && currentActionIndex < actions.length) {
      const timer = setTimeout(() => {
        if (currentActionIndex < actions.length - 1) {
          setCurrentActionIndex(currentActionIndex + 1);
        } else {
          onComplete();
        }
      }, 800); // Each action takes 800ms

      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentActionIndex, actions.length, onComplete]);

  const getCharacterEmoji = () => {
    switch (character) {
      case 'robot': return '🤖';
      case 'fairy': return '🧚';
      case 'cat': return '🐱';
      default: return '😊';
    }
  };

  const getActionAnimation = (action: string) => {
    // Simple animations based on action type
    switch (action) {
      case 'stretch':
      case 'stretch_arms':
        return { scale: [1, 1.1, 1], rotate: [-10, 0, 10] };
      case 'yawn':
        return { scale: [1, 1.2, 1], y: [0, -10, 0] };
      case 'stand':
      case 'stand_up':
        return { y: [20, 0, 0], scale: [0.8, 1, 1] };
      case 'jump':
        return { y: [0, -30, 0], scale: [1, 0.9, 1] };
      case 'eat':
        return { scale: [1, 0.9, 1] };
      case 'walk':
        return { x: [0, 20, 0], rotate: [0, 5, -5, 0] };
      case 'spin':
        return { rotate: [0, 360, 720] };
      case 'wave':
        return { rotate: [0, -20, 20, 0] };
      case 'meow':
        return { scale: [1, 1.1, 1] };
      default:
        return { scale: [1, 1.05, 1] };
    }
  };

  const getActionVisual = (action: string) => {
    const visualMap: Record<string, React.ReactNode> = {
      stretch: '💪',
      stretch_arms: '💪',
      yawn: '😴',
      stand: '🧍',
      stand_up: '🧍',
      shirt: '👔',
      pants: '👖',
      shoes: '👟',
      toothpaste: '🦷',
      brush: '🦷',
      rinse: '💦',
      cereal: '🥣',
      milk: '🥛',
      eat: '😋',
      get_water: '🪣',
      water_plant: '🪴',
      happy_plant: '🌱',
      bread1: '🍞',
      lettuce: '🥬',
      cheese: '🧀',
      bread2: '🍞',
      wake_up: '⏰',
      dress_up: '👔',
      eat_breakfast: '🍽',
      grab_backpack: '🎒',
      jump: '🦘',
      meow: '🐱',
      spin: '🔄',
      wave: '👋'
    };

    return visualMap[action] || '⚡';
  };

  if (!isPlaying) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="text-6xl">
          {getCharacterEmoji()}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-32">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentActionIndex}
          initial={{ scale: 0 }}
          animate={getActionAnimation(actions[currentActionIndex])}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-6xl"
        >
          {getActionVisual(actions[currentActionIndex])}
        </motion.div>
      </AnimatePresence>

      <div className="ml-8">
        <div className="text-sm font-sans text-gray-600 mb-2">
          Action {currentActionIndex + 1} of {actions.length}
        </div>
        <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentActionIndex + 1) / actions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterAnimation;