import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Circle, PlayCircle, Trophy, ChevronRight, ChevronLeft, Link as LinkIcon, FileText, LogOut } from 'lucide-react';
import { courseData, getNextLesson, getPrevLesson } from './data/courseData';
import { useProgress } from './hooks/useProgress';
import { getCourseStats } from './utils/courseStats';
import { useAuth } from './hooks/useAuth';

const getYoutubeId = (url: string) => {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\n]+)/);
  return match ? match[1] : null;
};

export default function App() {
  const [activeLessonId, setActiveLessonId] = useState<string>('1');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { completedLessons, markComplete, isCompleted } = useProgress();
  const { totalLessons, completedCount, percentage } = getCourseStats(completedLessons);
  const { user, loading, error, loginWithGoogle, logout } = useAuth();

  // Automatically close sidebar on mobile when a lesson is selected
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLessonSelect = (lessonId: string) => {
    setActiveLessonId(lessonId);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Masterclass</h1>
            <p className="text-gray-500">Masuk untuk mengakses materi pembelajaran</p>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-left">
              <p className="font-semibold mb-1">Gagal masuk:</p>
              <p>{error}</p>
              <p className="mt-2 text-xs">💡 Tips: Jika popup diblokir, klik tombol ikon kotak dengan tanda panah di pojok kanan atas layar ini untuk membuka aplikasi di tab baru, lalu coba login kembali.</p>
            </div>
          )}

          <button
            onClick={loginWithGoogle}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors font-medium text-lg shadow-sm"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Lanjutkan dengan Google
          </button>
        </div>
      </div>
    );
  }

  const activeModule = courseData.find(m => m.lessons.some(l => l.id === activeLessonId));
  const activeLesson = activeModule?.lessons.find(l => l.id === activeLessonId);
  const nextLesson = getNextLesson(activeLessonId);
  const prevLesson = getPrevLesson(activeLessonId);

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {!isSidebarOpen && window.innerWidth < 768 && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed z-50 top-4 left-4 p-2 bg-white rounded-md shadow-md text-gray-700"
        >
          <Menu size={24} />
        </button>
      )}
      
      {isSidebarOpen && window.innerWidth < 768 && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed md:static inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-900 text-white">
          <div>
            <h1 className="text-xl font-bold tracking-tight">ScaleV Masterclass</h1>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Cuan 282JT / 2 Bulan</p>
          </div>
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Overview */}
        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Progress Belajar</span>
            <span className="text-sm font-bold text-blue-600">{percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="mt-2 text-xs text-gray-500 text-right">
            {completedCount} dari {totalLessons} Selesai
          </div>
        </div>

        {/* Course Navigation */}
        <div className="flex-1 overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-gray-300">
          {courseData.map((module) => {
            const moduleCompletedCount = module.lessons.filter(l => isCompleted(l.id)).length;
            const isModuleCompleted = moduleCompletedCount === module.lessons.length;
            
            return (
              <div key={module.id} className="mb-4">
                <div className="px-4 py-2 flex justify-between items-center">
                  <h2 className="text-sm font-bold text-gray-800">{module.title}</h2>
                  {isModuleCompleted && <Trophy size={16} className="text-yellow-500" />}
                </div>
                <ul className="space-y-1">
                  {module.lessons.map((lesson) => {
                    const isActive = activeLessonId === lesson.id;
                    const completed = isCompleted(lesson.id);
                    return (
                      <li key={lesson.id}>
                        <button
                          onClick={() => handleLessonSelect(lesson.id)}
                          className={`w-full text-left px-4 py-3 flex items-start space-x-3 transition-colors ${
                            isActive 
                              ? 'bg-blue-50 border-l-4 border-blue-600' 
                              : 'border-l-4 border-transparent hover:bg-gray-50'
                          }`}
                        >
                          <div className="mt-0.5 flex-shrink-0">
                            {completed ? (
                              <CheckCircle size={18} className="text-green-500" />
                            ) : isActive ? (
                              <PlayCircle size={18} className="text-blue-600" />
                            ) : lesson.type === 'video' ? (
                              <PlayCircle size={18} className="text-gray-300" />
                            ) : lesson.type === 'link' ? (
                              <LinkIcon size={18} className="text-gray-300" />
                            ) : (
                              <FileText size={18} className="text-gray-300" />
                            )}
                          </div>
                          <div>
                            <p className={`text-sm ${isActive ? 'font-semibold text-blue-900' : 'font-medium text-gray-700'}`}>
                              {lesson.title}
                            </p>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full flex-shrink-0" referrerPolicy="no-referrer" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                {user?.displayName?.[0] || user?.email?.[0] || 'U'}
              </div>
            )}
            <div className="truncate">
              <p className="text-sm font-medium text-gray-900 truncate">{user?.displayName || 'Pelajar'}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
            title="Keluar"
          >
            <LogOut size={20} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-white">
        <div className="flex-1 overflow-y-auto">
          {activeLesson ? (
            <div className="max-w-4xl mx-auto w-full">
              {/* Video Player or Content Placeholder */}
              {activeLesson.type === 'video' && getYoutubeId(activeLesson.url || '') ? (
                <div className="w-full bg-black aspect-video relative flex items-center justify-center md:mt-6 md:rounded-xl overflow-hidden shadow-lg">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${getYoutubeId(activeLesson.url || '')}?rel=0`} 
                    title={activeLesson.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              ) : activeLesson.type === 'link' ? (
                <div className="w-full bg-blue-50 aspect-video relative flex flex-col items-center justify-center md:mt-6 md:rounded-xl overflow-hidden shadow-lg border border-blue-100">
                  <LinkIcon size={64} className="text-blue-400 mb-4" />
                  <h3 className="text-blue-900 text-lg font-medium mb-4 text-center px-4">{activeLesson.title}</h3>
                  {activeLesson.url && (
                    <a href={activeLesson.url} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Buka Tautan
                    </a>
                  )}
                </div>
              ) : (
                 <div className="w-full bg-gray-50 aspect-video relative flex flex-col items-center justify-center md:mt-6 md:rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <FileText size={64} className="text-gray-400 mb-4" />
                  <h3 className="text-gray-700 text-lg font-medium text-center px-4">{activeLesson.title}</h3>
                </div>
              )}

              {/* Lesson Content */}
              <div className="p-6 md:p-8">
                <div className="mb-2 flex items-center text-sm font-medium text-blue-600">
                  {activeModule?.title}
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                  {activeLesson.title}
                </h1>
                
                <div className="prose prose-blue max-w-none text-gray-600 mb-10 whitespace-pre-line">
                  <p className="text-lg leading-relaxed">{activeLesson.content || activeLesson.description}</p>
                  
                  {activeLesson.url && activeLesson.type !== 'link' && (
                    <div className="mt-4">
                       <a href={activeLesson.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                        <LinkIcon size={16} /> Buka Link Eksternal
                       </a>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-200 gap-4">
                  <button
                    onClick={() => markComplete(activeLesson.id)}
                    className={`flex-1 sm:flex-none w-full sm:w-auto px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all ${
                      isCompleted(activeLesson.id)
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                    }`}
                  >
                    <CheckCircle size={20} />
                    <span>{isCompleted(activeLesson.id) ? 'Selesai Dipelajari' : 'Tandai Selesai'}</span>
                  </button>

                  <div className="flex space-x-3 w-full sm:w-auto">
                    <button
                      onClick={() => prevLesson && handleLessonSelect(prevLesson.id)}
                      disabled={!prevLesson}
                      className="flex-1 sm:flex-none px-4 py-3 border border-gray-300 rounded-lg font-medium flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft size={20} className="mr-1" />
                      Sebelumnya
                    </button>
                    <button
                      onClick={() => {
                        if (!isCompleted(activeLesson.id)) {
                          markComplete(activeLesson.id);
                        }
                        if (nextLesson) handleLessonSelect(nextLesson.id);
                      }}
                      disabled={!nextLesson}
                      className="flex-1 sm:flex-none px-4 py-3 border border-gray-300 rounded-lg font-medium flex items-center justify-center text-gray-900 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Selanjutnya
                      <ChevronRight size={20} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center h-full text-gray-500">
              Pilih materi dari menu di samping untuk mulai belajar.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

