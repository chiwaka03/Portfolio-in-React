// Experience.tsx
import React from 'react';

interface ExperienceProps {
  title?: string;
  link: string;
  position: string;
  date?: string;
  description: string;
}

const Experience: React.FC<ExperienceProps> = ({ title, link, position, date, description }) => {
  return (
    <div className='project-card'>
      <h2 className='centered-text'>{title}</h2>
      <a href={link} target="_blank" className="no-style">
        <div className='text-project-card'>
          <h3>{position} <span>&#8599;</span></h3>
          <h4>{date}</h4>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Experience;
