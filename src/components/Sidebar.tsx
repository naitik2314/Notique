import React from 'react';
import { CheckSquareIcon, CalendarIcon, SettingsIcon, BoxIcon, BookIcon, HeadphonesIcon } from 'lucide-react';
interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}
const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  setActiveView
}) => {
  const navItems = [{
    id: 'notes',
    label: 'Notes',
    icon: BoxIcon
  }, {
    id: 'tasks',
    label: 'Tasks',
    icon: CheckSquareIcon
  }, {
    id: 'calendar',
    label: 'Calendar',
    icon: CalendarIcon
  }, {
    id: 'books',
    label: 'Books',
    icon: BookIcon
  }, {
    id: 'podcasts',
    label: 'Podcasts',
    icon: HeadphonesIcon
  }];
  // Desktop Sidebar
  const DesktopSidebar = <aside className="hidden md:flex w-20 border-r border-gray-200 flex-col items-center py-8 bg-white">
      <div className="w-10 h-10 rounded-full bg-indigo-500 mb-10 flex items-center justify-center text-white font-medium">
        M
      </div>
      <nav className="flex-1">
        <ul className="flex flex-col gap-6">
          {navItems.map(item => <li key={item.id}>
              <button className={`p-3 rounded-xl transition-all flex items-center justify-center ${activeView === item.id ? 'bg-indigo-100 text-indigo-700' : 'text-gray-400 hover:text-gray-700'}`} onClick={() => setActiveView(item.id)} aria-label={item.label}>
                <item.icon size={20} />
              </button>
            </li>)}
        </ul>
      </nav>
      <button className="mt-auto p-3 text-gray-400 hover:text-gray-700 transition-colors">
        <SettingsIcon size={20} />
      </button>
    </aside>;
  // Mobile Bottom Navigation
  const MobileNav = <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white px-4 py-2">
      <ul className="flex items-center justify-between">
        {navItems.map(item => <li key={item.id}>
            <button className={`p-3 rounded-xl transition-all flex flex-col items-center gap-1 ${activeView === item.id ? 'text-indigo-700' : 'text-gray-400'}`} onClick={() => setActiveView(item.id)}>
              <item.icon size={20} />
              <span className="text-xs">{item.label}</span>
            </button>
          </li>)}
      </ul>
    </nav>;
  return <>
      {DesktopSidebar}
      {MobileNav}
    </>;
};
export default Sidebar;