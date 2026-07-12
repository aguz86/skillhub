import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

const PROGRESS_KEY = 'scalev_course_progress';

export const useProgress = () => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const loadProgress = async () => {
      if (user) {
        try {
          const docRef = doc(db, 'user_progress', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setCompletedLessons(docSnap.data().completedLessons || []);
          } else {
            // Check local storage and migrate if exists
            const saved = localStorage.getItem(PROGRESS_KEY);
            if (saved) {
              const parsed = JSON.parse(saved);
              setCompletedLessons(parsed);
              await setDoc(docRef, { completedLessons: parsed });
              localStorage.removeItem(PROGRESS_KEY); // clean up
            }
          }
        } catch (e) {
          console.error("Failed to load progress from Firestore", e);
        }
      } else {
        const saved = localStorage.getItem(PROGRESS_KEY);
        if (saved) {
          try {
            setCompletedLessons(JSON.parse(saved));
          } catch (e) {
            console.error('Failed to parse progress', e);
          }
        }
      }
    };
    
    loadProgress();
  }, [user]);

  const saveProgress = async (next: string[]) => {
    if (user) {
      try {
        await setDoc(doc(db, 'user_progress', user.uid), { completedLessons: next }, { merge: true });
      } catch (error) {
        console.error("Error saving progress to Firestore", error);
      }
    } else {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
    }
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
