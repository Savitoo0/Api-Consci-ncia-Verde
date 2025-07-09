import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="py-16" id={title.toLowerCase().replace(/\s+/g, '-')}> {/* ID para scroll suave */}
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
