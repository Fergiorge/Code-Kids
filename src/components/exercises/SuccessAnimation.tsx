import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimationType } from '@types/exercise';

interface SuccessAnimationProps {
  animationType: AnimationType;
  isPlaying: boolean;
  onComplete: () => void;
}

const SuccessAnimation: React.FC<SuccessAnimationProps> = ({
  animationType,
  isPlaying,
  onComplete
}) => {
  const renderAnimationContent = () => {
    switch (animationType) {
      case 'bounce':
        return (
          <motion.div
            className="text-6xl text-center"
            animate={{
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              times: [0, 0.4, 0.8, 1]
            }}
          >
            🎉
          </motion.div>
        );

      case 'sparkle':
        return (
          <div className="text-center">
            <motion.div
              className="text-6xl inline-block"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.3, 0.6, 1]
              }}
            >
              ✨
            </motion.div>

            {/* Sparkle effects */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 0
                }}
                animate={{
                  x: Math.cos((i * Math.PI) / 3) * 100,
                  y: Math.sin((i * Math.PI) / 3) * 100,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  times: [0, 0.1, 0.9, 1]
                }}
              >
                ⭐
              </motion.div>
            ))}
          </div>
        );

      case 'confetti':
        return (
          <div className="text-center">
            <motion.div
              className="text-6xl mb-4"
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.8, 1]
              }}
            >
              🎊
            </motion.div>

            {/* Confetti pieces */}
            <AnimatePresence>
              {isPlaying && [...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-br from-primary via-accent to-secondary rounded-full"
                  initial={{
                    x: Math.random() * 200 - 100,
                    y: -50,
                    scale: 0,
                    rotate: Math.random() * 360
                  }}
                  animate={{
                    x: Math.random() * 400 - 200,
                    y: Math.random() * 300 + 100,
                    scale: [0, 1, 0],
                    rotate: Math.random() * 720
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    ease: "easeOut"
                  }}
                  style={{
                    backgroundColor: ['#3B82F6', '#FCD34D', '#10B981', '#8B5CF6'][i % 4]
                  }}
                />
              ))}
            </AnimatePresence>
          </div>
        );

      case 'dance':
        return (
          <motion.div
            className="text-6xl text-center"
            animate={{
              scale: [1, 0.8, 1.2, 1],
              rotate: [0, -10, 10, 0],
              x: [-20, 0, 20, 0]
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1]
            }}
          >
            💃
          </motion.div>
        );

      case 'celebration':
        return (
          <div className="text-center">
            <motion.div
              className="text-8xl mb-4"
              animate={{
                scale: [1, 2, 1.5, 1],
                rotate: [0, -15, 15, 0]
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                times: [0, 0.3, 0.6, 0.9, 1]
              }}
            >
              🏆
            </motion.div>

            {/* Stars around the trophy */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-3xl"
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 0
                }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 8) * 120,
                  y: Math.sin((i * Math.PI * 2) / 8) * 120,
                  scale: [0, 1, 1],
                  opacity: [0, 1, 1]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.1 + i * 0.1, 1]
                }}
              >
                ⭐
              </motion.div>
            ))}
          </div>
        );

      default:
        return (
          <motion.div
            className="text-6xl text-center"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1 }}
          >
            🎉
          </motion.div>
        );
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onAnimationComplete={onComplete}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-green-600 font-child mb-4 text-center">
              Excellent Work! 🌟
            </h2>
            <p className="text-lg text-gray-700 font-sans text-center">
              You've completed the exercise successfully!
            </p>

            {renderAnimationContent()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessAnimation;