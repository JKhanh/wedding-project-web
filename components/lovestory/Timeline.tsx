import React from 'react';
import Image from 'next/image';
import { LoveStoryEvent } from '@/types';

interface TimelineProps {
  events: LoveStoryEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative">
      {/* Line connecting events */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>
      
      <div className="space-y-16">
        {events.map((event, index) => (
          <div key={event.id} className="relative">
            {/* Date bubble */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10">
              <span className="text-white font-medium text-sm">{event.date.split('/')[0]}/{event.date.split('/')[1]}</span>
            </div>
            
            {/* Content */}
            <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
              {/* Image */}
              <div className="w-full md:w-5/12 p-4">
                {event.image && (
                  <div className="relative h-60 md:h-72 overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              
              {/* Text */}
              <div className="w-full md:w-5/12 p-4">
                <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">{event.title}</h3>
                  <p className="text-gray-700">{event.description}</p>
                  <p className="mt-2 text-sm text-gray-500">{event.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;