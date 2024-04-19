import React from 'react'

const PersonalProjects: React.FC = () => {
    return (
    
        <div className='project-card'>
          <a href="https://github.com/chiwaka03/Flutter_app" target="_blank" className="no-style">
            <div className='text-project-card'>
              <h3>Python (flask) <span>&#8599;</span></h3>
              <p>El proyecto desarrollado con Flask en Python se centró en la seguridad,
                utilizando diversas herramientas y bibliotecas para garantizar la
                protección de los datos y la autenticación de los usuarios.
                Se emplearon otras bibliotecas como Flask-Bcrypt para el cifrado
                de contraseñas y Flask-WTF para la validación de formularios.
                Se implementó un sistema de gestión de sesiones seguro utilizando
                SecureCookieSessionInterface.</p>
            </div>
        </a>
      </div>
    );
  };

  export default PersonalProjects;