import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';

interface SoundContextType {
  isSoundEnabled: boolean;
  toggleSound: () => void;
  playSound: (soundName: string) => void;
  playSuccess: () => void;
  playError: () => void;
  playClick: () => void;
  playCharacterSound: (character: 'robot' | 'fairy' | 'cat') => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(() => {
    return localStorage.getItem('codekids-sound-enabled') !== 'false';
  });

  const sounds = useRef<Record<string, Howl>>({});

  useEffect(() => {
    // Load sound files (for now, we'll use placeholder URLs)
    const soundFiles = {
      click: '/sounds/click.mp3',
      success: '/sounds/success.mp3',
      error: '/sounds/error.mp3',
      robot: '/sounds/robot-beep.mp3',
      fairy: '/sounds/fairy-sparkle.mp3',
      cat: '/sounds/cat-meow.mp3',
      unlock: '/sounds/unlock.mp3',
      complete: '/sounds/complete.mp3',
    };

    // Create Howl instances for each sound
    Object.entries(soundFiles).forEach(([name, path]) => {
      sounds.current[name] = new Howl({
        src: [path],
        volume: 0.7,
      });
    });

    return () => {
      // Cleanup sounds on unmount
      Object.values(sounds.current).forEach(sound => sound.unload());
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('codekids-sound-enabled', String(isSoundEnabled));
  }, [isSoundEnabled]);

  const toggleSound = () => {
    setIsSoundEnabled(!isSoundEnabled);
    // Play a test sound when enabling
    if (!isSoundEnabled && sounds.current.click) {
      sounds.current.click.play();
    }
  };

  const playSound = (soundName: string) => {
    if (!isSoundEnabled || !sounds.current[soundName]) return;
    sounds.current[soundName].play();
  };

  const playSuccess = () => playSound('success');
  const playError = () => playSound('error');
  const playClick = () => playSound('click');

  const playCharacterSound = (character: 'robot' | 'fairy' | 'cat') => {
    playSound(character);
  };

  const value: SoundContextType = {
    isSoundEnabled,
    toggleSound,
    playSound,
    playSuccess,
    playError,
    playClick,
    playCharacterSound,
  };

  return (
    <SoundContext.Provider value={value}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSounds = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSounds must be used within a SoundProvider');
  }
  return context;
};