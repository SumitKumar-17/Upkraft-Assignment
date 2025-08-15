import { User, Book, Award } from 'lucide-react';

const ProfileCard = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Profile</h2>
            <div className="flex flex-col items-center">
                <div className="relative">
                    <img
                        src="https://placehold.co/100x100/EFEFEF/333?text=SW"
                        alt="Sherry Wolf"
                        className="h-24 w-24 rounded-full border-4 border-blue-200"
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/EFEFEF/333?text=SW'; }}
                    />
                </div>
                <h3 className="text-xl font-bold mt-4 text-gray-900">Sherry Wolf</h3>
                <p className="text-gray-500 text-sm">Piano Tutor</p>
                <div className="mt-6 space-y-3 w-full">
                    <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center">
                            <User className="text-blue-500" />
                            <span className="ml-3 text-sm font-medium text-gray-700">Students</span>
                        </div>
                        <span className="font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full text-sm">30</span>
                    </div>
                    <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center">
                            <Book className="text-blue-500" />
                            <span className="ml-3 text-sm font-medium text-gray-700">Course</span>
                        </div>
                        <span className="font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full text-sm">6</span>
                    </div>
                    <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center">
                            <Award className="text-blue-500" />
                            <span className="ml-3 text-sm font-medium text-gray-700">Reward</span>
                        </div>
                        <span className="font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full text-sm">3</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
