interface StatsCardProps {
    title: string;
    value: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col justify-center items-start">
            <p className="text-3xl font-bold text-gray-800">{value}</p>
            <p className="text-sm text-gray-500 mt-1">{title}</p>
        </div>
    );
};

export default StatsCard;
