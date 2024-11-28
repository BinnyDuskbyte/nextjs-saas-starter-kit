import React from "react";

interface StatisticCardProps {
  icon: string; // Path to the icon image
  title: string;
  subtitle: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center p-6 bg-blue-100 rounded-lg shadow-md">
      <img src={icon} alt={`${title} Icon`} className="w-12 h-12 mr-4" />
      <div>
        <h3 className="text-2xl font-bold text-blue-700">{title}</h3>
        <p className="text-blue-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default StatisticCard;
