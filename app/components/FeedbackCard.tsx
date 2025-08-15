const FeedbackCard = () => {
    const percentage = (12 / 20) * 100;
    const circumference = 2 * Math.PI * 55;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center">
            <h3 className="text-md font-semibold text-gray-700 mb-4">Feedback Pending</h3>
            <div className="relative w-48 h-48 my-4">
                <svg className="w-full h-full" viewBox="0 0 120 120">
                    <circle className="text-gray-200 stroke-current" strokeWidth="10" cx="60" cy="60" r="55" fill="transparent"></circle>
                    <circle
                        className="text-red-500 stroke-current"
                        strokeWidth="10"
                        strokeLinecap="round"
                        cx="60"
                        cy="60"
                        r="55"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        transform="rotate(-90 60 60)"
                    ></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-red-500">12</span>
                    <span className="text-sm text-gray-500">Feedback Pending</span>
                </div>
            </div>
            <button className="w-full bg-[#4F46E5] text-white py-3 rounded-lg hover:bg-violet-800 transition-colors font-semibold">
                Give Feedback
            </button>
        </div>
    );
};

export default FeedbackCard;
