import React from 'react';
import { motion } from 'framer-motion';
import { useSounds } from '@hooks/useSounds';

const SoundToggle: React.FC = () => {
  const { isSoundEnabled, toggleSound } = useSounds();

  return (
    <motion.button
      onClick={toggleSound}
      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isSoundEnabled ? 'Mute sound' : 'Enable sound'}
    >
      <motion.div
        key={isSoundEnabled ? 'on' : 'off'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-2xl"
      >
        {isSoundEnabled ? '🔊' : '🔇'}
      </motion.div>
    </motion.button>
  );
};

export default SoundToggle;