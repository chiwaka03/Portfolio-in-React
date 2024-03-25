import React from 'react';
import './CSS/CardApple.css';

const CardApple: React.FC = () => {
  return (
    <div className="window-apple">
      <div className="superior-bar">
        <div className="buttons">
          <div className="button button-red"></div>
          <div className="button button-yellow"></div>
          <div className="button button-green"></div>
        </div>
        <h2 className="title-skills">Habilidades</h2>
      </div>
      <div className="text-style">
        <span className='text-color-import'>import </span>
        <span>Skills</span><br />

        <span className='comment-color'># Array de tecnologías de backend</span><br />
        <span className='variable-color'>backend </span>= 
          <span className='bracket-color'>[</span> 
            <span className='array-color'> "Python" </span>,
            <span className='array-color'> "Java" </span>,
            <span className='array-color'> "PHP" </span>  
          <span className='bracket-color'>]</span> <br />

        <span className='comment-color'># Array de bases de datos</span><br />
        <span className='variable-color'>databases </span>= 
          <span className='bracket-color'>[</span> 
            <span className='array-color'> "MySQL" </span>,
            <span className='array-color'> "PostgreSQL" </span>
          <span className='bracket-color'>]</span> <br />

        <span className='comment-color'># Array de tecnologías de frontend </span><br />
        <span className='variable-color'>frontend</span>= 
          <span className='bracket-color'>[</span> 
            <span className='array-color'> "HTML" </span>,
            <span className='array-color'> "CSS" </span>,
            <span className='array-color'> "JavaScript" </span>
          <span className='bracket-color'>]</span> <br />

        <span className='comment-color'># Array de frameworks </span><br />
        <span className='variable-color'>frameworks</span>= 
          <span className='bracket-color'>[</span> 
            <span className='array-color'> "Sylius" </span>,
            <span className='array-color'> "Flask" </span>
          <span className='bracket-color'>]</span> <br />


        <span className='comment-color'># Array de versiones de control </span><br />
        <span className='variable-color'>version_control</span>= 
          <span className='bracket-color'>[</span> 
            <span className='array-color'> "Git" </span>,
            <span className='array-color'> "GitHub" </span>,
            <span className='array-color'> "GitLab" </span>
          <span className='bracket-color'>]</span> <br />

      </div>
    </div>
  );
};

export default CardApple;
