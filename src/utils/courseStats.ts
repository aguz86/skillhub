import { courseData } from '../data/courseData';

export const getCourseStats = (completedLessons: string[]) => {
  const totalLessons = courseData.reduce((acc, mod) => acc + mod.lessons.length, 0);
  const completedCount = completedLessons.length;
  const percentage = Math.round((completedCount / totalLessons) * 100) || 0;

  return { totalLessons, completedCount, percentage };
};
