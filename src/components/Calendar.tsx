import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon } from 'lucide-react';
const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const days = Array.from({
    length: daysInMonth
  }, (_, i) => i + 1);
  const blanks = Array.from({
    length: firstDayOfMonth
  }, (_, i) => i);
  const events = [{
    id: 1,
    day: 8,
    title: 'Team Meeting',
    time: '10:00 AM',
    category: 'Work',
    color: 'bg-indigo-100 text-indigo-800 border-indigo-200'
  }, {
    id: 2,
    day: 15,
    title: 'Dentist Appointment',
    time: '2:30 PM',
    category: 'Personal',
    color: 'bg-green-100 text-green-800 border-green-200'
  }, {
    id: 3,
    day: 22,
    title: 'Client Presentation',
    time: '11:00 AM',
    category: 'Work',
    color: 'bg-indigo-100 text-indigo-800 border-indigo-200'
  }, {
    id: 4,
    day: 22,
    title: 'Dinner with Friends',
    time: '7:00 PM',
    category: 'Personal',
    color: 'bg-green-100 text-green-800 border-green-200'
  }];
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  const monthName = currentMonth.toLocaleString('default', {
    month: 'long'
  });
  const year = currentMonth.getFullYear();
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return <div className="p-3 md:p-6 max-w-5xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-xl md:text-2xl font-light text-gray-800">
          {monthName} {year}
        </h2>
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button className="p-2 rounded-full hover:bg-gray-100" onClick={prevMonth} aria-label="Previous month">
            <ChevronLeftIcon size={20} />
          </button>
          <button className="px-3 py-1.5 bg-gray-100 rounded-md text-sm" aria-label="Today">
            Today
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100" onClick={nextMonth} aria-label="Next month">
            <ChevronRightIcon size={20} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 md:gap-4">
        {weekdays.map((day, index) => <div key={index} className="text-center text-xs md:text-sm font-medium text-gray-500 py-2">
            {day}
          </div>)}
        {blanks.map(blank => <div key={`blank-${blank}`} className="aspect-square p-1 md:p-2 rounded-lg"></div>)}
        {days.map(day => {
        const dayEvents = events.filter(event => event.day === day);
        const today = new Date().getDate() === day && new Date().getMonth() === currentMonth.getMonth() && new Date().getFullYear() === currentMonth.getFullYear();
        return <div key={`day-${day}`} className={`aspect-square p-1 md:p-2 rounded-lg border ${today ? 'border-indigo-300 bg-indigo-50' : 'border-gray-100 hover:border-gray-200'}`}>
              <div className="h-full flex flex-col">
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs md:text-sm mb-0.5 md:mb-1 ${today ? 'bg-indigo-500 text-white' : 'text-gray-700'}`}>
                  {day}
                </div>
                <div className="flex-1 overflow-y-auto">
                  {dayEvents.map(event => <div key={event.id} className={`mb-0.5 md:mb-1 p-1 md:p-1.5 text-[10px] md:text-xs rounded border ${event.color}`}>
                      <div className="font-medium truncate">{event.title}</div>
                      <div className="hidden md:block">{event.time}</div>
                    </div>)}
                </div>
              </div>
            </div>;
      })}
      </div>
    </div>;
};
export default Calendar;