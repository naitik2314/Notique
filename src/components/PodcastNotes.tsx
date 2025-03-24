import React, { useState } from 'react';
import { SearchIcon, PlusIcon, ClockIcon, BookmarkIcon } from 'lucide-react';
interface TimeStamp {
  time: string;
  note: string;
}
interface PodcastNote {
  id: number;
  title: string;
  host: string;
  episodeNumber: string;
  content: string;
  date: string;
  duration: string;
  category: string;
  timestamps: TimeStamp[];
}
const PodcastNotes: React.FC = () => {
  const [notes, setNotes] = useState<PodcastNote[]>([{
    id: 1,
    title: 'The Future of AI',
    host: 'Tech Insights Show',
    episodeNumber: 'EP 145',
    content: 'Discussion about emerging AI trends and their impact...',
    date: 'Today',
    duration: '1:25:00',
    category: 'Technology',
    timestamps: [{
      time: '15:30',
      note: 'Discussion about machine learning applications'
    }, {
      time: '45:20',
      note: 'Impact of AI on job market'
    }]
  }, {
    id: 2,
    title: 'Mindfulness Practices',
    host: 'Wellness Weekly',
    episodeNumber: 'EP 67',
    content: 'Exploring different meditation techniques...',
    date: 'Yesterday',
    duration: '45:00',
    category: 'Health',
    timestamps: [{
      time: '10:15',
      note: 'Morning meditation routine'
    }, {
      time: '25:30',
      note: 'Breathing exercises'
    }]
  }]);
  const [activeNote, setActiveNote] = useState(notes[0]);
  const [newTimestamp, setNewTimestamp] = useState({
    time: '',
    note: ''
  });
  const addTimestamp = () => {
    if (newTimestamp.time && newTimestamp.note) {
      setActiveNote({
        ...activeNote,
        timestamps: [...activeNote.timestamps, newTimestamp]
      });
      setNewTimestamp({
        time: '',
        note: ''
      });
    }
  };
  return <div className="flex flex-col md:flex-row h-full">
      <div className="md:w-72 border-r border-gray-200 overflow-auto">
        <div className="p-4">
          <div className="relative">
            <SearchIcon size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search podcast notes..." className="w-full py-2 pl-9 pr-3 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500" />
          </div>
          <button className="mt-4 w-full py-2 px-3 bg-indigo-500 text-white rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-indigo-600 transition-colors">
            <PlusIcon size={16} />
            Add Podcast Note
          </button>
        </div>
        <div className="px-3 py-2">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider px-2 mb-2">
            Podcast Notes
          </h3>
          <ul className="space-y-1">
            {notes.map(note => <li key={note.id}>
                <button className={`w-full text-left px-3 py-2 rounded-lg ${activeNote.id === note.id ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'}`} onClick={() => setActiveNote(note)}>
                  <h4 className="text-sm font-medium truncate">{note.title}</h4>
                  <p className="text-xs text-gray-500 truncate mt-1">
                    {note.host} • {note.episodeNumber}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">{note.date}</span>
                    <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                      {note.duration}
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
                <ClockIcon size={16} className="text-indigo-500" />
                <span className="text-sm text-gray-500">
                  {activeNote.duration}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                {activeNote.category}
              </span>
            </div>
            <span className="text-sm text-gray-500">{activeNote.date}</span>
          </div>
          <div className="space-y-6">
            <div>
              <input type="text" value={activeNote.title} className="w-full text-2xl md:text-3xl font-light text-gray-800 border-none focus:outline-none focus:ring-0 bg-transparent" placeholder="Episode title" onChange={e => setActiveNote({
              ...activeNote,
              title: e.target.value
            })} />
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <input type="text" value={activeNote.host} className="flex-1 min-w-[200px] text-base md:text-lg text-gray-600 border-none focus:outline-none focus:ring-0 bg-transparent" placeholder="Podcast name" onChange={e => setActiveNote({
                ...activeNote,
                host: e.target.value
              })} />
                <span className="text-gray-400">•</span>
                <input type="text" value={activeNote.episodeNumber} className="w-20 text-base md:text-lg text-gray-600 border-none focus:outline-none focus:ring-0 bg-transparent" placeholder="EP #" onChange={e => setActiveNote({
                ...activeNote,
                episodeNumber: e.target.value
              })} />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-sm font-medium text-gray-800">
                    Timestamps & Key Points
                  </h3>
                  <div className="flex items-center gap-2">
                    <input type="text" placeholder="00:00" className="w-20 px-2 py-1 text-sm border border-gray-200 rounded" value={newTimestamp.time} onChange={e => setNewTimestamp({
                    ...newTimestamp,
                    time: e.target.value
                  })} />
                    <input type="text" placeholder="Add note..." className="flex-1 min-w-[150px] px-2 py-1 text-sm border border-gray-200 rounded" value={newTimestamp.note} onChange={e => setNewTimestamp({
                    ...newTimestamp,
                    note: e.target.value
                  })} />
                    <button onClick={addTimestamp} className="p-1 text-indigo-500 hover:bg-indigo-50 rounded">
                      <BookmarkIcon size={16} />
                    </button>
                  </div>
                </div>
                <ul className="space-y-2">
                  {activeNote.timestamps.map((timestamp, index) => <li key={index} className="flex items-start gap-3 text-sm">
                      <span className="text-indigo-500 font-medium whitespace-nowrap">
                        {timestamp.time}
                      </span>
                      <span className="text-gray-700">{timestamp.note}</span>
                    </li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800 mb-2">
                  Notes
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
export default PodcastNotes;