import { Progress } from '@types/exercise';

const STORAGE_KEY = 'codekids-progress';

export const loadProgress = (): Progress | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;

    const parsed = JSON.parse(saved);
    // Convert date strings back to Date objects
    if (parsed.sequencing?.results) {
      parsed.sequencing.results = parsed.sequencing.results.map((result: any) => ({
        ...result,
        completedAt: result.completedAt ? new Date(result.completedAt) : undefined
      }));
    }
    if (parsed.events?.results) {
      parsed.events.results = parsed.events.results.map((result: any) => ({
        ...result,
        completedAt: result.completedAt ? new Date(result.completedAt) : undefined
      }));
    }
    if (parsed.loops?.results) {
      parsed.loops.results = parsed.loops.results.map((result: any) => ({
        ...result,
        completedAt: result.completedAt ? new Date(result.completedAt) : undefined
      }));
    }

    return parsed as Progress;
  } catch (error) {
    console.error('Failed to load progress:', error);
    return null;
  }
};

export const saveProgress = (progress: Progress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
};

export const clearProgress = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear progress:', error);
  }
};