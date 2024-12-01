import React from 'react';
import { BookOpen, Clock, Award } from 'lucide-react';
import { useCourseStore } from '../store/courseStore';
import { useProgressStore } from '../store/progressStore';
import { ProgressBar } from '../components/ProgressBar';

export const Dashboard = () => {
  const courses = useCourseStore((state) => state.courses);
  const progress = useProgressStore((state) => state.progress);

  const totalCompleted = Object.values(progress).reduce(
    (acc, curr) => acc + curr.completed,
    0
  );

  const totalLessons = Object.values(progress).reduce(
    (acc, curr) => acc + curr.total,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <BookOpen className="h-10 w-10 text-indigo-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Enrolled Courses</p>
                <p className="text-2xl font-semibold">{courses.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <Clock className="h-10 w-10 text-green-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Lessons Completed</p>
                <p className="text-2xl font-semibold">{totalCompleted}/{totalLessons}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <Award className="h-10 w-10 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Certificates Earned</p>
                <p className="text-2xl font-semibold">2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">My Courses</h2>
          <div className="divide-y">
            {courses.map((course) => {
              const courseProgress = progress[course.id];
              return (
                <div key={course.id} className="py-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-500">{course.instructor}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 text-sm rounded-full ${
                        courseProgress.status === 'completed' ? 'bg-green-100 text-green-800' :
                        courseProgress.status === 'in-progress' ? 'bg-indigo-100 text-indigo-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {courseProgress.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                  <ProgressBar completed={courseProgress.completed} total={courseProgress.total} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};