import React, { useState } from 'react';
import { CheckIcon, PlusIcon, ArrowUpIcon, ClockIcon, TagIcon } from 'lucide-react';
const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Prepare presentation for client meeting',
    completed: false,
    priority: 'high',
    category: 'Work',
    time: '10:00 AM'
  }, {
    id: 2,
    text: 'Review quarterly reports',
    completed: false,
    priority: 'medium',
    category: 'Work',
    time: '2:00 PM'
  }, {
    id: 3,
    text: 'Schedule dentist appointment',
    completed: true,
    priority: 'low',
    category: 'Personal',
    time: null
  }, {
    id: 4,
    text: 'Order new office supplies',
    completed: false,
    priority: 'low',
    category: 'Work',
    time: null
  }]);
  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? {
      ...task,
      completed: !task.completed
    } : task));
  };
  const priorityColors = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-yellow-100 text-yellow-700',
    low: 'bg-green-100 text-green-700'
  };
  return <div className="max-w-3xl mx-auto w-full p-6">
      <div className="mb-8">
        <div className="relative mb-6">
          <input type="text" placeholder="Add a new task..." className="w-full py-3 pr-12 pl-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500" />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-indigo-500 text-white rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
            <PlusIcon size={16} />
          </button>
        </div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-800">Today's Tasks</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="font-medium">Sort by:</span>
            <button className="px-2 py-1 rounded hover:bg-gray-100">
              Priority
            </button>
            <button className="px-2 py-1 rounded bg-gray-100">Time</button>
          </div>
        </div>
        <ul className="space-y-3">
          {tasks.filter(task => !task.completed).map(task => <li key={task.id} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 shadow-sm">
                <button className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${task.completed ? 'border-indigo-500 bg-indigo-500' : 'border-gray-300'}`} onClick={() => toggleTask(task.id)} aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}>
                  {task.completed && <CheckIcon size={14} className="text-white" />}
                </button>
                <div className="flex-1">
                  <p className={`${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                    {task.text}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    {task.time && <div className="flex items-center gap-1 text-xs text-gray-500">
                        <ClockIcon size={12} />
                        <span>{task.time}</span>
                      </div>}
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <TagIcon size={12} />
                      <span>{task.category}</span>
                    </div>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-xs ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                  {task.priority}
                </div>
              </li>)}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-medium text-gray-800 mb-4">Completed</h2>
        <ul className="space-y-2">
          {tasks.filter(task => task.completed).map(task => <li key={task.id} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 opacity-60">
                <button className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${task.completed ? 'border-indigo-500 bg-indigo-500' : 'border-gray-300'}`} onClick={() => toggleTask(task.id)} aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}>
                  {task.completed && <CheckIcon size={14} className="text-white" />}
                </button>
                <div className="flex-1">
                  <p className="line-through text-gray-400">{task.text}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <TagIcon size={12} />
                      <span>{task.category}</span>
                    </div>
                  </div>
                </div>
              </li>)}
        </ul>
      </div>
    </div>;
};
export default TodoList;