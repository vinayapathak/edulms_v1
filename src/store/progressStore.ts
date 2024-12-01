import { create } from 'zustand';
import { CourseProgress } from '../types/progress';

interface ProgressStore {
  progress: Record<string, CourseProgress>;
  updateProgress: (courseId: string, progress: CourseProgress) => void;
}

export const useProgressStore = create<ProgressStore>((set) => ({
  progress: {
    '1': {
      courseId: '1',
      completed: 3,
      total: 8,
      lastAccessed: '2024-03-15',
      status: 'in-progress'
    },
    '2': {
      courseId: '2',
      completed: 1,
      total: 10,
      lastAccessed: '2024-03-14',
      status: 'in-progress'
    }
  },
  updateProgress: (courseId, progress) =>
    set((state) => ({
      progress: { ...state.progress, [courseId]: progress }
    }))
}));