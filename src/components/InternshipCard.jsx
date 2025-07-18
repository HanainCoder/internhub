import React from 'react';
import { BadgeCheck, AlertCircle } from 'lucide-react';

const InternshipCard = ({ data }) => {
  const isOpen = data.status === "Open";

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <h3 className="text-lg font-bold text-indigo-700 mb-1">{data.title}</h3>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium text-gray-800">Department:</span> {data.department}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium text-gray-800">Duration:</span> {data.duration} weeks
      </p>
      <p className="text-sm text-gray-600 mb-3">
        <span className="font-medium text-gray-800">Stipend:</span> Rs. {data.stipend}
      </p>

      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold 
        ${isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
        {isOpen ? <BadgeCheck className="w-4 h-4 mr-1" /> : <AlertCircle className="w-4 h-4 mr-1" />}
        {data.status}
      </div>
    </div>
  );
};

export default InternshipCard;
