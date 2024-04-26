// Experience.tsx
import React from 'react';

interface ExperienceProps {
  title?: string;
  link: string;
  position: string;
  date?: string;
  description: string;
  image: { src: string; alt?: string }[]; // Array de objetos con src y alt opcional
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  link,
  position,
  date,
  description,
  image,
}) => {
  return (
    <div className='project-card'>
      <h2 className='centered-text'>{title}</h2>
      <a href={link} target="_blank" className="no-style">
        <div className='text-project-card'>
          <h3>{position} <span>&#8599;</span></h3>
          <h4>{date}</h4>
          <p>{description}</p>
          {image.map((imageObject) => (
            <img src={imageObject.src}
            alt={imageObject.alt}
            key={imageObject.src}
            width={"50"} height={"50"} />
          ))}
        </div>
      </a>
    </div>
  );
};

export default Experience;
