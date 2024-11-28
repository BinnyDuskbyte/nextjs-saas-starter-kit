import React from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  photo: string; // Path to the photo image
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, photo, quote }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img src={photo} alt={`${name} Photo`} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;
