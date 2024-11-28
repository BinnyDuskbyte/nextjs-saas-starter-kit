import React from "react";

interface FeatureCardProps {
  icon: string; // Path to the icon image
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <img src={icon} alt={`${title} Icon`} className="w-16 h-16 mb-4" />
      <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
