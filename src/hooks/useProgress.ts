import { useState, useEffect } from 'react';

const PROGRESS_KEY = 'scalev_course_progress';

export const useProgress = () => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(PROGRESS_KEY);
    if (saved) {
      try {
        setCompletedLessons(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse progress', e);
      }
    }
  }, []);

  const saveProgress = (next: string[]) => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
  };

  const markComplete = (lessonId: string) => {
    setCompletedLessons((prev) => {
      if (prev.includes(lessonId)) return prev;
      const next = [...prev, lessonId];
      saveProgress(next);
      return next;
    });
  };

  const markIncomplete = (lessonId: string) => {
    setCompletedLessons((prev) => {
      const next = prev.filter(id => id !== lessonId);
      saveProgress(next);
      return next;
    });
  };

  const isCompleted = (lessonId: string) => completedLessons.includes(lessonId);

  return { completedLessons, markComplete, markIncomplete, isCompleted };
};
