import React from 'react';
import { CourseCard } from '../components/CourseCard';
import { useCourseStore } from '../store/courseStore';

export const Home = () => {
  const courses = useCourseStore((state) => state.courses);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to EduLMS</h1>
          <p className="text-xl text-gray-600">Discover and learn from our wide range of courses</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};