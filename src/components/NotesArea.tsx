import React, { useState } from 'react';
import { SearchIcon, PlusIcon, FolderIcon } from 'lucide-react';
import Modal from './shared/Modal';
const NotesArea: React.FC = () => {
  const [notes, setNotes] = useState([{
    id: 1,
    title: 'Project Ideas',
    content: 'Brainstorming session for Q3 marketing campaign',
    date: 'Today',
    category: 'Work'
  }, {
    id: 2,
    title: 'Book Recommendations',
    content: 'List of books to read this summer',
    date: 'Yesterday',
    category: 'Personal'
  }, {
    id: 3,
    title: 'Meeting Notes',
    content: 'Discussion points from team meeting',
    date: '2 days ago',
    category: 'Work'
  }]);
  const [activeNote, setActiveNote] = useState(notes[0]);
  const [isNewNoteModalOpen, setIsNewNoteModalOpen] = useState(false);
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    category: 'Personal'
  });
  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    const note = {
      id: notes.length + 1,
      title: newNote.title,
      content: newNote.content,
      category: newNote.category,
      date: 'Today'
    };
    setNotes([note, ...notes]);
    setActiveNote(note);
    setNewNote({
      title: '',
      content: '',
      category: 'Personal'
    });
    setIsNewNoteModalOpen(false);
  };
  return <div className="flex flex-col md:flex-row h-full">
      <div className="md:w-72 border-r border-gray-200 overflow-auto">
        <div className="p-4">
          <div className="relative">
            <SearchIcon size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search notes..." className="w-full py-2 pl-9 pr-3 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500" />
          </div>
          <button onClick={() => setIsNewNoteModalOpen(true)} className="mt-4 w-full py-2 px-3 bg-indigo-500 text-white rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-indigo-600 transition-colors">
            <PlusIcon size={16} />
            <span>New Note</span>
          </button>
        </div>
        <div className="px-3 py-2 md:block">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider px-2 mb-2">
            Recent Notes
          </h3>
          <ul className="space-y-1">
            {notes.map(note => <li key={note.id}>
                <button className={`w-full text-left px-3 py-2 rounded-lg ${activeNote.id === note.id ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'}`} onClick={() => setActiveNote(note)}>
                  <h4 className="text-sm font-medium truncate">{note.title}</h4>
                  <p className="text-xs text-gray-500 truncate mt-1">
                    {note.content}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">{note.date}</span>
                    <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                      {note.category}
                    </span>
                  </div>
                </button>
              </li>)}
          </ul>
        </div>
      </div>
      <div className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              <span className="text-sm text-gray-500">
                {activeNote.category}
              </span>
            </div>
            <span className="text-sm text-gray-500">{activeNote.date}</span>
          </div>
          <input type="text" value={activeNote.title} className="w-full text-2xl md:text-3xl font-light text-gray-800 border-none focus:outline-none focus:ring-0 mb-4 bg-transparent" placeholder="Note title" onChange={e => setActiveNote({
          ...activeNote,
          title: e.target.value
        })} />
          <textarea value={activeNote.content} className="w-full h-full min-h-[300px] text-gray-700 border-none focus:outline-none focus:ring-0 bg-transparent resize-none" placeholder="Start writing..." onChange={e => setActiveNote({
          ...activeNote,
          content: e.target.value
        })} />
        </div>
      </div>
      <Modal isOpen={isNewNoteModalOpen} onClose={() => setIsNewNoteModalOpen(false)} title="Create New Note">
        <form onSubmit={handleCreateNote} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input type="text" value={newNote.title} onChange={e => setNewNote({
            ...newNote,
            title: e.target.value
          })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Note title" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select value={newNote.category} onChange={e => setNewNote({
            ...newNote,
            category: e.target.value
          })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea value={newNote.content} onChange={e => setNewNote({
            ...newNote,
            content: e.target.value
          })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none" rows={4} placeholder="Start writing..." required />
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <button type="button" onClick={() => setIsNewNoteModalOpen(false)} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 text-sm text-white bg-indigo-500 hover:bg-indigo-600 rounded-md">
              Create Note
            </button>
          </div>
        </form>
      </Modal>
    </div>;
};
export default NotesArea;