interface StatsCardProps {
  title: string;
  value: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <p className="text-3xl font-bold text-indigo-700">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{title}</p>
    </div>
  );
};

export default StatsCard;
