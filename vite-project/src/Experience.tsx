// Experience.tsx
import React from 'react';

interface ExperienceProps {
  title?: string;
  link: string;
  position: string;
  date?: string;
  description: string;
  image?: { src: string; alt?: string }[]; // Array de objetos con src y alt opcional
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  link,
  position,
  date,
  description,
  image,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className='project-card'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h2 className='centered-text'>{title}</h2>  
      <a href={link} target="_blank" rel="noopener noreferrer" className="no-style">
        <div className='text-project-card'>
          <h3>{position} <span>&#8599;</span></h3>
          <h4>{date}</h4>
          <p>{description}</p>
            {image && (
            <div className='image-container'>
              {image.map((imageObject) => (
                <img
                  src={imageObject.src}
                  alt={imageObject.alt}
                  key={imageObject.src}
                  width="40"
                  height="40"
                  style={{ margin: '5px' }}
                />
              ))}
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default Experience;

{/* El atributo rel="noopener noreferrer" evita que la página
enlazada pueda acceder al objeto window.opener, mejorando la
seguridad al prevenir ataques de tipo phishing o manipulación
del contenido de la página original */}