import React from 'react';
import Timeline from '@/components/Timeline';

const mockEvents = [
  {
    id: '1',
    title: 'Started First Job',
    date: 'Jan 2010',
    description: 'Began my professional career as a junior software developer at Tech Solutions Inc. This marked a significant milestone in my journey.',
    category: 'Career',
    mediaUrl: 'https://placehold.co/600x400/E0F2F7/2C3E50?text=First+Job'
  },
  {
    id: '2',
    title: 'Graduated University',
    date: 'May 2009',
    description: 'Completed my Bachelor of Science degree in Computer Science from State University. Celebrated with friends and family.',
    category: 'Education',
    mediaUrl: 'https://placehold.co/600x400/D1E7DD/1F4E37?text=Graduation'
  },
  {
    id: '3',
    title: 'Moved to New City',
    date: 'Aug 2012',
    description: 'Relocated to San Francisco for a new opportunity. It was a big change but an exciting adventure.',
    category: 'Personal',
    mediaUrl: 'https://placehold.co/600x400/FEEBC8/6B46C1?text=New+City'
  },
  {
    id: '4',
    title: 'Published First Book',
    date: 'Mar 2018',
    description: 'Achieved a lifelong dream of publishing my first novel, "The Quantum Paradox." It was a challenging but rewarding experience.',
    category: 'Achievement',
    mediaUrl: 'https://placehold.co/600x400/FCE7F3/9C36B5?text=First+Book'
  }
];

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Your Life Timeline</h1>
        
        <div className="mb-8">
          <Timeline events={mockEvents} />
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Add New Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
