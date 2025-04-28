import React, { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '', id }) => {
  return (
    <section id={id} className={`py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-dark">{title}</h2>
            <div className="mt-2 w-24 h-1 bg-primary mx-auto"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;