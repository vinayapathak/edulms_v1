import React from 'react';
import { Clock, BookOpen, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Course } from '../types/course';
import { ProgressBar } from './ProgressBar';
import { useProgressStore } from '../store/progressStore';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const progress = useProgressStore((state) => state.progress[course.id]);

  return (
    <Link to={`/course/${course.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className={`px-3 py-1 rounded-full text-sm ${
              course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
              course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {course.level}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <User className="h-4 w-4 mr-1" />
            <span className="mr-4">{course.instructor}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          {progress && (
            <ProgressBar completed={progress.completed} total={progress.total} />
          )}
        </div>
      </div>
    </Link>
  );
};