export type ExerciseCategory = 'sequencing' | 'events' | 'loops';
export type InteractionType = 'dragdrop' | 'clicktrigger' | 'repeat';
export type VisualTheme = 'robot' | 'magic' | 'patterns';
export type AnimationType = 'bounce' | 'sparkle' | 'confetti' | 'dance' | 'celebration';

export interface ExerciseSolution {
  type: InteractionType;
  correctSequence?: string[];
  conditions?: Array<{
    trigger: string;
    condition: string;
    action: string;
  }>;
  repetitions?: {
    min: number;
    max: number;
    pattern?: string[];
  };
}

export interface Exercise {
  id: string;
  category: ExerciseCategory;
  level: number; // 1-20 within category
  title: string;
  instructions: string;
  visualTheme: VisualTheme;
  interactionType: InteractionType;
  solution: ExerciseSolution;
  hints: string[];
  successAnimation: AnimationType;
  character?: string; // Character name for this exercise
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface ExerciseResult {
  exerciseId: string;
  completed: boolean;
  attempts: number;
  hintsUsed: number;
  timeSpent: number; // in seconds
  completedAt?: Date;
}

export interface Progress {
  sequencing: {
    current: number; // 1-20, 21 means completed all
    completed: number[]; // Array of completed exercise numbers
    results: ExerciseResult[];
  };
  events: {
    current: number; // 1-20, 21 means completed all
    completed: number[]; // Array of completed exercise numbers
    results: ExerciseResult[];
  };
  loops: {
    current: number; // 1-20, 21 means completed all
    completed: number[]; // Array of completed exercise numbers
    results: ExerciseResult[];
  };
  unlocked: {
    sequencing: boolean; // Always true
    events: boolean; // Unlocked after completing all sequencing
    loops: boolean; // Unlocked after completing all events
  };
  totalStars: number;
  achievements: string[];
}

export interface GameState {
  currentCategory: ExerciseCategory | null;
  currentExercise: number | null;
  progress: Progress;
  soundEnabled: boolean;
  hintsEnabled: boolean;
}