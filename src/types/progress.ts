export interface CourseProgress {
  courseId: string;
  completed: number;
  total: number;
  lastAccessed: string;
  status: 'not-started' | 'in-progress' | 'completed';
}