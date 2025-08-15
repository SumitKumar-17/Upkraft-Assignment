const ReferralCard = () => {
    return (
        <div className="bg-indigo-700 text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img
                src="https://placehold.co/120x120/FFFFFF/4F46E5?text=Gift"
                alt="Refer and Earn"
                className="h-28 w-28 mb-4"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/120x120/FFFFFF/4F46E5?text=Gift'; }}
            />
            <h3 className="text-xl font-bold">Refer and Earn</h3>
            <p className="text-indigo-200 mt-2 mb-4 text-sm">
                Invite friends and earn exclusive rewards for every successful referral.
            </p>
            <button className="bg-white text-indigo-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Refer Now &rarr;
            </button>
        </div>
    );
};

export default ReferralCard;
