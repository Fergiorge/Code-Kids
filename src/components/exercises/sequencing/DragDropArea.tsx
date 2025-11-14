import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSounds } from '@hooks/useSounds';

interface DragDropAreaProps {
  correctSequence: string[];
  onSequenceChange: (sequence: string[]) => void;
  onCheckAnswer: () => void;
  actionLabels: Record<string, string>;
}

const DragDropArea: React.FC<DragDropAreaProps> = ({
  correctSequence,
  onSequenceChange,
  onCheckAnswer,
  actionLabels
}) => {
  const [availableItems, setAvailableItems] = useState<string[]>([]);
  const [droppedSequence, setDroppedSequence] = useState<(string | null)[]>([]);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const { playClick, playSuccess, playError } = useSounds();

  useEffect(() => {
    // Shuffle and set available items
    const shuffled = [...correctSequence].sort(() => Math.random() - 0.5);
    setAvailableItems(shuffled);
    setDroppedSequence(new Array(correctSequence.length).fill(null));
  }, [correctSequence]);

  const handleDragStart = (item: string, fromSequence: boolean = false) => {
    playClick();
    setDraggedItem(item);

    if (fromSequence) {
      // Remove from dropped sequence
      const newSequence = [...droppedSequence];
      const index = newSequence.indexOf(item);
      if (index !== -1) {
        newSequence[index] = null;
      }
      setDroppedSequence(newSequence);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();

    if (!draggedItem) return;

    playClick();

    const newSequence = [...droppedSequence];

    // Find where the dragged item came from
    const fromSequenceIndex = droppedSequence.indexOf(draggedItem);
    const fromAvailableIndex = availableItems.indexOf(draggedItem);

    if (fromSequenceIndex !== -1) {
      // Moving within sequence
      newSequence[fromSequenceIndex] = null;
    } else if (fromAvailableIndex !== -1) {
      // Moving from available to sequence
      setAvailableItems(availableItems.filter(item => item !== draggedItem));
    }

    // Place in target position
    if (newSequence[targetIndex] !== null) {
      // If target has an item, swap them
      const targetItem = newSequence[targetIndex];
      if (targetItem) {
        const targetIndexInAvailable = availableItems.indexOf(targetItem);
        const targetIndexInSequence = droppedSequence.indexOf(targetItem);

        if (targetIndexInAvailable !== -1) {
          // Move dragged item back to available
          setAvailableItems([...availableItems, draggedItem]);
        } else if (targetIndexInSequence !== -1) {
          // Swap positions in sequence
          newSequence[targetIndexInSequence] = draggedItem;
        }
      }
    }

    newSequence[targetIndex] = draggedItem;
    setDroppedSequence(newSequence);
    setDraggedItem(null);

    // Notify parent of sequence change
    const cleanSequence = newSequence.filter(item => item !== null) as string[];
    onSequenceChange(cleanSequence);
  };

  const handleDropToAvailable = (e: React.DragEvent) => {
    e.preventDefault();

    if (!draggedItem) return;

    // Return dragged item to available area
    const fromSequenceIndex = droppedSequence.indexOf(draggedItem);
    if (fromSequenceIndex !== -1) {
      const newSequence = [...droppedSequence];
      newSequence[fromSequenceIndex] = null;
      setDroppedSequence(newSequence);
    }

    setAvailableItems([...availableItems, draggedItem]);
    setDraggedItem(null);
  };

  const checkAnswer = () => {
    playClick();

    const sequenceWithoutNulls = droppedSequence.filter(item => item !== null) as string[];
    const isCorrectSequence = JSON.stringify(sequenceWithoutNulls) === JSON.stringify(correctSequence);

    if (isCorrectSequence) {
      setIsCorrect(true);
      playSuccess();
    } else {
      playError();
    }

    onCheckAnswer();
  };

  const reset = () => {
    playClick();
    setIsCorrect(false);
    const shuffled = [...correctSequence].sort(() => Math.random() - 0.5);
    setAvailableItems(shuffled);
    setDroppedSequence(new Array(correctSequence.length).fill(null));
  };

  const renderActionCard = (action: string, isDraggable: boolean = true, index?: number) => {
    const content = actionLabels[action] || action;
    const words = content.split(' ');
    const displayText = words.length > 3 ? `${words.slice(0, 3).join(' ')}...` : content;

    return (
      <motion.div
        draggable={isDraggable}
        onDragStart={() => isDraggable && handleDragStart(action, index !== undefined)}
        className={`px-3 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-lg font-bold text-sm cursor-move shadow-lg flex-shrink-0 text-center ${
          !isDraggable ? 'opacity-60 cursor-not-allowed' : ''
        } ${draggedItem === action ? 'opacity-50 scale-95' : ''} ${
          isCorrect && correctSequence.includes(action) ? 'bg-green-500' : ''
        }`}
        whileHover={isDraggable ? { scale: 1.05 } : {}}
        whileTap={isDraggable ? { scale: 0.95 } : {}}
      >
        <span className="select-none">{displayText}</span>
      </motion.div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Available Items */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-700 font-child mb-4 text-center">
          Available Actions
        </h3>
        <motion.div
          onDragOver={handleDragOver}
          onDrop={handleDropToAvailable}
          className="min-h-[80px] flex flex-wrap gap-3 justify-center p-4 bg-white rounded-lg border-2 border-dashed border-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          <AnimatePresence>
            {availableItems.map((item) => (
              <motion.div
                key={item}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {renderActionCard(item)}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Drop Zone */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-700 font-child mb-4 text-center">
          Your Program
        </h3>
        <div className="flex gap-3 justify-center flex-wrap min-h-[100px] p-4">
          {droppedSequence.map((item, index) => (
            <motion.div
              key={index}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              className="w-32 h-16 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center bg-white shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AnimatePresence>
                {item && (
                  <motion.div
                    key={item}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderActionCard(item, true, index)}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {isCorrect && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="text-center py-6"
          >
            <div className="text-6xl mb-4">🎉</div>
            <div className="text-2xl font-bold text-green-600 font-child">
              Excellent! The sequence is correct!
            </div>
            <div className="text-lg text-gray-600 font-sans">
              You've mastered this exercise!
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      {!isCorrect && (
        <div className="flex justify-center space-x-4 pt-6">
          <motion.button
            onClick={checkAnswer}
            className="btn-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check Program ✓
          </motion.button>

          <motion.button
            onClick={reset}
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset ↻
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default DragDropArea;