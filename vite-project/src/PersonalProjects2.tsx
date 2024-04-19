import React from 'react'

const PersonalProjects: React.FC = () => {
    return (
    
        <div className='project-card'>
          <a href="https://github.com/chiwaka03/Flutter_app" target="_blank" className="no-style">
            <div className='text-project-card'>
              <h3>Python (flask) <span>&#8599;</span></h3>
              <p>En Vetito, lideré proyectos de rediseño de páginas web en Wordpress, 
              enfocándome en mejorar la estética y la usabilidad. 
              Me especialicé en el desarrollo frontend, 
              adaptando temas y plugins para lograr los objetivos de diseño y funcionalidad.</p>
            </div>
        </a>
      </div>
    );
  };

  export default PersonalProjects;