import React, { useState } from 'react';
import { SearchIcon, PlusIcon, BookOpenIcon, StarIcon } from 'lucide-react';
interface BookNote {
  id: number;
  title: string;
  author: string;
  content: string;
  date: string;
  progress: string;
  rating: number;
  genre: string;
}
const BookNotes: React.FC = () => {
  const [notes, setNotes] = useState<BookNote[]>([{
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    content: 'Key insights on building better habits and breaking bad ones...',
    date: 'Today',
    progress: 'Reading',
    rating: 5,
    genre: 'Self-Development'
  }, {
    id: 2,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    content: 'Timeless lessons on wealth, greed, and happiness...',
    date: 'Yesterday',
    progress: 'Completed',
    rating: 4,
    genre: 'Finance'
  }, {
    id: 3,
    title: 'Deep Work',
    author: 'Cal Newport',
    content: 'Rules for focused success in a distracted world...',
    date: '2 days ago',
    progress: 'To Read',
    genre: 'Productivity'
  }]);
  const [activeNote, setActiveNote] = useState(notes[0]);
  const progressColors = {
    Reading: 'bg-yellow-100 text-yellow-800',
    Completed: 'bg-green-100 text-green-800',
    'To Read': 'bg-gray-100 text-gray-800'
  };
  return <div className="flex flex-col md:flex-row h-full">
      <div className="md:w-72 border-r border-gray-200 overflow-auto">
        <div className="p-4">
          <div className="relative">
            <SearchIcon size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search book notes..." className="w-full py-2 pl-9 pr-3 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500" />
          </div>
          <button className="mt-4 w-full py-2 px-3 bg-indigo-500 text-white rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-indigo-600 transition-colors">
            <PlusIcon size={16} />
            Add Book Note
          </button>
        </div>
        <div className="px-3 py-2">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider px-2 mb-2">
            Book Notes
          </h3>
          <ul className="space-y-1">
            {notes.map(note => <li key={note.id}>
                <button className={`w-full text-left px-3 py-2 rounded-lg ${activeNote.id === note.id ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'}`} onClick={() => setActiveNote(note)}>
                  <h4 className="text-sm font-medium truncate">{note.title}</h4>
                  <p className="text-xs text-gray-500 truncate mt-1">
                    by {note.author}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">{note.date}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${progressColors[note.progress as keyof typeof progressColors]}`}>
                      {note.progress}
                    </span>
                  </div>
                </button>
              </li>)}
          </ul>
        </div>
      </div>
      <div className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <BookOpenIcon size={16} className="text-indigo-500" />
                <span className="text-sm text-gray-500">
                  {activeNote.genre}
                </span>
              </div>
              {activeNote.rating && <div className="flex items-center gap-1">
                  {Array.from({
                length: activeNote.rating
              }).map((_, i) => <StarIcon key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                </div>}
            </div>
            <span className="text-sm text-gray-500">{activeNote.date}</span>
          </div>
          <div className="space-y-6">
            <div>
              <input type="text" value={activeNote.title} className="w-full text-2xl md:text-3xl font-light text-gray-800 border-none focus:outline-none focus:ring-0 bg-transparent" placeholder="Book title" onChange={e => setActiveNote({
              ...activeNote,
              title: e.target.value
            })} />
              <input type="text" value={activeNote.author} className="w-full text-base md:text-lg text-gray-600 border-none focus:outline-none focus:ring-0 bg-transparent mt-1" placeholder="Author" onChange={e => setActiveNote({
              ...activeNote,
              author: e.target.value
            })} />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-800 mb-2">
                  Key Takeaways
                </h3>
                <textarea className="w-full h-32 p-3 text-sm md:text-base text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none" placeholder="Main ideas and insights from the book..." />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800 mb-2">
                  Detailed Notes
                </h3>
                <textarea value={activeNote.content} className="w-full h-64 text-sm md:text-base text-gray-700 border-none focus:outline-none focus:ring-0 bg-transparent resize-none" placeholder="Start writing your notes..." onChange={e => setActiveNote({
                ...activeNote,
                content: e.target.value
              })} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default BookNotes;