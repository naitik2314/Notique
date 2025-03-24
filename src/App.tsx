import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import NotesArea from './components/NotesArea';
import TodoList from './components/TodoList';
import Calendar from './components/Calendar';
import BookNotes from './components/BookNotes';
import PodcastNotes from './components/PodcastNotes';
import AIAssistant from './components/AIAssistant';
export function App() {
  const [activeView, setActiveView] = useState('notes');
  const [aiSuggestionActive, setAiSuggestionActive] = useState(false);
  return <div className="flex flex-col md:flex-row w-full h-screen bg-[#f8f8f5]">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 flex flex-col h-full overflow-hidden order-first md:order-none">
        <header className="px-4 md:px-8 py-4 md:py-6 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-light text-gray-800">
            {activeView === 'notes' && 'Notes'}
            {activeView === 'tasks' && 'Tasks'}
            {activeView === 'calendar' && 'Calendar'}
            {activeView === 'books' && 'Book Notes'}
            {activeView === 'podcasts' && 'Podcast Notes'}
          </h1>
          <button className={`flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm transition-all ${aiSuggestionActive ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setAiSuggestionActive(!aiSuggestionActive)}>
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span className="hidden md:inline">AI Assistant</span>
            <span className="md:hidden">AI</span>
          </button>
        </header>
        <div className="flex-1 overflow-auto">
          {activeView === 'notes' && <NotesArea />}
          {activeView === 'tasks' && <TodoList />}
          {activeView === 'calendar' && <Calendar />}
          {activeView === 'books' && <BookNotes />}
          {activeView === 'podcasts' && <PodcastNotes />}
        </div>
        {aiSuggestionActive && <AIAssistant />}
      </main>
    </div>;
}