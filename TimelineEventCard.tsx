import React from 'react';

interface TimelineEventCardProps {
  title: string;
  date: string;
  description: string;
  category: string;
  mediaUrl?: string;
}

const TimelineEventCard: React.FC<TimelineEventCardProps> = ({ title, date, description, category, mediaUrl }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-start bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {/* Date on the left for larger screens, above title for smaller */}
      <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0 md:pr-6 text-center md:text-left">
        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">{category}</p>
        <h3 className="text-xl font-bold text-gray-800 mt-1">{date}</h3>
      </div>

      {/* Content on the right */}
      <div className="md:w-3/4 flex-grow">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        {mediaUrl && (
          <div className="mt-4">
            <img
              src={mediaUrl}
              alt={title}
              className="w-full h-48 object-cover rounded-md shadow-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineEventCard;
