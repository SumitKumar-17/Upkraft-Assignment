import { User, Book, Award } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-2 border-indigo-400">
      <h2 className="text-lg font-semibold mb-4">Profile</h2>
      <div className="flex flex-col items-center">
        <img
          src="https://placehold.co/100x100/EFEFEF/333?text=SW"
          alt="Sherry Wolf"
          className="h-24 w-24 rounded-full border-4 border-indigo-200"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/EFEFEF/333?text=SW'; }}
        />
        <h3 className="text-xl font-bold mt-4">Sherry Wolf</h3>
        <p className="text-gray-500">Piano Tutor</p>
        <div className="mt-4 space-y-2 w-full">
            <div className="flex items-center justify-between bg-indigo-50 p-2 rounded-lg">
                <div className="flex items-center">
                    <User className="text-indigo-500" />
                    <span className="ml-2 text-sm">Students</span>
                </div>
                <span className="font-bold text-indigo-800">30</span>
            </div>
            <div className="flex items-center justify-between bg-indigo-50 p-2 rounded-lg">
                <div className="flex items-center">
                    <Book className="text-indigo-500" />
                    <span className="ml-2 text-sm">Course</span>
                </div>
                <span className="font-bold text-indigo-800">6</span>
            </div>
             <div className="flex items-center justify-between bg-indigo-50 p-2 rounded-lg">
                <div className="flex items-center">
                    <Award className="text-indigo-500" />
                    <span className="ml-2 text-sm">Reward</span>
                </div>
                <span className="font-bold text-indigo-800">3</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
