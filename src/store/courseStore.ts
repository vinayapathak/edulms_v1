import { create } from 'zustand';
import { Course } from '../types/course';

interface CourseStore {
  courses: Course[];
  setCourses: (courses: Course[]) => void;
}

export const useCourseStore = create<CourseStore>((set) => ({
  courses: [
    {
      id: '1',
      title: 'Introduction to React Development',
      description: 'Learn the fundamentals of React including components, hooks, and state management.',
      instructor: 'Sarah Johnson',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
      duration: '8 weeks',
      level: 'Beginner',
      topics: ['React', 'JavaScript', 'Web Development']
    },
    {
      id: '2',
      title: 'Advanced TypeScript Programming',
      description: 'Master TypeScript with advanced concepts and real-world applications.',
      instructor: 'Michael Chen',
      thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
      duration: '10 weeks',
      level: 'Advanced',
      topics: ['TypeScript', 'JavaScript', 'Programming']
    }
  ],
  setCourses: (courses) => set({ courses })
}));