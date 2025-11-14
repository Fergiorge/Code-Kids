import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { GameState, Progress, ExerciseResult, ExerciseCategory } from '@types/exercise';
import { loadProgress, saveProgress } from '@utils/progressStorage';

type GameStateAction =
  | { type: 'SET_CATEGORY'; payload: ExerciseCategory }
  | { type: 'SET_EXERCISE'; payload: number }
  | { type: 'COMPLETE_EXERCISE'; payload: { category: ExerciseCategory; level: number; result: ExerciseResult } }
  | { type: 'TOGGLE_SOUND' }
  | { type: 'LOAD_PROGRESS'; payload: Progress }
  | { type: 'RESET_PROGRESS' };

const initialProgress: Progress = {
  sequencing: { current: 1, completed: [], results: [] },
  events: { current: 1, completed: [], results: [] },
  loops: { current: 1, completed: [], results: [] },
  unlocked: { sequencing: true, events: false, loops: false },
  totalStars: 0,
  achievements: [],
};

const initialGameState: GameState = {
  currentCategory: null,
  currentExercise: null,
  progress: initialProgress,
  soundEnabled: true,
  hintsEnabled: true,
};

function gameStateReducer(state: GameState, action: GameStateAction): GameState {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, currentCategory: action.payload };

    case 'SET_EXERCISE':
      return { ...state, currentExercise: action.payload };

    case 'COMPLETE_EXERCISE': {
      const { category, level, result } = action.payload;
      const newProgress = { ...state.progress };

      // Mark exercise as completed
      if (!newProgress[category].completed.includes(level)) {
        newProgress[category].completed.push(level);
        newProgress[category].current = level + 1;
        newProgress.totalStars += 1;
      }

      // Add result
      newProgress[category].results.push(result);

      // Unlock next category if completed all exercises
      if (category === 'sequencing' && newProgress[category].completed.length === 20) {
        newProgress.unlocked.events = true;
      } else if (category === 'events' && newProgress[category].completed.length === 20) {
        newProgress.uncovered.loops = true;
      }

      saveProgress(newProgress);

      return { ...state, progress: newProgress };
    }

    case 'TOGGLE_SOUND':
      return { ...state, soundEnabled: !state.soundEnabled };

    case 'LOAD_PROGRESS':
      return { ...state, progress: action.payload };

    case 'RESET_PROGRESS':
      return { ...state, progress: initialProgress };

    default:
      return state;
  }
}

const GameStateContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameStateAction>;
} | undefined>(undefined);

export const GameStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameStateReducer, initialGameState);

  // Load progress on mount
  useEffect(() => {
    const savedProgress = loadProgress();
    if (savedProgress) {
      dispatch({ type: 'LOAD_PROGRESS', payload: savedProgress });
    }
  }, []);

  return (
    <GameStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameState = () => {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
};