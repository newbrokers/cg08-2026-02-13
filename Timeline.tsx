import React from 'react';
import TimelineEventCard from './TimelineEventCard';

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  mediaUrl?: string;
}

interface TimelineProps {
  events: Event[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  if (events.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        No events to display yet. Add your first event!
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {events.map((event) => (
        <TimelineEventCard
          key={event.id}
          title={event.title}
          date={event.date}
          description={event.description}
          category={event.category}
          mediaUrl={event.mediaUrl}
        />
      ))}
    </div>
  );
};

export default Timeline;
