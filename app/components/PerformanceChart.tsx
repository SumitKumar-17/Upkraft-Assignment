interface PerformanceChartProps {
  title: string;
  score: number;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ title, score }) => {
  const percentage = (score / 10) * 100;
  const circumference = 2 * Math.PI * 45; 
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  let colorClass = 'text-green-500';
  if (score < 7) colorClass = 'text-yellow-500';
  if (score < 4) colorClass = 'text-red-500';
  
  let strokeColorClass = 'stroke-green-500';
  if (score < 7) strokeColorClass = 'stroke-yellow-500';
  if (score < 4) strokeColorClass = 'stroke-red-500';


  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <h3 className="text-md font-semibold text-gray-700 mb-4">{title}</h3>
      <div className="relative w-40 h-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
          ></circle>
          <circle
            className={`${strokeColorClass} stroke-current transition-all duration-500`}
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 50 50)"
          ></circle>
        </svg>
        <div className={`absolute inset-0 flex flex-col items-center justify-center ${colorClass}`}>
          <span className="text-4xl font-bold">{score}</span>
          <span className="text-sm">/10</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
