import React from 'react'

const PersonalProjects: React.FC = () => {
    return (
      
        <div className='project-card'>
          <h2 className='centered-text'>Proyectos Personales</h2>
          <a href="https://github.com/chiwaka03/Flutter_app" target="_blank" className="no-style">
            <div className='text-project-card'>
              <h3>Thrift3r <span>&#8599;</span></h3>
              <p>Thrift3r simplifica la búsqueda de productos de segunda mano al permitir búsquedas simultáneas en múltiples plataformas de venta en línea. 
                Con un enfoque en la eficiencia y la comodidad, Thrift3r ahorra tiempo al encontrar
                productos deseados con una sola búsqueda, siendo una herramienta indispensable
                para quienes buscan productos de segunda mano con facilidad y rapidez.
              </p>
            </div>
        </a>
      </div>
    );
  };

  export default PersonalProjects;