import React from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = Math.round((completed / total) * 100);
  
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>{`${completed}/${total} completed`}</span>
        <span>{`${percentage}%`}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};