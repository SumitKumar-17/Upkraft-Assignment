import { Search, Bell, ChevronDown } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-white p-4 flex justify-between items-center">
            <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search here"
                    className="w-full bg-gray-100 pl-10 pr-4 py-2 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white"
                />
            </div>
            <div className="flex items-center space-x-6">
                <button className="relative text-gray-500 hover:text-gray-700">
                    <Bell size={24} />
                    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="flex items-center space-x-3 cursor-pointer">
                    <img
                        src="https://placehold.co/40x40/EFEFEF/333?text=SW"
                        alt="Sherry Wolf"
                        className="h-10 w-10 rounded-full"
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/40x40/EFEFEF/333?text=SW'; }}
                    />
                    <div className="hidden sm:block">
                        <p className="font-semibold text-sm">Sherry Wolf</p>
                        <p className="text-xs text-gray-500">Tutor</p>
                    </div>
                    <ChevronDown size={20} className="text-gray-500 hidden sm:block" />
                </div>
            </div>
        </header>
    );
};

export default Header;
