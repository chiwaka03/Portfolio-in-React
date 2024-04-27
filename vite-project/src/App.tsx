import './CSS/styles.css'
import Body from './Body'
import Experience from './Experience.tsx';
import AboutMe from './AboutMe.tsx';
import SocialButtons from './SocialButtons.tsx';
import PortfolioExplain from './PortfolioExplain.tsx';
import SyliusImage from './assets/sylius.svg'; 


const App: React.FC = () => {
  const generateAlt = (src: string): string => {
    const filename = src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('.'));
    return filename.replace(/[-_]/g, ' ');
  };

  return (
    <div className='first-part'>
      <div className='half-1'>
          <Body />
        <SocialButtons />
      </div>
      
      <div className='half-2'>
          <AboutMe />
        <div className='space-between'>
          <Experience
            title="Experiencia Laboral"
            link="https://www.vetito.xyz/"
            position="Developer - Vetito"
            date="Dic 2023 - Enero 2024"
            description="En Vetito, lideré proyectos de rediseño de páginas web en Wordpress,
            enfocándome en mejorar la estética y la usabilidad. Me especialicé en el desarrollo
            frontend, adaptando temas y plugins para lograr los objetivos de diseño y funcionalidad."
            image={[
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg"},
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
            ].map(image => ({ ...image, alt: generateAlt(image.src) }))}
          />
          <Experience
            link="https://fidenet.net/"
            position="FrontEnd Developer - Fidenet"
            date="Mayo - Sept 2023"
            description="En Fidenet, trabajé en proyectos de implementación y personalización
            de páginas web, utilizando el framework de Sylius, Wordpress, 
            así como HTML y CSS. Me enfoqué en mejorar la seguridad y la 
            usabilidad de los sitios web, siguiendo diseños previamente
            establecidos por otros. Mejoré mis habilidades en el desarrollo frontend."
            image={[
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg"},
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
              { src:  SyliusImage},
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
            ].map(image => ({ ...image, alt: generateAlt(image.src) }))}
          />
          <Experience
            link="https://www.volkswagenvasa.com/"
            position="IT Helper - Vasa Taldea"
            date="Marzo - Mayo 2021"
            description="En Vasa Taldea, contribuí brindando soporte integral en la gestión de documentos, 
            realizando copias físicas y almacenamiento en la nube. Además, 
            participé en labores de mantenimiento de equipos para garantizar su óptimo funcionamiento.
            Esta experiencia me permitió fortalecer mis habilidades en gestión documental y mantenimiento de sistemas."
            
          />
        </div>

        <div className='space-between'>
        <Experience
          title='Proyectos Personales'
          link="https://github.com/chiwaka03/Flutter_app"
          position="Thrift3r"
          description="Thrift3r simplifica la búsqueda de productos de segunda mano al permitir búsquedas simultáneas en múltiples plataformas de venta en línea. 
          Con un enfoque en la eficiencia y la comodidad, Thrift3r ahorra tiempo al encontrar
          productos deseados con una sola búsqueda, siendo una herramienta indispensable
          para quienes buscan productos de segunda mano con facilidad y rapidez."
          image={[
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg' },
          ].map(image => ({ ...image, alt: generateAlt(image.src) }))}
        />
        <Experience
          link="https://github.com/chiwaka03/Login-Page"
          position="Python (flask)"
          description="El proyecto desarrollado con Flask en Python se centró en la seguridad,
          utilizando diversas herramientas y bibliotecas para garantizar la
          protección de los datos y la autenticación de los usuarios.
          Se emplearon otras bibliotecas como Flask-Bcrypt para el cifrado
          de contraseñas y Flask-WTF para la validación de formularios.
          Se implementó un sistema de gestión de sesiones seguro utilizando
          SecureCookieSessionInterface."
          image={[
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
          ].map(image => ({ ...image, alt: generateAlt(image.src) }))}
        />
        </div>
        <PortfolioExplain/> 

      </div>
    </div>
    
  );
};

export default App
