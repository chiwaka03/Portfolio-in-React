import React from 'react'

const Experience: React.FC = () => {
    return (
         <div className='project-card'>
          <h2 className='centered-text'>Experiencia Laboral</h2>
          <a href="https://www.vetito.xyz/" target="_blank" className="no-style">
            <div className='text-project-card'>
              <h3>Developer - Vetito <span>&#8599;</span></h3>
              <h4>Dic 2023 - Enero 2024</h4>
              <p>
              En Vetito, lideré proyectos de rediseño de páginas web en Wordpress, 
              enfocándome en mejorar la estética y la usabilidad. 
              Me especialicé en el desarrollo frontend, 
              adaptando temas y plugins para lograr los objetivos de diseño y funcionalidad.</p>
            </div>
          </a>
        </div>
        
      );
  };

export default Experience