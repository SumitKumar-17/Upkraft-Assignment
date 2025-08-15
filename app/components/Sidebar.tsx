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

    const sidebarClasses = "bg-[#4F46E5] text-white min-h-screen p-4 transition-all duration-300 flex flex-col justify-between";
    const mobileSidebarClasses = `fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${sidebarClasses}`;


    const SidebarContent = () => (
        <>
            <div>
                <div className={`flex items-center ${isOpen ? 'justify-between' : 'justify-center'} mb-10`}>
                    <span className={`font-bold text-2xl ${!isOpen && "hidden"}`}>UPKRAFT</span>
                    <button onClick={() => setIsOpen(!isOpen)} className={`p-1 rounded-full hover:bg-violet-700 hidden lg:block`}>
                        <ChevronLeft className={`transform transition-transform duration-300 ${!isOpen && "rotate-180"}`} />
                    </button>
                </div>
                <nav>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a href="#" className={`flex items-center p-3 my-1 rounded-lg transition-colors ${item.active ? 'bg-white text-violet-800' : 'hover:bg-violet-700'}`}>
                                    <item.icon className="h-5 w-5" />
                                    <span className={`ml-4 font-medium ${!isOpen && "hidden"}`}>{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div>
                <a href="#" className={`flex items-center p-3 my-1 rounded-lg hover:bg-violet-700`}>
                    <LogOut className="h-5 w-5" />
                    <span className={`ml-4 font-medium ${!isOpen && "hidden"}`}>Logout</span>
                </a>
            </div>
        </>
    );

    return (
        <>
            <div className={`${sidebarClasses} ${isOpen ? 'w-64' : 'w-20'} hidden lg:flex`}>
                <SidebarContent />
            </div>

            <div className="lg:hidden fixed bottom-4 right-4 z-50">
                <button onClick={() => setIsOpen(!isOpen)} className="p-3 bg-violet-800 text-white rounded-full shadow-lg">
                    <Menu />
                </button>
            </div>

            <div className={`${mobileSidebarClasses} w-64 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div>
                    <div className="flex items-center justify-between mb-10">
                        <span className="font-bold text-2xl">UPKRAFT</span>
                        <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-violet-700">
                            <ChevronLeft />
                        </button>
                    </div>
                    <nav>
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <a href="#" className={`flex items-center p-3 my-1 rounded-lg transition-colors ${item.active ? 'bg-white text-violet-800' : 'hover:bg-violet-700'}`}>
                                        <item.icon className="h-5 w-5" />
                                        <span className="ml-4 font-medium">{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div>
                    <a href="#" className="flex items-center p-3 my-1 rounded-lg hover:bg-violet-700">
                        <LogOut className="h-5 w-5" />
                        <span className="ml-4 font-medium">Logout</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
