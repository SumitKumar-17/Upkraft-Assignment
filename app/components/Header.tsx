import { Search, Bell, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="relative w-full max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search here"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-500 hover:text-gray-700">
          <Bell size={24} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <img
            src="https://placehold.co/40x40/EFEFEF/333?text=SW"
            alt="Sherry Wolf"
            className="h-10 w-10 rounded-full"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/40x40/EFEFEF/333?text=SW'; }}
          />
          <div>
            <p className="font-semibold text-sm">Sherry Wolf</p>
            <p className="text-xs text-gray-500">Tutor</p>
          </div>
          <ChevronDown size={20} className="text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
