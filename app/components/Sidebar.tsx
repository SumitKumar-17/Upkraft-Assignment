import { useState } from 'react';
import {
  Home,
  Users,
  BookOpen,
  Calendar,
  ClipboardList,
  Library,
  PlaySquare,
  CreditCard,
  Gift,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Users, label: 'My Students' },
    { icon: BookOpen, label: 'My Courses' },
    { icon: Calendar, label: 'Calendar' },
    { icon: ClipboardList, label: 'Assignment' },
    { icon: Library, label: 'Music Library' },
    { icon: PlaySquare, label: 'Practice Studio' },
    { icon: CreditCard, label: 'Payment Summary' },
    { icon: Gift, label: 'Refer & Earn' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      <div className={`bg-indigo-700 text-white ${isOpen ? 'w-64' : 'w-20'} min-h-screen p-4 transition-all duration-300 hidden lg:flex flex-col justify-between`}>
        <div>
          <div className="flex items-center justify-between mb-10">
            <span className={`font-bold text-2xl ${!isOpen && "hidden"}`}>UPKRAFT</span>
            <button onClick={() => setIsOpen(!isOpen)} className="p-1 rounded-full hover:bg-indigo-600">
              <ChevronLeft className={`transform transition-transform duration-300 ${!isOpen && "rotate-180"}`} />
            </button>
          </div>
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href="#" className={`flex items-center p-3 my-1 rounded-lg transition-colors ${item.active ? 'bg-white text-indigo-700' : 'hover:bg-indigo-600'}`}>
                    <item.icon className="h-5 w-5" />
                    <span className={`ml-4 font-medium ${!isOpen && "hidden"}`}>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <a href="#" className="flex items-center p-3 my-1 rounded-lg hover:bg-indigo-600">
            <LogOut className="h-5 w-5" />
            <span className={`ml-4 font-medium ${!isOpen && "hidden"}`}>Logout</span>
          </a>
        </div>
      </div>
       <div className="lg:hidden fixed bottom-4 right-4 z-50">
            <button onClick={() => setIsOpen(!isOpen)} className="p-3 bg-indigo-700 text-white rounded-full shadow-lg">
                <Menu />
            </button>
        </div>
        <div className={`fixed inset-y-0 left-0 bg-indigo-700 text-white w-64 p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-40 flex flex-col justify-between`}>
             <div>
                <div className="flex items-center justify-between mb-10">
                    <span className="font-bold text-2xl">UPKRAFT</span>
                     <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-indigo-600">
                        <ChevronLeft />
                    </button>
                </div>
                <nav>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a href="#" className={`flex items-center p-3 my-1 rounded-lg transition-colors ${item.active ? 'bg-white text-indigo-700' : 'hover:bg-indigo-600'}`}>
                                    <item.icon className="h-5 w-5" />
                                    <span className="ml-4 font-medium">{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div>
                <a href="#" className="flex items-center p-3 my-1 rounded-lg hover:bg-indigo-600">
                    <LogOut className="h-5 w-5" />
                    <span className="ml-4 font-medium">Logout</span>
                </a>
            </div>
        </div>
    </>
  );
};

export default Sidebar;
